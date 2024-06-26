"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../redux/functions");
const defaultScheme_1 = __importDefault(require("./defaultScheme"));
/**
 * A registry class to register styles that need to be color-schemed.
 *
 * This class uses lazy initialization for scheme-ified style definitions on
 * request.
 */
class ColorSchemeRegistry {
    constructor() {
        /**
         * A map of already scheme-ified style definitions.
         */
        this._schemedStyles = new Map();
        /**
         * A map of registered style templates.
         */
        this._styleTemplates = new Map();
    }
    /**
     * Clears the already scheme-ified style definitions.
     *
     * @returns {void}
     */
    clear() {
        this._schemedStyles.clear();
    }
    /**
     * Retrieves the color-scheme applied style definition of a component.
     *
     * @param {Object | Function} stateful - An object or function that can be
     * resolved to Redux state using the {@code toState} function.
     * @param {string} componentName - The name of the component whose style we
     * want to retrieve.
     * @returns {StyleType}
     */
    get(stateful, componentName) {
        let schemedStyle = this._schemedStyles.get(componentName);
        if (!schemedStyle) {
            schemedStyle
                = this._applyColorScheme(stateful, componentName, this._styleTemplates.get(componentName));
            this._schemedStyles.set(componentName, schemedStyle);
        }
        return schemedStyle;
    }
    /**
     * Registers a style definition to the registry for color-scheming.
     *
     * NOTE: It's suggested to only use this registry on styles where color
     * scheming is needed, otherwise just use a static style object as before.
     *
     * @param {string} componentName - The name of the component to register the
     * style to (e.g. {@code 'Toolbox'}).
     * @param {StyleType} style - The style definition to register.
     * @returns {void}
     */
    register(componentName, style) {
        this._styleTemplates.set(componentName, style);
        // If this is a style overwrite, we need to delete the processed version
        // of the style from the other map
        this._schemedStyles.delete(componentName);
    }
    /**
     * Creates a color schemed style object applying the color scheme to every
     * colors in the style object prepared in a special way.
     *
     * @param {Object | Function} stateful - An object or function that can be
     * resolved to Redux state using the {@code toState} function.
     * @param {string} componentName - The name of the component to apply the
     * color scheme to.
     * @param {StyleType} style - The style definition to apply the color scheme
     * to.
     * @returns {StyleType}
     */
    _applyColorScheme(stateful, componentName, style) {
        let schemedStyle;
        if (Array.isArray(style)) {
            // The style is an array of styles, we apply the same transformation
            // to each, recursively.
            schemedStyle = [];
            for (const entry of style) {
                schemedStyle.push(this._applyColorScheme(stateful, componentName, entry));
            }
        }
        else {
            // The style is an object, we create a copy of it to avoid in-place
            // modification.
            schemedStyle = {
                ...style
            };
            for (const [styleName, styleValue] of Object.entries(schemedStyle)) {
                if (typeof styleValue === 'object') {
                    // The value is another style object, we apply the same
                    // transformation recursively.
                    schemedStyle[styleName]
                        = this._applyColorScheme(stateful, componentName, styleValue);
                }
                else if (typeof styleValue === 'function') {
                    // The value is a function, which indicates that it's a
                    // dynamic, schemed color we need to resolve.
                    const value = styleValue();
                    schemedStyle[styleName]
                        = this._getColor(stateful, componentName, value);
                }
            }
        }
        return schemedStyle;
    }
    /**
     * Function to get the color value for the provided identifier.
     *
     * @param {Object | Function} stateful - An object or function that can be
     * resolved to Redux state using the {@code toState} function.
     * @param {string} componentName - The name of the component to get the
     * color value for.
     * @param {string} colorDefinition - The string identifier of the color,
     * e.g. {@code appBackground}.
     * @returns {string}
     */
    _getColor(stateful, componentName, colorDefinition) {
        const colorScheme = (0, functions_1.toState)(stateful)['features/base/color-scheme'] || {};
        return {
            ...defaultScheme_1.default._defaultTheme,
            ...colorScheme._defaultTheme,
            ...defaultScheme_1.default[componentName],
            ...colorScheme[componentName]
        }[colorDefinition];
    }
}
exports.default = new ColorSchemeRegistry();
