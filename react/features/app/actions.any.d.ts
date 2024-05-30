import { IStore } from './types';
/**
 * Redirects to another page generated by replacing the path in the original URL
 * with the given path.
 *
 * @param {(string)} pathname - The path to navigate to.
 * @returns {Function}
 */
export declare function redirectWithStoredParams(pathname: string): (dispatch: IStore['dispatch'], getState: IStore['getState']) => void;
/**
 * Assigns a specific pathname to window.location.pathname taking into account
 * the context root of the Web app.
 *
 * @param {string} pathname - The pathname to assign to
 * window.location.pathname. If the specified pathname is relative, the context
 * root of the Web app will be prepended to the specified pathname before
 * assigning it to window.location.pathname.
 * @param {string} hashParam - Optional hash param to assign to
 * window.location.hash.
 * @returns {Function}
 */
export declare function redirectToStaticPage(pathname: string, hashParam?: string): () => void;
/**
 * Reloads the page by restoring the original URL.
 *
 * @returns {Function}
 */
export declare function reloadWithStoredParams(): (dispatch: IStore['dispatch'], getState: IStore['getState']) => void;
/**
 * Checks whether tokenAuthUrl is set, we have a jwt token that will expire soon
 * and redirect to the auth url to obtain new token if this is the case.
 *
 * @param {Dispatch} dispatch - The Redux dispatch function.
 * @param {Function} getState - The Redux state.
 * @param {Function} failureCallback - The callback on failure to obtain auth url.
 * @returns {boolean} Whether we will redirect or not.
 */
export declare function maybeRedirectToTokenAuthUrl(dispatch: IStore['dispatch'], getState: IStore['getState'], failureCallback: Function): boolean;