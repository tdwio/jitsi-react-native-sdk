import { ITypography, IPalette as Palette1 } from '../ui/types';
declare module '@mui/material/styles' {
    interface Palette extends Palette1 {
    }
    interface TypographyVariants extends ITypography {
    }
}
interface ThemeProps {
    breakpoints: Object;
    colorMap: Object;
    colors: Object;
    font: Object;
    shape: Object;
    spacing: Array<number>;
    typography: Object;
}
/**
 * Creates a MUI theme based on local UI tokens.
 *
 * @param {Object} arg - The ui tokens.
 * @returns {Object}
 */
export declare function createWebTheme({ font, colors, colorMap, shape, spacing, typography, breakpoints }: ThemeProps): import("@mui/material/styles").Theme;
/**
 * Find the first styled ancestor component of an element.
 *
 * @param {HTMLElement|null} target - Element to look up.
 * @param {string} cssClass - Styled component reference.
 * @returns {HTMLElement|null} Ancestor.
 */
export declare const findAncestorByClass: (target: HTMLElement | null, cssClass: string) => HTMLElement | null;
/**
 * Checks if the passed element is visible in the viewport.
 *
 * @param {Element} element - The element.
 * @returns {boolean}
 */
export declare function isElementInTheViewport(element?: Element): boolean;
/**
 * Informs whether or not the given element does something on its own when pressing the Enter key.
 *
 * This is useful to correctly submit custom made "forms" that are not using the native form element,
 * only when the user is not using an element that needs the enter key to work.
 * Note the implementation is incomplete and should be updated as needed if more complex use cases arise
 * (for example, the Tabs aria pattern is not handled).
 *
 * @param {Element} element - The element.
 * @returns {boolean}
 */
export declare function operatesWithEnterKey(element: Element): boolean;
export {};
