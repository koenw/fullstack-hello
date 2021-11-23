import React from 'react';
import { PickerLocale } from '../locales';
import { PickerComponent } from '../Picker';
import { ItemDataType, FormControlPickerProps } from '../@types/common';
export declare type ValueType = number | string;
export interface CascaderProps<T = ValueType> extends FormControlPickerProps<T, PickerLocale, ItemDataType> {
    /** Sets the width of the menu */
    menuWidth?: number;
    /** Sets the height of the menu */
    menuHeight?: number | string;
    /** Whether dispaly search input box */
    searchable?: boolean;
    /** The menu is displayed directly when the component is initialized */
    inline?: boolean;
    /** When true, make the parent node selectable */
    parentSelectable?: boolean;
    /** Custom render menu */
    renderMenu?: (items: ItemDataType[], menu: React.ReactNode, parentNode?: any, layer?: number) => React.ReactNode;
    /** Custom render menu items */
    renderMenuItem?: (itemLabel: React.ReactNode, item: ItemDataType) => React.ReactNode;
    /** Custom render selected items */
    renderValue?: (value: T, selectedPaths: ItemDataType[], selectedElement: React.ReactNode) => React.ReactNode;
    /** Called when the option is selected */
    onSelect?: (value: ItemDataType, selectedPaths: ItemDataType[], event: React.SyntheticEvent) => void;
    /** Called when clean */
    onClean?: (event: React.SyntheticEvent) => void;
    /** Called when searching */
    onSearch?: (searchKeyword: string, event: React.SyntheticEvent) => void;
    /** Asynchronously load the children of the tree node. */
    getChildren?: (node: ItemDataType) => ItemDataType[] | Promise<ItemDataType[]>;
}
declare const Cascader: PickerComponent<CascaderProps>;
export default Cascader;
