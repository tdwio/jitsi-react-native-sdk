"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../base/media/constants");
const actionTypes_1 = require("../base/participants/actionTypes");
const ReducerRegistry_1 = __importDefault(require("../base/redux/ReducerRegistry"));
const actionTypes_2 = require("./actionTypes");
const constants_2 = require("./constants");
const initialState = {
    audioModerationEnabled: false,
    videoModerationEnabled: false,
    audioWhitelist: {},
    videoWhitelist: {},
    pendingAudio: [],
    pendingVideo: []
};
/**
 * Updates a participant in the state for the specified media type.
 *
 * @param {MediaType} mediaType - The media type.
 * @param {Object} participant - Information about participant to be modified.
 * @param {Object} state - The current state.
 * @private
 * @returns {boolean} - Whether state instance was modified.
 */
function _updatePendingParticipant(mediaType, participant, state) {
    let arrayItemChanged = false;
    const storeKey = constants_2.MEDIA_TYPE_TO_PENDING_STORE_KEY[mediaType];
    const arr = state[storeKey];
    const newArr = arr.map((pending) => {
        if (pending.id === participant.id) {
            arrayItemChanged = true;
            return {
                ...pending,
                ...participant
            };
        }
        return pending;
    });
    if (arrayItemChanged) {
        state[storeKey] = newArr;
        return true;
    }
    return false;
}
ReducerRegistry_1.default.register('features/av-moderation', (state = initialState, action) => {
    switch (action.type) {
        case actionTypes_2.DISABLE_MODERATION: {
            const newState = action.mediaType === constants_1.MEDIA_TYPE.AUDIO
                ? {
                    audioModerationEnabled: false,
                    audioUnmuteApproved: undefined
                } : {
                videoModerationEnabled: false,
                videoUnmuteApproved: undefined
            };
            return {
                ...state,
                ...newState,
                audioWhitelist: {},
                videoWhitelist: {},
                pendingAudio: [],
                pendingVideo: []
            };
        }
        case actionTypes_2.ENABLE_MODERATION: {
            const newState = action.mediaType === constants_1.MEDIA_TYPE.AUDIO
                ? { audioModerationEnabled: true } : { videoModerationEnabled: true };
            return {
                ...state,
                ...newState
            };
        }
        case actionTypes_2.LOCAL_PARTICIPANT_APPROVED: {
            const newState = action.mediaType === constants_1.MEDIA_TYPE.AUDIO
                ? { audioUnmuteApproved: true } : { videoUnmuteApproved: true };
            return {
                ...state,
                ...newState
            };
        }
        case actionTypes_2.LOCAL_PARTICIPANT_REJECTED: {
            const newState = action.mediaType === constants_1.MEDIA_TYPE.AUDIO
                ? { audioUnmuteApproved: false } : { videoUnmuteApproved: false };
            return {
                ...state,
                ...newState
            };
        }
        case actionTypes_2.PARTICIPANT_PENDING_AUDIO: {
            const { participant } = action;
            // Add participant to pendingAudio array only if it's not already added
            if (!state.pendingAudio.find(pending => pending.id === participant.id)) {
                const updated = [...state.pendingAudio];
                updated.push(participant);
                return {
                    ...state,
                    pendingAudio: updated
                };
            }
            return state;
        }
        case actionTypes_1.PARTICIPANT_UPDATED: {
            const participant = action.participant;
            const { audioModerationEnabled, videoModerationEnabled } = state;
            let hasStateChanged = false;
            // skips changing the reference of pendingAudio or pendingVideo,
            // if there is no change in the elements
            if (audioModerationEnabled) {
                hasStateChanged = _updatePendingParticipant(constants_1.MEDIA_TYPE.AUDIO, participant, state);
            }
            if (videoModerationEnabled) {
                hasStateChanged = hasStateChanged || _updatePendingParticipant(constants_1.MEDIA_TYPE.VIDEO, participant, state);
            }
            // If the state has changed we need to return a new object reference in order to trigger subscriber updates.
            if (hasStateChanged) {
                return {
                    ...state
                };
            }
            return state;
        }
        case actionTypes_1.PARTICIPANT_LEFT: {
            const participant = action.participant;
            const { audioModerationEnabled, videoModerationEnabled } = state;
            let hasStateChanged = false;
            // skips changing the reference of pendingAudio or pendingVideo,
            // if there is no change in the elements
            if (audioModerationEnabled) {
                const newPendingAudio = state.pendingAudio.filter(pending => pending.id !== participant.id);
                if (state.pendingAudio.length !== newPendingAudio.length) {
                    state.pendingAudio = newPendingAudio;
                    hasStateChanged = true;
                }
            }
            if (videoModerationEnabled) {
                const newPendingVideo = state.pendingVideo.filter(pending => pending.id !== participant.id);
                if (state.pendingVideo.length !== newPendingVideo.length) {
                    state.pendingVideo = newPendingVideo;
                    hasStateChanged = true;
                }
            }
            // If the state has changed we need to return a new object reference in order to trigger subscriber updates.
            if (hasStateChanged) {
                return {
                    ...state
                };
            }
            return state;
        }
        case actionTypes_2.DISMISS_PENDING_PARTICIPANT: {
            const { id, mediaType } = action;
            if (mediaType === constants_1.MEDIA_TYPE.AUDIO) {
                return {
                    ...state,
                    pendingAudio: state.pendingAudio.filter(pending => pending.id !== id)
                };
            }
            if (mediaType === constants_1.MEDIA_TYPE.VIDEO) {
                return {
                    ...state,
                    pendingVideo: state.pendingVideo.filter(pending => pending.id !== id)
                };
            }
            return state;
        }
        case actionTypes_2.PARTICIPANT_APPROVED: {
            const { mediaType, id } = action;
            if (mediaType === constants_1.MEDIA_TYPE.AUDIO) {
                return {
                    ...state,
                    audioWhitelist: {
                        ...state.audioWhitelist,
                        [id]: true
                    }
                };
            }
            if (mediaType === constants_1.MEDIA_TYPE.VIDEO) {
                return {
                    ...state,
                    videoWhitelist: {
                        ...state.videoWhitelist,
                        [id]: true
                    }
                };
            }
            return state;
        }
        case actionTypes_2.PARTICIPANT_REJECTED: {
            const { mediaType, id } = action;
            if (mediaType === constants_1.MEDIA_TYPE.AUDIO) {
                return {
                    ...state,
                    audioWhitelist: {
                        ...state.audioWhitelist,
                        [id]: false
                    }
                };
            }
            if (mediaType === constants_1.MEDIA_TYPE.VIDEO) {
                return {
                    ...state,
                    videoWhitelist: {
                        ...state.videoWhitelist,
                        [id]: false
                    }
                };
            }
            return state;
        }
    }
    return state;
});
