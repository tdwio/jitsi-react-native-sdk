import { IReactionEmojiProps } from './constants';
export interface IReactionsState {
    /**
     * An array that contains the reactions buffer to be sent.
     */
    buffer: Array<string>;
    /**
     * Whether or not the disable reaction sounds notification was shown.
     */
    notificationDisplayed: boolean;
    /**
    * The array of reactions to animate.
    */
    queue: Array<IReactionEmojiProps>;
    /**
     * A number, non-zero value which identifies the timer created by a call
     * to setTimeout().
     */
    timeoutID: number | null;
    /**
     * The indicator that determines whether the reactions menu is visible.
     */
    visible: boolean;
}
export interface IReactionsAction extends Partial<IReactionsState> {
    /**
     * The message to be added to the chat.
     */
    message?: string;
    /**
     * The reaction to be added to buffer.
     */
    reaction?: string;
    /**
     * The reactions to be added to the animation queue.
     */
    reactions?: Array<string>;
    /**
     * The action type.
     */
    type: string;
}
