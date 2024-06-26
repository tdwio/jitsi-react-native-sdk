/**
 * The type of the action which signals that a Poll will be changed
 *
 * {
 *     type: CHANGE_VOTE,
 * }
 *
 */
export declare const CHANGE_VOTE = "CHANGE_VOTE";
/**
 * The type of the action which signals that we need to clear all polls from the state.
 * For example we are moving to another conference.
 *
 * {
 *     type: CLEAR_POLLS
 * }
 */
export declare const CLEAR_POLLS = "CLEAR_POLLS";
/**
 * The type of the action triggered when the poll is editing.
 *
 * {
 *     type: EDIT_POLL,
 *     pollId: string,
 *     editing: boolean
 * }
 */
export declare const EDIT_POLL = "EDIT_POLL";
/**
 * The type of the action which signals that a new Poll was received.
 *
 * {
 *     type: RECEIVE_POLL,
 *     poll: Poll,
 *     pollId: string,
 *     notify: boolean
 * }
 *
 */
export declare const RECEIVE_POLL = "RECEIVE_POLL";
/**
 * The type of the action which signals that a new Answer was received.
 *
 * {
 *     type: RECEIVE_ANSWER,
 *     answer: Answer,
 *     pollId: string,
 * }
 */
export declare const RECEIVE_ANSWER = "RECEIVE_ANSWER";
/**
 * The type of the action which registers a vote.
 *
 * {
 *     type: REGISTER_VOTE,
 *     answers: Array<boolean> | null,
 *     pollId: string
 * }
 */
export declare const REGISTER_VOTE = "REGISTER_VOTE";
/**
 * The type of the action which retracts a vote.
 *
 * {
 *     type: RETRACT_VOTE,
 *     pollId: string,
 * }
 */
export declare const RETRACT_VOTE = "RETRACT_VOTE";
/**
 * The type of the action triggered when the poll tab in chat pane is closed
 *
 * {
 *     type: RESET_NB_UNREAD_POLLS,
 * }
 */
export declare const RESET_NB_UNREAD_POLLS = "RESET_NB_UNREAD_POLLS";
/**
 * The type of the action triggered when the poll is saved.
 *
 * {
 *     type: SAVE_POLL,
 *     poll: Poll,
 *     pollId: string,
 *     saved: boolean
 * }
 */
export declare const SAVE_POLL = "SAVE_POLL";
