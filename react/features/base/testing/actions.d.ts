/**
 * Sets the conference connection state of the testing feature.
 *
 * @param {string} connectionState - This is the lib-jitsi-meet event name. Can
 * be one of (with the string values at the time of this writing):
 * <li>{@link JitsiConferenceEvents.CONNECTION_ESTABLISHED}
 * - ("conference.connectionEstablished"</li>
 * <li>{@link JitsiConferenceEvents.CONNECTION_INTERRUPTED}
 * - ("conference.connectionInterrupted")</li>
 * <li>{@link JitsiConferenceEvents.CONNECTION_RESTORED}
 * - ("conference.connectionRestored")</li>
 * In the reducer the value will be an empty string until first event is
 * received.
 *
 * @returns {{
 *     type: SET_CONNECTION_STATE,
 *     connectionState: string
 * }}
 */
export declare function setConnectionState(connectionState: string): {
    type: string;
    connectionState: string;
};
