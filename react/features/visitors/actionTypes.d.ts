/**
 * The type of (redux) action to update visitors count.
 *
 * {
 *     type: UPDATE_VISITORS_COUNT,
 *     count: number
 * }
 */
export declare const UPDATE_VISITORS_COUNT = "UPDATE_VISITORS_COUNT";
/**
 * The type of (redux) action which enables/disables visitors UI mode.
 *
 * {
 *     type: I_AM_VISITOR_MODE,
 *     enabled: boolean
 * }
 */
export declare const I_AM_VISITOR_MODE = "I_AM_VISITOR_MODE";
/**
 * The type of (redux) action which indicates that a promotion request was received from a visitor.
 *
 * {
 *     type: VISITOR_PROMOTION_REQUEST,
 *     nick: string,
 *     from: string
 * }
 */
export declare const VISITOR_PROMOTION_REQUEST = "VISITOR_PROMOTION_REQUEST";
/**
 * The type of (redux) action which indicates that a promotion response denied was received.
 *
 * {
 *     type: CLEAR_VISITOR_PROMOTION_REQUEST,
 *     request: IPromotionRequest
 * }
 */
export declare const CLEAR_VISITOR_PROMOTION_REQUEST = "CLEAR_VISITOR_PROMOTION_REQUEST";
/**
 * The type of (redux) action which sets visitor demote actor.
 *
 * {
 *     type: SET_VISITOR_DEMOTE_ACTOR,
 *     displayName: string
 * }
 */
export declare const SET_VISITOR_DEMOTE_ACTOR = "SET_VISITOR_DEMOTE_ACTOR";
/**
 * The type of (redux) action which sets visitors support.
 *
 * {
 *     type: SET_VISITORS_SUPPORTED,
 *     value: string
 * }
 */
export declare const SET_VISITORS_SUPPORTED = "SET_VISITORS_SUPPORTED";
