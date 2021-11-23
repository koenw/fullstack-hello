import React from 'react';
import { TreeNodeType, TreeNodesType } from '../CheckTreePicker/utils';
import { TREE_NODE_DROP_POSITION } from '../utils';
import { CheckTreePickerProps } from '../CheckTreePicker/CheckTreePicker';
import { ItemDataType } from '../@types/common';
import { TreePickerProps } from '../TreePicker/TreePicker';
import { ListInstance } from '../Picker/VirtualizedList';
declare type PartialTreeProps = Partial<TreePickerProps | CheckTreePickerProps>;
/**
 * according node parentNode expand state decide node whether to show
 * @param {*} expandItemValues
 * @param {*} parentKeys
 */
export declare function shouldShowNodeByParentExpanded(expandItemValues?: any[], parentKeys?: any[]): boolean;
/**
 * flatten tree structure to array
 * @param {*} tree
 * @param {*} childrenKey
 * @param {*} executor
 */
export declare function flattenTree(tree: any[], childrenKey?: string, executor?: (node: any, index: number) => any): any[];
/**
 * get all ancestor nodes of given node
 * @param {*} node
 */
export declare function getNodeParents(node: any, parentKey?: string, valueKey?: string): any[];
/**
 * get all parentKeys of given node
 * @param nodes
 * @param node
 * @param valueKey
 */
export declare function getNodeParentKeys(nodes: TreeNodesType, node: TreeNodeType, valueKey: string): any[];
export declare function hasVisibleChildren(node: TreeNodeType, childrenKey: string): any;
/**
 * shallow equal array
 * @param a
 * @param b
 */
export declare function compareArray(a: any[], b: any[]): boolean;
export declare function getDefaultExpandItemValues(data: ItemDataType[], props: Pick<TreePickerProps, 'defaultExpandAll' | 'valueKey' | 'childrenKey' | 'defaultExpandItemValues'>): any[];
/**
 * 获取 expandItemValues 的 value
 * @param props
 */
export declare function getExpandItemValues(props: PartialTreeProps): any[];
/**
 * get dragNode and it's children node keys
 * @param node
 * @param childrenKey
 * @param valueKey
 */
export declare function getDragNodeKeys(dragNode: any, childrenKey: string, valueKey: string): any[];
export declare function calDropNodePosition(event: React.DragEvent, treeNodeElement: Element): -1 | TREE_NODE_DROP_POSITION;
export declare function removeDragNode(data: any[], params: any, { valueKey, childrenKey }: {
    valueKey: any;
    childrenKey: any;
}): void;
export declare function createUpdateTreeDataFunction(params: any, { valueKey, childrenKey }: {
    valueKey: any;
    childrenKey: any;
}): (tree: any[]) => any[];
export declare function findNodeOfTree(data: any, check: any): any;
export declare function filterNodesOfTree(data: any, check: any): any[];
/**
 * get all focusable items
 * exclude not visible and disabled node
 * @param filteredData - filtered tree data
 * @param props - TreeProps
 * @param isSearching - component is in Searching
 * @returns
 */
export declare const getFocusableItems: (filteredData: ItemDataType[], props: PartialTreeProps, isSearching?: boolean) => any[];
/**
 * return all focusable Item and active Element index
 * @param focusItemValue
 * @param focusableItems items
 */
export declare const getActiveIndex: (focusItemValue: any, focusItems: any[], valueKey: any) => number;
/**
 * get current active element and node data
 * @param flattenNodes - flattenData
 */
export declare const getActiveItem: (focusItemValue: string | number, flattenNodes: TreeNodesType, valueKey: string) => any;
export declare const getElementByDataKey: (dataKey: string, treeNodesRefs: any, selector: string) => Element;
/**
 * focus to specify tree node
 * @param refKey - target node refKey
 * @param treeNodeRefs - all tree node refs object
 * @param selector - node css selector
 */
export declare const focusTreeNode: (refKey: string, treeNodeRefs: any, selector: string) => void;
export interface FocusPrevOrNextProps {
    focusItemValue: string | number;
    focusableItems: any[];
    treeNodesRefs: any;
    selector: string;
    valueKey: string;
    callback: (value: string | number) => void;
}
/**
 * focus next item with keyboard
 * @param param
 */
export declare const focusNextItem: ({ focusItemValue, focusableItems, treeNodesRefs, selector, valueKey, callback }: FocusPrevOrNextProps) => void;
/**
 * focus prev item with keyboard
 * @param param
 */
export declare const focusPreviousItem: ({ focusItemValue, focusableItems, treeNodesRefs, selector, valueKey, callback }: FocusPrevOrNextProps) => void;
export interface ArrowHandlerProps {
    focusItem: TreeNodeType;
    expand: boolean;
    childrenKey?: string;
    onExpand: (focusItem: TreeNodeType) => void;
    onFocusItem: () => void;
}
/**
 * Left arrow keyboard event handler
 * When focus is on an open node, closes the node.
 * When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
 * When focus is on a root node that is also either an end node or a closed node, does nothing.
 * @see https://www.w3.org/TR/wai-aria-practices/#TreeView
 */
