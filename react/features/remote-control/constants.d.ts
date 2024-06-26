/**
 * The type of remote control messages.
 */
export declare const REMOTE_CONTROL_MESSAGE_NAME = "remote-control";
/**
 * The value for the "var" attribute of feature tag in disco-info packets.
 */
export declare const DISCO_REMOTE_CONTROL_FEATURE = "http://jitsi.org/meet/remotecontrol";
/**
 * The remote control event.
 *
 * @typedef {object} RemoteControlEvent
 * @property {EVENTS | REQUESTS} type - The type of the message.
 * @property {number} x - Avaibale for type === mousemove only. The new x
 * coordinate of the mouse.
 * @property {number} y - For mousemove type - the new y
 * coordinate of the mouse and for mousescroll - represents the vertical
 * scrolling diff value.
 * @property {number} button - 1(left), 2(middle) or 3 (right). Supported by
 * mousedown, mouseup and mousedblclick types.
 * @property {KEYS} key - Represents the key related to the event. Supported by
 * keydown and keyup types.
 * @property {KEYS[]} modifiers - Represents the modifier related to the event.
 * Supported by keydown and keyup types.
 * @property {PERMISSIONS_ACTIONS} action - Supported by type === permissions.
 * Represents the action related to the permissions event.
 */
/**
 * Optional properties. Supported for permissions event for action === request.
 *
 * @property {string} userId - The user id of the participant that has sent the
 * request.
 * @property {string} userJID - The full JID in the MUC of the user that has
 * sent the request.
 * @property {string} displayName - The displayName of the participant that has
 * sent the request.
 * @property {boolean} screenSharing - True if the SS is started for the local
 * participant and false if not.
 */
/**
 * Types of remote-control events.
 *
  * @readonly
  * @enum {string}
 */
export declare const EVENTS: {
    mousemove: string;
    mousedown: string;
    mouseup: string;
    mousedblclick: string;
    mousescroll: string;
    keydown: string;
    keyup: string;
    permissions: string;
    start: string;
    stop: string;
    supported: string;
};
/**
 * Types of remote-control requests.
 *
  * @readonly
  * @enum {string}
 */
export declare const REQUESTS: {
    start: string;
};
/**
 * Actions for the remote control permission events.
 *
 * @readonly
 * @enum {string}
 */
export declare const PERMISSIONS_ACTIONS: {
    request: string;
    grant: string;
    deny: string;
    error: string;
};
