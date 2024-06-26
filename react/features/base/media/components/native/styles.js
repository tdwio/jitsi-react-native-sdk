"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
/**
 * The styles of the feature base/media.
 */
exports.default = react_native_1.StyleSheet.create({
    /**
     * Base style of the transformed video view.
     */
    videoTranformedView: {
        flex: 1
    },
    /**
     * A basic style to avoid rendering a transformed view off the component,
     * that can be visible on special occasions, such as during device rotate
     * animation, or PiP mode.
     */
    videoTransformedViewContainer: {
        overflow: 'hidden'
    },
    videoTransformedViewContainerWide: {
        overflow: 'hidden',
        paddingRight: '16%'
    },
    /**
     * Make {@code Video} fill its container.
     */
    video: {
        flex: 1
    }
});
