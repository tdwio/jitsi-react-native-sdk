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
const react_redux_1 = require("react-redux");
const InputDialog_1 = __importDefault(require("../../../base/dialog/components/native/InputDialog"));
const functions_1 = require("../../functions");
/**
 * Implements a component to render a display name prompt.
 */
class DisplayNamePrompt extends react_1.Component {
    /**
     * Initializes a new {@code DisplayNamePrompt} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);
        // Bind event handlers so they are only bound once for every instance.
        this._onSetDisplayName = (0, functions_1.onSetDisplayName)(props.dispatch, props.onPostSubmit);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        return (<InputDialog_1.default descriptionKey='dialog.enterDisplayName' disableCancel={true} onSubmit={this._onSetDisplayName} titleKey='dialog.displayNameRequired' validateInput={this.props.validateInput}/>);
    }
}
exports.default = (0, react_redux_1.connect)()(DisplayNamePrompt);