export declare function leftArrowHandler({ focusItem, expand, onExpand, onFocusItem }: ArrowHandlerProps): void;
/**
 * Right arrow keyboard event handler
 * When focus is on a closed node, opens the node; focus does not move.
 * When focus is on a open node, moves focus to the first child node.
 * When focus is on an end node, does nothing.
 * @see https://www.w3.org/TR/wai-aria-practices/#TreeView
 */
export declare function rightArrowHandler({ focusItem, expand, childrenKey, onExpand, onFocusItem }: ArrowHandlerProps): void;
/**
 * get scrollIndex in virtualized list
 * @param nodes - data
 * @param value - activeItem value
 * @param valueKey
 */
export declare const getScrollToIndex: (nodes: TreeNodeType[], value: string | number, valueKey: string) => number;
/**
 * when searching, expand state always return true
 * @param searchKeyword
 * @param expand
 */
export declare function getExpandWhenSearching(searchKeyword: string, expand: boolean): boolean;
export declare function getTreeActiveNode(nodes: TreeNodesType, value: number | string, valueKey: string): any;
/**
 * toggle tree node
 * @param param0
 */
export declare function toggleExpand({ node, isExpand, expandItemValues, valueKey }: any): unknown[];
export declare function getTreeNodeTitle(label: any): string;
/**
 * get all children from flattenNodes object by given parent node
 * @param nodes
 * @param parent
 */
export declare function getChildrenByFlattenNodes(nodes: TreeNodesType, parent: TreeNodeType): TreeNodeType[];
export declare function useTreeDrag(): {
    dragNode: any;
    dragOverNodeKey: any;
    dragNodeKeys: any[];
    dropNodePosition: TREE_NODE_DROP_POSITION;
    setDragNode: (node: ItemDataType) => void;
    setDragOverNodeKey: React.Dispatch<any>;
    setDragNodeKeys: React.Dispatch<React.SetStateAction<any[]>>;
    setDropNodePosition: React.Dispatch<React.SetStateAction<TREE_NODE_DROP_POSITION>>;
};
interface FlattenTreeDataProps {
    data: TreeNodeType[];
    labelKey: string;
    valueKey: string;
    childrenKey: string;
    uncheckableItemValues?: any[];
    callback?: (nodes: TreeNodesType) => void;
}
interface UnSerializeListProps {
    nodes: TreeNodesType;
    key: string;
    value: any[];
    cascade: boolean;
    uncheckableItemValues: any[];
}
/**
 * hooks for flatten tree structure
 * @param param0
 */
export declare function useFlattenTreeData({ data, labelKey, valueKey, childrenKey, uncheckableItemValues, callback }: FlattenTreeDataProps): {
    forceUpdate: () => void;
    flattenNodes: TreeNodesType;
    flattenTreeData: (treeData: TreeNodeType[], ref: string, parent?: TreeNodeType, layer?: any) => any[];
    serializeListOnlyParent: (nodes: TreeNodesType, key: string) => any[];
    unSerializeList: ({ nodes, key, value, cascade, uncheckableItemValues }: UnSerializeListProps) => void;
    formatVirtualizedTreeData: (nodes: TreeNodesType, data: any[], expandItemValues: ItemDataType[], options: {
        cascade?: boolean;
        searchKeyword?: string;
    }) => any[];
};
/**
 * A hook that saving every tree node ref
 */
export declare function useTreeNodeRefs(): {
    treeNodesRefs: {};
    saveTreeNodeRef: (refKey: string, ref: React.Ref<any>) => void;
};
interface TreeSearchProps {
    labelKey: string;
    childrenKey: string;
    searchKeyword: string;
    data: ItemDataType[];
    searchBy: (keyword: any, label: any, item: any) => boolean;
    callback?: (keyword: string, data: ItemDataType[], event: React.SyntheticEvent) => void;
}
/**
 * A hook that handles tree search filter options
 * @param props
 */
export declare function useTreeSearch(props: TreeSearchProps): {
    searchKeywordState: string;
    filteredData: ItemDataType[];
    setFilteredData: (data: ItemDataType[], searchKeyword: string) => void;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: (searchKeyword: string, event: React.SyntheticEvent) => void;
};
export declare function useGetTreeNodeChildren(treeData: ItemDataType[], valueKey: string, childrenKey: string): {
    data: ItemDataType[];
    setData: React.Dispatch<React.SetStateAction<ItemDataType[]>>;
    loadingNodeValues: any[];
    loadChildren: (node: any, getChildren: any) => void;
};
export interface FocusToTreeNodeProps {
    selector: string;
    valueKey: string;
    activeNode: any;
    virtualized: boolean;
    container: HTMLDivElement;
    list: ListInstance;
    formattedNodes: TreeNodesType[];
}
/**
 * Focus to active tree node.
 * @param param0
 */
export declare function focusToActiveTreeNode({ list, valueKey, activeNode, virtualized, container, selector, formattedNodes }: FocusToTreeNodeProps): void;
export declare function isSearching(searchKeyword?: string): boolean;
export {};
