"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMAGES = exports.BACKGROUNDS_LIMIT = exports.VIRTUAL_BACKGROUND_TYPE = void 0;
/**
 * An enumeration of the different virtual background types.
 *
 * @enum {string}
 */
exports.VIRTUAL_BACKGROUND_TYPE = {
    IMAGE: 'image',
    BLUR: 'blur',
    NONE: 'none'
};
// The limit of virtual background uploads is 24. When the number
// of uploads is 25 we trigger the deleteStoredImage function to delete
// the first/oldest uploaded background.
exports.BACKGROUNDS_LIMIT = 25;
exports.IMAGES = [
    {
        tooltip: 'image1',
        id: '1',
        src: 'images/virtual-background/background-1.jpg'
    },
    {
        tooltip: 'image2',
        id: '2',
        src: 'images/virtual-background/background-2.jpg'
    },
    {
        tooltip: 'image3',
        id: '3',
        src: 'images/virtual-background/background-3.jpg'
    },
    {
        tooltip: 'image4',
        id: '4',
        src: 'images/virtual-background/background-4.jpg'
    },
    {
        tooltip: 'image5',
        id: '5',
        src: 'images/virtual-background/background-5.jpg'
    },
    {
        tooltip: 'image6',
        id: '6',
        src: 'images/virtual-background/background-6.jpg'
    },
    {
        tooltip: 'image7',
        id: '7',
        src: 'images/virtual-background/background-7.jpg'
    }
];
