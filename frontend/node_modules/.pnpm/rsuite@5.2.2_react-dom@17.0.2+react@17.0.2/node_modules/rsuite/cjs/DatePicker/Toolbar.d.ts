import React from 'react';
import { RsRefForwardingComponent, WithAsProps } from '../@types/common';
import { RangeType, ToolbarValue } from './types';
import { CalendarLocale } from '../locales';
export type { RangeType } from './types';
export interface ToolbarProps extends WithAsProps {
    hideOkBtn?: boolean;
    locale?: CalendarLocale;
    calendarDate?: ToolbarValue;
    ranges: RangeType[];
    disabledOkBtn?: (value?: ToolbarValue) => boolean;
    disabledShortcut?: (value?: ToolbarValue) => boolean;
    onOk?: (event: React.MouseEvent) => void;
    onClickShortcut?: (value: ToolbarValue, closeOverlay?: boolean, event?: React.MouseEvent) => void;
}
/**
 * Toolbar for DatePicker and DateRangePicker
 */
declare const Toolbar: RsRefForwardingComponent<'div', ToolbarProps>;
export default Toolbar;
