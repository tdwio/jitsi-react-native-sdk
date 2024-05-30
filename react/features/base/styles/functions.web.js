"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPixelLineHeight = exports.getFixedPlatformStyle = void 0;
__exportStar(require("./functions.any"), exports);
/**
 * Fixes the style prop that is passed to a platform generic component based on platform specific
 * format requirements.
 *
 * @param {StyleType} style - The passed style prop to the component.
 * @returns {StyleType}
 */
function getFixedPlatformStyle(style) {
    if (Array.isArray(style)) {
        const _style = {};
        for (const component of style) {
            Object.assign(_style, component);
        }
        return _style;
    }
    return style;
}
exports.getFixedPlatformStyle = getFixedPlatformStyle;
/**
 * Sets the line height of a CSS Object group in pixels.
 * By default lineHeight is unitless in CSS, but not in RN.
 *
 * @param {Object} base - The base object containing the `lineHeight` property.
 * @returns {Object}
 */
function withPixelLineHeight(base) {
    return {
        ...base,
        lineHeight: `${base.lineHeight}px`
    };
}
exports.withPixelLineHeight = withPixelLineHeight;