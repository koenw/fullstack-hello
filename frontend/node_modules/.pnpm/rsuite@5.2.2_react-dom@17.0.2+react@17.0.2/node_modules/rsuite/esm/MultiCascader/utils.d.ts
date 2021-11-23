/// <reference types="react" />
import { MultiCascaderProps, ValueType } from './MultiCascader';
import { ItemDataType } from '../@types/common';
export interface ItemType extends ItemDataType {
    parent?: ItemType;
}
interface ItemKeys {
    valueKey?: string;
    labelKey?: string;
    childrenKey?: string;
}
/**
 * Get all parents of a node
 * @param node
 */
export declare const getParents: (node: ItemType) => any[];
/**
 * Check if any child nodes are selected.
 * @param node
 * @param value
 * @param itemKeys
 */
export declare const isSomeChildChecked: (node: ItemDataType, value: ValueType, itemKeys: ItemKeys) => any;
/**
 * Check if the parent is selected.
 * @param node
 * @param value
 * @param itemKeys
 */
export declare const isSomeParentChecked: (node: ItemDataType, value: ValueType, itemKeys: ItemKeys) => any;
export declare const getOtherItemValuesByUnselectChild: (itemNode: ItemType, value: any, itemKeys: ItemKeys) => any[];
/**
 * Remove the values of all children.
 */
export declare const removeAllChildrenValue: (value: ValueType, item: ItemType, itemKeys: ItemKeys) => any[];
/**
 * A hook to flatten tree structure data
 * @param data
 */
export declare function useFlattenData(data: ItemDataType[], itemKeys: ItemKeys): {
    addFlattenData: (children: ItemDataType[], parent: ItemDataType) => void;
    flattenData: ItemDataType[];
};
/**
 * A hook for column data
 * @param flattenData
 */
export declare function useColumnData(flattenData: ItemType[]): {
    columnData: ItemDataType[][];
    addColumn: (column: ItemDataType[], index: number) => void;
    setColumnData: import("react").Dispatch<import("react").SetStateAction<ItemDataType[][]>>;
    enforceUpdateColumnData: (nextData: ItemDataType[]) => void;
};
/**
 * A hook that converts the value into a cascading value
 * @param props
 * @param flattenData
 */
export declare function useCascadeValue(props: Partial<MultiCascaderProps>, flattenData: ItemType[]): {
    value: ValueType;
    setValue: import("react").Dispatch<import("react").SetStateAction<ValueType>>;
    splitValue: (item: ItemType, checked: boolean, value: ValueType) => {
        value: ValueType;
        removedValue: ValueType;
    };
};
export {};
