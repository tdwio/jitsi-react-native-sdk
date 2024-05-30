"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIosMobileBrowser = exports.isMobileBrowser = void 0;
const Platform_1 = require("../react/Platform");
/**
 * Returns whether or not the current environment is a mobile device.
 *
 * @returns {boolean}
 */
function isMobileBrowser() {
    return Platform_1.default.OS === 'android' || Platform_1.default.OS === 'ios';
}
exports.isMobileBrowser = isMobileBrowser;
/**
 * Returns whether or not the current environment is an ios mobile device.
 *
 * @returns {boolean}
 */
function isIosMobileBrowser() {
    return Platform_1.default.OS === 'ios';
}
exports.isIosMobileBrowser = isIosMobileBrowser;
