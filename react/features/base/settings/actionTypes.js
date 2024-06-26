"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS_UPDATED = void 0;
/**
 * Create an action for when the settings are updated.
 *
 * {
 *     type: SETTINGS_UPDATED,
 *     settings: {
 *         audioOutputDeviceId: string,
 *         avatarURL: string,
 *         cameraDeviceId: string,
 *         displayName: string,
 *         email: string,
 *         localFlipX: boolean,
 *         micDeviceId: string,
 *         serverURL: string,
 *         startAudioOnly: boolean,
 *         startWithAudioMuted: boolean,
 *         startWithVideoMuted: boolean,
 *         startWithReactionsMuted: boolean
 *     }
 * }
 */
exports.SETTINGS_UPDATED = 'SETTINGS_UPDATED';
