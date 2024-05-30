"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnalyticsEvents_1 = require("../../analytics/AnalyticsEvents");
const functions_1 = require("../../analytics/functions");
const actions_1 = require("../../base/dialog/actions");
const svg_1 = require("../../base/icons/svg");
const AbstractButton_1 = require("../../base/toolbox/components/AbstractButton");
const _1 = require("./");
/**
 * An abstract remote video menu button which mutes all the other participants.
 */
class AbstractMuteEveryoneElseButton extends AbstractButton_1.default {
    constructor() {
        super(...arguments);
        this.accessibilityLabel = 'toolbar.accessibilityLabel.muteEveryoneElse';
        this.icon = svg_1.IconMicSlash;
        this.label = 'videothumbnail.domuteOthers';
    }
    /**
     * Handles clicking / pressing the button, and opens a confirmation dialog.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        const { dispatch, participantID } = this.props;
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createToolbarEvent)('mute.everyoneelse.pressed'));
        dispatch((0, actions_1.openDialog)(_1.MuteEveryoneDialog, { exclude: [participantID] }));
    }
}
exports.default = AbstractMuteEveryoneElseButton;
