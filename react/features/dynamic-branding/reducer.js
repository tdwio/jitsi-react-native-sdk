"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = __importDefault(require("../base/redux/ReducerRegistry"));
const actionTypes_1 = require("./actionTypes");
/**
 * The name of the redux store/state property which is the root of the redux
 * state of the feature {@code dynamic-branding}.
 */
const STORE_NAME = 'features/dynamic-branding';
const DEFAULT_STATE = {
    /**
     * The pool of avatar backgrounds.
     *
     * @public
     * @type {Array<string>}
     */
    avatarBackgrounds: [],
    /**
     * The custom background color for the LargeVideo.
     *
     * @public
     * @type {string}
     */
    backgroundColor: '',
    /**
     * The custom background image used on the LargeVideo.
     *
     * @public
     * @type {string}
     */
    backgroundImageUrl: '',
    /**
     * Flag indicating that the branding data can be displayed.
     * This is used in order to avoid image flickering / text changing(blipping).
     *
     * @public
     * @type {boolean}
     */
    customizationReady: false,
    /**
     * Flag indicating that the dynamic branding data request has failed.
     * When the request fails there is no logo (JitsiWatermark) displayed.
     *
     * @public
     * @type {boolean}
     */
    customizationFailed: false,
    /**
     * Flag indicating that the dynamic branding has not been modified and should use
     * the default options.
     *
     * @public
     * @type {boolean}
     */
    defaultBranding: true,
    /**
     * Url for a custom page for DID numbers list.
     *
     * @public
     * @type {string}
     */
    didPageUrl: '',
    /**
     * The custom invite domain.
     *
     * @public
     * @type {string}
     */
    inviteDomain: '',
    /**
     * An object containing the mapping between the language and url where the translation
     * bundle is hosted.
     *
     * @public
     * @type {Object}
     */
    labels: null,
    /**
     * The custom url used when the user clicks the logo.
     *
     * @public
     * @type {string}
     */
    logoClickUrl: '',
    /**
     * The custom logo (JitisWatermark).
     *
     * @public
     * @type {string}
     */
    logoImageUrl: '',
    /**
     * The generated MUI branded theme based on the custom theme json.
     *
     * @public
     * @type {boolean}
     */
    muiBrandedTheme: undefined,
    /**
     * The lobby/prejoin background.
     *
     * @public
     * @type {string}
     */
    premeetingBackground: '',
    /**
     * Flag used to signal if the app should use a custom logo or not.
     *
     * @public
     * @type {boolean}
     */
    useDynamicBrandingData: false,
    /**
     * An array of images to be used as virtual backgrounds instead of the default ones.
     *
     * @public
     * @type {Array<Object>}
     */
    virtualBackgrounds: []
};
/**
 * Reduces redux actions for the purposes of the feature {@code dynamic-branding}.
 */
ReducerRegistry_1.default.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes_1.SET_DYNAMIC_BRANDING_DATA: {
            const { avatarBackgrounds, backgroundColor, backgroundImageUrl, brandedIcons, defaultBranding, didPageUrl, inviteDomain, labels, logoClickUrl, logoImageUrl, muiBrandedTheme, premeetingBackground, showGiphyIntegration, virtualBackgrounds } = action.value;
            return {
                avatarBackgrounds,
                backgroundColor,
                backgroundImageUrl,
                brandedIcons,
                defaultBranding,
                didPageUrl,
                inviteDomain,
                labels,
                logoClickUrl,
                logoImageUrl,
                muiBrandedTheme,
                premeetingBackground,
                showGiphyIntegration,
                customizationFailed: false,
                customizationReady: true,
                useDynamicBrandingData: true,
                virtualBackgrounds: formatImages(virtualBackgrounds || [])
            };
        }
        case actionTypes_1.SET_DYNAMIC_BRANDING_FAILED: {
            return {
                ...state,
                customizationReady: true,
                customizationFailed: true,
                useDynamicBrandingData: true
            };
        }
        case actionTypes_1.SET_DYNAMIC_BRANDING_READY:
            return {
                ...state,
                customizationReady: true
            };
        case actionTypes_1.UNSET_DYNAMIC_BRANDING:
            return DEFAULT_STATE;
    }
    return state;
});
/**
 * Transforms the branding images into an array of Images objects ready
 * to be used as virtual backgrounds.
 *
 * @param {Array<string>} images - The branding images.
 * @private
 * @returns {{Props}}
 */
function formatImages(images) {
    return images.map((img, i) => {
        let src;
        let tooltip;
        if (typeof img === 'object') {
            ({ src, tooltip } = img);
        }
        else {
            src = img;
        }
        return {
            id: `branding-${i}`,
            src,
            tooltip
        };
    });
}
