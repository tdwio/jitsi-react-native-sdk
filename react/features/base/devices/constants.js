"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEVICE_LABEL_PREFIXES_TO_IGNORE = void 0;
/**
 * Prefixes of devices that will be filtered from the device list.
 *
 * NOTE: Currently we filter only 'Microsoft Teams Audio Device' virtual device. It seems that it can't be set
 * as default device on the OS level and this use case is not handled in the code. If we add more device prefixes that
 * can be default devices we should make sure to handle the default device use case.
 */
exports.DEVICE_LABEL_PREFIXES_TO_IGNORE = ['Microsoft Teams Audio Device'];
