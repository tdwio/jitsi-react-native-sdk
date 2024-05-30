"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const functions_1 = require("../../../base/i18n/functions");
const svg_1 = require("../../../base/icons/svg");
const Label_1 = require("../../../base/label/components/web/Label");
const lib_jitsi_meet_1 = require("../../../base/lib-jitsi-meet");
const Tooltip_1 = require("../../../base/tooltip/components/Tooltip");
const AbstractRecordingLabel_1 = require("../AbstractRecordingLabel");
/**
 * Creates the styles for the component.
 *
 * @param {Object} theme - The current UI theme.
 *
 * @returns {Object}
 */
const styles = (theme) => {
    return {
        record: {
            background: theme.palette.actionDanger
        }
    };
};
/**
 * Implements a React {@link Component} which displays the current state of
 * conference recording.
 *
 * @augments {Component}
 */
class RecordingLabel extends AbstractRecordingLabel_1.default {
    /**
     * Renders the platform specific label component.
     *
     * @inheritdoc
     */
    _renderLabel() {
        const { _isTranscribing, _status, mode, t } = this.props;
        const classes = mui_1.withStyles.getClasses(this.props);
        const isRecording = mode === lib_jitsi_meet_1.JitsiRecordingConstants.mode.FILE;
        const icon = isRecording ? svg_1.IconRecord : svg_1.IconSites;
        let content;
        if (_status === lib_jitsi_meet_1.JitsiRecordingConstants.status.ON) {
            content = t(isRecording ? 'videoStatus.recording' : 'videoStatus.streaming');
            if (_isTranscribing) {
                content += ` \u00B7 ${t('transcribing.labelToolTip')}`;
            }
        }
        else if (mode === lib_jitsi_meet_1.JitsiRecordingConstants.mode.STREAM) {
            return null;
        }
        else if (_isTranscribing) {
            content = t('transcribing.labelToolTip');
        }
        else {
            return null;
        }
        return (react_1.default.createElement(Tooltip_1.default, { content: content, position: 'bottom' },
            react_1.default.createElement(Label_1.default, { className: classes.record, icon: icon })));
    }
}
exports.default = (0, mui_1.withStyles)((0, functions_1.translate)((0, react_redux_1.connect)(AbstractRecordingLabel_1._mapStateToProps)(RecordingLabel)), styles);
