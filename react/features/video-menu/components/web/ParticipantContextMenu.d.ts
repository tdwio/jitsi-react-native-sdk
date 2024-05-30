import React from 'react';
import { IParticipant } from '../../../base/participants/types';
export interface IProps {
    /**
     * Class name for the context menu.
     */
    className?: string;
    /**
     * Closes a drawer if open.
     */
    closeDrawer?: () => void;
    /**
     * The participant for which the drawer is open.
     * It contains the displayName & participantID.
     */
    drawerParticipant?: {
        displayName: string;
        participantID: string;
    };
    /**
     * Target elements against which positioning calculations are made.
     */
    offsetTarget?: HTMLElement;
    /**
     * Callback for the mouse entering the component.
     */
    onEnter?: (e?: React.MouseEvent) => void;
    /**
     * Callback for the mouse leaving the component.
     */
    onLeave?: (e?: React.MouseEvent) => void;
    /**
     * Callback for making a selection in the menu.
     */
    onSelect: (value?: boolean | React.MouseEvent) => void;
    /**
     * Participant reference.
     */
    participant: IParticipant;
    /**
     * The current state of the participant's remote control session.
     */
    remoteControlState?: number;
    /**
     * Whether or not the menu is displayed in the thumbnail remote video menu.
     */
    thumbnailMenu?: boolean;
}
declare const ParticipantContextMenu: ({ className, closeDrawer, drawerParticipant, offsetTarget, onEnter, onLeave, onSelect, participant, remoteControlState, thumbnailMenu }: IProps) => JSX.Element;
export default ParticipantContextMenu;
