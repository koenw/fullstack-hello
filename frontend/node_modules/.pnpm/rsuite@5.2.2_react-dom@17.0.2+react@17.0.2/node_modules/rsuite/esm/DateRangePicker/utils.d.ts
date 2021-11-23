import { RangeType, ValueType } from './types';
export declare const setTimingMargin: (date: any, way?: string) => Date;
export declare function getCalendarDate({ value }: {
    value?: ValueType;
}): ValueType;
export declare const getDefaultRanges: () => RangeType[];
export declare const isSameRange: (source: ValueType, dest: ValueType, format: string) => boolean;
export declare const getMonthHoverRange: (date: Date) => ValueType;
export declare const getWeekHoverRange: (isoWeek: boolean, date: Date) => ValueType;
