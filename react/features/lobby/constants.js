"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODERATOR_IN_CHAT_WITH_LEFT = exports.LOBBY_CHAT_INITIALIZED = exports.KNOCKING_PARTICIPANT_SOUND_ID = exports.HIDDEN_EMAILS = void 0;
/**
 * Hide these emails when trying to join a lobby.
 */
exports.HIDDEN_EMAILS = ['inbound-sip-jibri@jitsi.net', 'outbound-sip-jibri@jitsi.net'];
/**
 * The identifier of the sound to be played when a participant joins lobby.
 *
 * @type {string}
 */
exports.KNOCKING_PARTICIPANT_SOUND_ID = 'KNOCKING_PARTICIPANT_SOUND';
/**
 * Lobby chat initialized message type.
 *
 * @type {string}
 */
exports.LOBBY_CHAT_INITIALIZED = 'LOBBY_CHAT_INITIALIZED';
/**
   * Event message sent to knocking participant when moderator in chat with leaves.
   *
   * @type {string}
   */
exports.MODERATOR_IN_CHAT_WITH_LEFT = 'MODERATOR_IN_CHAT_WITH_LEFT';
