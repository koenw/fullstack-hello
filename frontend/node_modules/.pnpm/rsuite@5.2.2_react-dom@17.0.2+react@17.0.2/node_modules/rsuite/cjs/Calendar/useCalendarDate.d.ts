declare const useCalendarDate: (value: Date, defaultDate: Date) => {
    calendarDate: Date;
    setCalendarDate: (date: Date) => void;
};
export default useCalendarDate;
