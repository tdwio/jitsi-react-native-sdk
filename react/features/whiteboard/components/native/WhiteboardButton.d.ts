/// <reference types="react" />
import AbstractButton, { IProps as AbstractButtonProps } from '../../../base/toolbox/components/AbstractButton';
/**
 * Component that renders a toolbar button for the whiteboard.
 */
declare class WhiteboardButton extends AbstractButton<AbstractButtonProps> {
    accessibilityLabel: string;
    icon: any;
    label: string;
    tooltip: string;
    /**
     * Handles clicking / pressing the button, and opens the whiteboard view.
     *
     * @private
     * @returns {void}
     */
    _handleClick(): void;
}
declare const _default: import("react").ComponentType<import("react-i18next").Omit<import("react-redux").Omit<Pick<import("react").ClassAttributes<WhiteboardButton> & AbstractButtonProps, "dispatch" | "t" | "i18n" | "tReady" | "backgroundColor" | "customClass" | "buttonKey" | "contextMenu" | "handleClick" | "isMenuButton" | "notifyMode" | keyof import("react").ClassAttributes<WhiteboardButton>> & Partial<Pick<import("react").ClassAttributes<WhiteboardButton> & AbstractButtonProps, "visible" | "showLabel" | "styles" | "tooltipPosition" | "disabledStyles" | "afterClick" | "toggledStyles">> & Partial<Pick<{
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
}, never>>, "visible" | "dispatch">, keyof import("react-i18next").WithTranslation>>;
export default _default;
