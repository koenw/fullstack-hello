import React from 'react';
import { OverlayTriggerInstance, OverlayTriggerType } from '../Overlay/OverlayTrigger';
import { PositionChildProps } from '../Overlay/Position';
import { TypeAttributes } from '../@types/common';
export type { OverlayTriggerInstance, PositionChildProps };
export interface PickerToggleTriggerProps {
    placement?: TypeAttributes.Placement;
    pickerProps: any;
    open?: boolean;
    trigger?: OverlayTriggerType | OverlayTriggerType[];
    children: React.ReactElement | ((props: any, ref: any) => React.ReactElement);
    speaker: React.ReactElement | ((props: any, ref: React.RefObject<any>) => React.ReactElement);
    onEnter?: (node: null | Element | Text) => void;
    onEntered?: (node: null | Element | Text) => void;
    onExit?: (node: null | Element | Text) => void;
    onExited?: (node: null | Element | Text) => void;
}
export declare const omitTriggerPropKeys: string[];
export declare const pickTriggerPropKeys: string[];
declare const PickerToggleTrigger: React.ForwardRefExoticComponent<PickerToggleTriggerProps & React.RefAttributes<any>>;
export default PickerToggleTrigger;
