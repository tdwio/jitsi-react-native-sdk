"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_paper_1 = require("react-native-paper");
const react_redux_1 = require("react-redux");
const Avatar_1 = __importDefault(require("../../../base/avatar/components/Avatar"));
const actions_1 = require("../../../base/dialog/actions");
const BottomSheet_1 = __importDefault(require("../../../base/dialog/components/native/BottomSheet"));
const styles_1 = require("../../../base/dialog/components/native/styles");
const functions_1 = require("../../../base/participants/functions");
const SharedVideoButton_1 = __importDefault(require("../../../shared-video/components/native/SharedVideoButton"));
const styles_2 = __importDefault(require("./styles"));
/**
 * Size of the rendered avatar in the menu.
 */
const AVATAR_SIZE = 24;
/**
 * Class to implement a popup menu that opens upon long pressing a fake participant thumbnail.
 */
class SharedVideoMenu extends react_1.PureComponent {
    /**
     * Constructor of the component.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        this._onCancel = this._onCancel.bind(this);
        this._renderMenuHeader = this._renderMenuHeader.bind(this);
    }
    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        const { _isParticipantAvailable, participantId } = this.props;
        const buttonProps = {
            afterClick: this._onCancel,
            showLabel: true,
            participantID: participantId,
            styles: styles_1.bottomSheetStyles.buttons
        };
        return (<BottomSheet_1.default renderHeader={this._renderMenuHeader} showSlidingView={_isParticipantAvailable}>
                {/* @ts-ignore */}
                <react_native_paper_1.Divider style={styles_2.default.divider}/>
                <SharedVideoButton_1.default {...buttonProps}/>
            </BottomSheet_1.default>);
    }
    /**
     * Callback to hide the {@code SharedVideoMenu}.
     *
     * @private
     * @returns {boolean}
     */
    _onCancel() {
        this.props.dispatch((0, actions_1.hideSheet)());
    }
    /**
     * Function to render the menu's header.
     *
     * @returns {React$Element}
     */
    _renderMenuHeader() {
        const { participantId } = this.props;
        return (<react_native_1.View style={[
                styles_1.bottomSheetStyles.sheet,
                styles_2.default.participantNameContainer
            ]}>
                <Avatar_1.default participantId={participantId} size={AVATAR_SIZE}/>
                <react_native_1.Text style={styles_2.default.participantNameLabel}>
                    {this.props._participantDisplayName}
                </react_native_1.Text>
            </react_native_1.View>);
    }
}
/**
 * Function that maps parts of Redux state tree into component props.
 *
 * @param {Object} state - Redux state.
 * @param {Object} ownProps - Properties of component.
 * @private
 * @returns {IProps}
 */
function _mapStateToProps(state, ownProps) {
    const { participantId } = ownProps;
    const isParticipantAvailable = (0, functions_1.getParticipantById)(state, participantId);
    return {
        _isParticipantAvailable: Boolean(isParticipantAvailable),
        _participantDisplayName: (0, functions_1.getParticipantDisplayName)(state, participantId)
    };
}
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(SharedVideoMenu);
