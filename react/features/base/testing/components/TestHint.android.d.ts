import React, { Component } from 'react';
import { TestHintProps } from './AbstractTestHint';
/**
 * The Android version of <code>TestHint</code>. It will put the identifier,
 * as the 'accessibilityLabel'.
 *
 * FIXME The 'testID' attribute (which is used on iOS) does not work with
 * the react-native as expected, because is mapped to component's tag instead of
 * any attribute visible to the UI automation. Because of that it can not be
 * used to find the element.
 * On the other hand it's not possible to use 'accessibilityLabel' on the iOS
 * for the id purpose, because it will merge the value with any text content or
 * 'accessibilityLabel' values of it's children. So as a workaround a TestHint
 * class was introduced in 'jitsi-meet-torture' which will accept generic 'id'
 * attribute and then do the search 'under the hood' either by the accessibility
 * label or the id, depending on the participant's platform. On the client side
 * the TestHint class is to be the abstraction layer which masks the problem by
 * exposing id and value properties.
 */
declare class TestHint extends Component<TestHintProps> {
    /**
     * Renders the test hint on Android.
     *
     * @returns {ReactElement}
     */
    render(): JSX.Element | null;
}
declare const _default: import("react-redux").ConnectedComponent<typeof TestHint, import("react-redux").Omit<React.ClassAttributes<TestHint> & TestHintProps, "_testModeEnabled">>;
export default _default;
