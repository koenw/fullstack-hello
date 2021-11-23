/// <reference types="react" />
import { CascaderProps } from './Cascader';
import { ItemDataType } from '../@types/common';
export declare function getColumnsAndPaths(data: any, value: any, options: any): {
    columns: ItemDataType[][];
    paths: any[];
};
export declare function usePaths(props: CascaderProps): {
    enforceUpdate: (nextValue: any, isAttachChildren?: boolean) => void;
    columnData: ItemDataType[][];
    valueToPaths: ItemDataType[];
    selectedPaths: ItemDataType[];
    setValueToPaths: import("react").Dispatch<import("react").SetStateAction<ItemDataType[]>>;
    setColumnData: import("react").Dispatch<import("react").SetStateAction<ItemDataType[][]>>;
    setSelectedPaths: import("react").Dispatch<import("react").SetStateAction<ItemDataType[]>>;
    addColumn: (column: ItemDataType[], index: number) => void;
};
