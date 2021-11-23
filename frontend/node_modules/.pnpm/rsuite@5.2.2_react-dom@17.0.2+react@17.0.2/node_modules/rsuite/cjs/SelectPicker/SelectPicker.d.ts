import React from 'react';
import { PickerLocale } from '../locales';
import { PickerComponent } from '../Picker';
import { FormControlPickerProps, ItemDataType } from '../@types/common';
import { ListProps } from 'react-virtualized/dist/commonjs/List';
export declare type ValueType = number | string;
export interface SelectProps<T = ValueType> {
    /** Set group condition key in data */
    groupBy?: string;
    /** Whether dispaly search input box */
    searchable?: boolean;
    /** Whether using virtualized list */
    virtualized?: boolean;
    /**
     * List-related properties in `react-virtualized`
     * https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md#prop-types
     */
    listProps?: ListProps;
    /** Custom search rules. */
    searchBy?: (keyword: string, label: React.ReactNode, item: ItemDataType) => boolean;
    /** Sort options */
    sort?: (isGroup: boolean) => (a: any, b: any) => number;
    /** Customizing the Rendering Menu list */
    renderMenu?: (menu: React.ReactNode) => React.ReactNode;
    /** Custom render menuItems */
    renderMenuItem?: (label: React.ReactNode, item: ItemDataType) => React.ReactNode;
    /** Custom render menu group */
    renderMenuGroup?: (title: React.ReactNode, item: ItemDataType) => React.ReactNode;
    /** Custom render selected items */
    renderValue?: (value: T, item: ItemDataType | ItemDataType[], selectedElement: React.ReactNode) => React.ReactNode;
    /** Called when the option is selected */
    onSelect?: (value: any, item: ItemDataType, event: React.SyntheticEvent) => void;
    /** Called after clicking the group title */
    onGroupTitleClick?: (event: React.SyntheticEvent) => void;
    /** Called when searching */
    onSearch?: (searchKeyword: string, event: React.SyntheticEvent) => void;
    /** Called when clean */
    onClean?: (event: React.SyntheticEvent) => void;
}
export interface SelectPickerProps<T = ValueType> extends FormControlPickerProps<T, PickerLocale, ItemDataType>, SelectProps<T> {
}
declare const SelectPicker: PickerComponent<SelectPickerProps>;
export default SelectPicker;
