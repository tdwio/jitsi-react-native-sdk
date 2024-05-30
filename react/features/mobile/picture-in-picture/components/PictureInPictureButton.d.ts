/// <reference types="react" />
import AbstractButton, { IProps as AbstractButtonProps } from '../../../base/toolbox/components/AbstractButton';
export interface IProps extends AbstractButtonProps {
    /**
     * Whether Picture-in-Picture is enabled or not.
     */
    _enabled: boolean;
}
/**
 * An implementation of a button for entering Picture-in-Picture mode.
 */
declare class PictureInPictureButton extends AbstractButton<IProps> {
    accessibilityLabel: string;
    icon: any;
    label: string;
    /**
     * Handles clicking / pressing the button.
     *
     * @protected
     * @returns {void}
     */
    _handleClick(): void;
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {React$Node}
     */
    render(): import("react").ReactNode;
}
declare const _default: import("react").ComponentType<import("react-i18next").Omit<import("react-redux").Omit<Pick<import("react").ClassAttributes<PictureInPictureButton> & IProps, "dispatch" | "t" | "i18n" | "tReady" | "backgroundColor" | "customClass" | "buttonKey" | "contextMenu" | "handleClick" | "isMenuButton" | "notifyMode" | "_enabled" | keyof import("react").ClassAttributes<PictureInPictureButton>> & Partial<Pick<import("react").ClassAttributes<PictureInPictureButton> & IProps, "visible" | "showLabel" | "styles" | "tooltipPosition" | "disabledStyles" | "afterClick" | "toggledStyles">> & Partial<Pick<{
    afterClick: undefined;
    disabledStyles: {
        iconStyle: {
            opacity: number;
        };
        labelStyle: {
            opacity: number;
        };
        style: undefined;
        underlayColor: undefined;
    };
    showLabel: boolean;
    styles: undefined;
    toggledStyles: undefined;
    tooltipPosition: string;
    visible: boolean;
}, never>>, "dispatch" | "_enabled">, keyof import("react-i18next").WithTranslation>>;
export default _default;
