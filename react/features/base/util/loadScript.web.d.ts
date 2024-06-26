/**
 * Loads a script from a specific URL. The script will be interpreted upon load.
 *
 * @param {string} url - The url to be loaded.
 * @returns {Promise} Resolved with no arguments when the script is loaded and
 * rejected with the error from JitsiMeetJS.ScriptUtil.loadScript method.
 */
export declare function loadScript(url: string): Promise<void>;
