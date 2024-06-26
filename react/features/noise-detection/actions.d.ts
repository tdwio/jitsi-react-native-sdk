/**
 * Sets UID of the the pending notification to use it when hiding
 * the notification is necessary, or unset it when undefined (or no param) is
 * passed.
 *
 * @param {?number} uid - The UID of the notification.
 * @returns {{
 *     type: SET_NOISY_AUDIO_INPUT_NOTIFICATION_UID,
 *     uid: number
 * }}
 */
export declare function setNoisyAudioInputNotificationUid(uid?: string): {
    type: string;
    uid: string | undefined;
};
