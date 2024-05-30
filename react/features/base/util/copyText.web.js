"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyText = void 0;
const clipboard_copy_1 = require("clipboard-copy");
/**
 * Tries to copy a given text to the clipboard.
 * Returns true if the action succeeds.
 *
 * @param {string} textToCopy - Text to be copied.
 * @returns {Promise<boolean>}
 */
async function copyText(textToCopy) {
    try {
        await (0, clipboard_copy_1.default)(textToCopy);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.copyText = copyText;
