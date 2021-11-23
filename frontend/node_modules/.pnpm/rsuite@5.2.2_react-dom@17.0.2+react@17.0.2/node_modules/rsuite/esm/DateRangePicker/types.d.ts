import React from 'react';
import { DATERANGE_DISABLED_TARGET } from '../utils/constants';
export declare type ValueType = [Date?, Date?];
export interface RangeType {
    label: React.ReactNode;
    closeOverlay?: boolean;
    value: ValueType | ((value?: ValueType) => ValueType);
}
export declare type DisabledDateFunction = (
/** Date used to determine if disabling is required. */
date: Date, 
/** Date selected. */
selectDate?: ValueType, 
/**
 * Whether to choose to finish now.
 * If `false`, only the start date is selected, waiting for the selection end date.
 */
selectedDone?: boolean, target?: DATERANGE_DISABLED_TARGET) => boolean;
