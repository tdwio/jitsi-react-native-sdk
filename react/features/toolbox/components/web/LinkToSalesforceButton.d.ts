/// <reference types="react" />
import AbstractButton, { IProps as AbstractButtonProps } from '../../../base/toolbox/components/AbstractButton';
/**
 * Implementation of a button for opening the Salesforce link dialog.
 */
declare class LinkToSalesforce extends AbstractButton<AbstractButtonProps> {
    accessibilityLabel: string;
    icon: any;
    label: string;
    tooltip: string;
    /**
     * Handles clicking / pressing the button, and opens the Salesforce link dialog.
     *
     * @protected
     * @returns {void}
     */
    _handleClick(): void;
}
declare const _default: import("react").ComponentType<import("react-i18next").Omit<import("react-redux").Omit<Pick<import("react").ClassAttributes<LinkToSalesforce> & AbstractButtonProps, "dispatch" | "t" | "contextMenu" | "i18n" | "tReady" | "backgroundColor" | "customClass" | "isMenuButton" | "buttonKey" | "handleClick" | "notifyMode" | keyof import("react").ClassAttributes<LinkToSalesforce>> & Partial<Pick<import("react").ClassAttributes<LinkToSalesforce> & AbstractButtonProps, "visible" | "showLabel" | "styles" | "tooltipPosition" | "disabledStyles" | "afterClick" | "toggledStyles">> & Partial<Pick<{
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