import { ToolbarProps } from './Toolbar';
import { InnerRange } from './types';
import { CalendarState } from '../Calendar';
export declare function getDefaultRanges(date: Date | Date[]): InnerRange[];
/**
 * get Toolbar ranges from Toolbar props
 * @param ranges
 * @param calendarDate
 */
export declare const getRanges: ({ ranges, calendarDate }: Pick<ToolbarProps, 'ranges' | 'calendarDate'>) => InnerRange[];
export declare const useCalendarState: () => {
    calendarState: CalendarState;
    reset: () => void;
    openMonth: () => void;
    openTime: () => void;
};
