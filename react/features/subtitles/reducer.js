"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = __importDefault(require("../base/redux/ReducerRegistry"));
const actionTypes_1 = require("./actionTypes");
/**
 * Default State for 'features/transcription' feature.
 */
const defaultState = {
    _displaySubtitles: false,
    _transcriptMessages: new Map(),
    _requestingSubtitles: false,
    _language: null
};
/**
 * Listen for actions for the transcription feature to be used by the actions
 * to update the rendered transcription subtitles.
 */
ReducerRegistry_1.default.register('features/subtitles', (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes_1.REMOVE_TRANSCRIPT_MESSAGE:
            return _removeTranscriptMessage(state, action);
        case actionTypes_1.UPDATE_TRANSCRIPT_MESSAGE:
            return _updateTranscriptMessage(state, action);
        case actionTypes_1.SET_REQUESTING_SUBTITLES:
            return {
                ...state,
                _displaySubtitles: action.displaySubtitles,
                _language: action.language,
                _requestingSubtitles: action.enabled
            };
        case actionTypes_1.TOGGLE_REQUESTING_SUBTITLES:
            return {
                ...state,
                _requestingSubtitles: !state._requestingSubtitles
            };
    }
    return state;
});
/**
 * Reduces a specific Redux action REMOVE_TRANSCRIPT_MESSAGE of the feature
 * transcription.
 *
 * @param {Object} state - The Redux state of the feature transcription.
 * @param {Action} action -The Redux action REMOVE_TRANSCRIPT_MESSAGE to reduce.
 * @returns {Object} The new state of the feature transcription after the
 * reduction of the specified action.
 */
function _removeTranscriptMessage(state, { transcriptMessageID }) {
    const newTranscriptMessages = new Map(state._transcriptMessages);
    // Deletes the key from Map once a final message arrives.
    newTranscriptMessages.delete(transcriptMessageID);
    return {
        ...state,
        _transcriptMessages: newTranscriptMessages
    };
}
/**
 * Reduces a specific Redux action UPDATE_TRANSCRIPT_MESSAGE of the feature
 * transcription.
 *
 * @param {Object} state - The Redux state of the feature transcription.
 * @param {Action} action -The Redux action UPDATE_TRANSCRIPT_MESSAGE to reduce.
 * @returns {Object} The new state of the feature transcription after the
 * reduction of the specified action.
 */
function _updateTranscriptMessage(state, { transcriptMessageID, newTranscriptMessage }) {
    const newTranscriptMessages = new Map(state._transcriptMessages);
    // Updates the new message for the given key in the Map.
    newTranscriptMessages.set(transcriptMessageID, newTranscriptMessage);
    return {
        ...state,
        _transcriptMessages: newTranscriptMessages
    };
}
