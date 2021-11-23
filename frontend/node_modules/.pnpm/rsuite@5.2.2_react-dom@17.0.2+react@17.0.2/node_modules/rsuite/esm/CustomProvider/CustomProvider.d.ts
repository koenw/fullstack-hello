import React from 'react';
import { Locale } from '../locales';
export interface CustomValue<T = Locale> {
    /** Language configuration */
    locale?: T;
    /** Support right-to-left */
    rtl?: boolean;
    /**
     * Return the formatted date string in the given format. The result may vary by locale.
     *
     * Example:
     *
     *  import format from 'date-fns/format';
     *  import eo from 'date-fns/locale/eo'
     *
     *  function formatDate(date, formatStr) {
     *    return format(date, formatStr, { locale: eo });
     *  }
     *
     * */
    formatDate?: (date: Date | string | number, format?: string) => string;
    /**
     * Return the date parsed from string using the given format string.
     *
     * Example:
     *
     *  import parse from 'date-fns/parse';
     *  import eo from 'date-fns/locale/eo'
     *
     *  function parseDate(date, formatStr) {
     *    return parse(date, formatStr, new Date(), { locale: eo });
     *  }
     *
     * */
    parseDate?: (dateString: string, formatString: string) => Date;
}
export interface CustomProviderProps<T = Locale> extends CustomValue<T> {
    /** Supported themes */
    theme?: 'light' | 'dark' | 'high-contrast';
    /** The prefix of the component CSS class */
    classPrefix?: string;
    /** Primary content */
    children?: React.ReactNode;
}
declare const CustomContext: React.Context<CustomProviderProps<{
    common?: {
        loading: string;
        emptyMessage: string;
    };
    Plaintext?: {
        unfilled: string;
        notSelected: string;
        /**
         * Return the date parsed from string using the given format string.
         *
         * Example:
         *
         *  import parse from 'date-fns/parse';
         *  import eo from 'date-fns/locale/eo'
         *
         *  function parseDate(date, formatStr) {
         *    return parse(date, formatStr, new Date(), { locale: eo });
         *  }
         *
         * */
        notUploaded: string;
    };
    Pagination?: {
        more: string;
        prev: string;
        next: string;
        first: string;
        last: string;
        limit: string;
        total: string;
        skip: string;
    };
    Calendar?: {
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        ok: string;
        today: string;
        yesterday: string; /** Language configuration */
        hours: string;
        minutes: string;
        seconds: string;
        formattedMonthPattern: string;
        formattedDayPattern: string;
        dateLocale: any;
    };
    DatePicker?: {
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        ok: string;
        today: string;
        yesterday: string; /** Language configuration */
        hours: string;
        minutes: string;
        seconds: string;
        formattedMonthPattern: string;
        formattedDayPattern: string;
        dateLocale: any;
    };
    DateRangePicker?: {
        last7Days: string;
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        ok: string;
        today: string;
        yesterday: string; /** Language configuration */
        hours: string;
        minutes: string;
        seconds: string;
        formattedMonthPattern: string;
        formattedDayPattern: string;
        dateLocale: any;
    };
    Picker?: {
        noResultsText: string;
        placeholder: string;
        searchPlaceholder: string;
        checkAll: string;
    };
    InputPicker?: {
        newItem: string;
        createOption: string;
    };
    Uploader?: {
        inited: string;
        progress: string;
        error: string;
        complete: string;
        emptyFile: string;
        upload: string;
    };
    CloseButton?: {
        closeLabel: string;
    };
    Breadcrumb?: {
        expandText: string;
    };
    Toggle?: {
        on: string;
        off: string;
    };
}>>;
declare const Consumer: React.Consumer<CustomProviderProps<{
    common?: {
        loading: string;
        emptyMessage: string;
    };
    Plaintext?: {
        unfilled: string;
        notSelected: string;
        /**
         * Return the date parsed from string using the given format string.
         *
         * Example:
         *
         *  import parse from 'date-fns/parse';
         *  import eo from 'date-fns/locale/eo'
         *
         *  function parseDate(date, formatStr) {
         *    return parse(date, formatStr, new Date(), { locale: eo });
         *  }
         *
         * */
        notUploaded: string;
    };
    Pagination?: {
        more: string;
        prev: string;
        next: string;
        first: string;
        last: string;
        limit: string;
        total: string;
        skip: string;
    };
    Calendar?: {
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        ok: string;
        today: string;
        yesterday: string; /** Language configuration */
        hours: string;
        minutes: string;
        seconds: string;
        formattedMonthPattern: string;
        formattedDayPattern: string;
        dateLocale: any;
    };
    DatePicker?: {
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        ok: string;
        today: string;
        yesterday: string; /** Language configuration */
        hours: string;
        minutes: string;
        seconds: string;
        formattedMonthPattern: string;
        formattedDayPattern: string;
        dateLocale: any;
    };
    DateRangePicker?: {
        last7Days: string;
        sunday: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        ok: string;
        today: string;
        yesterday: string; /** Language configuration */
        hours: string;
        minutes: string;
        seconds: string;
        formattedMonthPattern: string;
        formattedDayPattern: string;
        dateLocale: any;
    };
    Picker?: {
        noResultsText: string;
        placeholder: string;
        searchPlaceholder: string;
        checkAll: string;
    };
    InputPicker?: {
        newItem: string;
        createOption: string;
    };
    Uploader?: {
        inited: string;
        progress: string;
        error: string;
        complete: string;
        emptyFile: string;
        upload: string;
    };
    CloseButton?: {
        closeLabel: string;
    };
    Breadcrumb?: {
        expandText: string;
    };
    Toggle?: {
        on: string;
        off: string;
    };
}>>;
declare const CustomProvider: (props: CustomProviderProps) => JSX.Element;
export { CustomContext, Consumer as CustomConsumer };
export default CustomProvider;
