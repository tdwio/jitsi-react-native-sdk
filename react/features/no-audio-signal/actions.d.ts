/**
 * Sets UID of the the pending notification to use it when hiding
 * the notification is necessary, or unset it when undefined (or no param) is
 * passed.
 *
 * @param {?number} uid - The UID of the notification.
 * @returns {{
 *     type: SET_NO_AUDIO_SIGNAL_NOTIFICATION_UID,
 *     uid: number
 * }}
 */
export declare function setNoAudioSignalNotificationUid(uid?: string): {
    type: string;
    uid: string | undefined;
};
