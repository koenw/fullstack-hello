import { PickerLocale } from '../locales';
import { PickerComponent } from '../Picker';
import { ItemDataType, FormControlPickerProps } from '../@types/common';
import { SelectProps } from '../SelectPicker';
export declare type ValueType = (number | string)[];
export interface CheckPickerProps<T = ValueType> extends FormControlPickerProps<T, PickerLocale, ItemDataType>, SelectProps<T> {
    /** Top the selected option in the options */
    sticky?: boolean;
    /** A picker that can be counted */
    countable?: boolean;
}
declare const CheckPicker: PickerComponent<CheckPickerProps>;
export default CheckPicker;
