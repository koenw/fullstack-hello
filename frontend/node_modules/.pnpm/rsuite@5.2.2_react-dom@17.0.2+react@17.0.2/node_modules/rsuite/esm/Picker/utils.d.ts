import React from 'react';
import { OverlayTriggerInstance } from './PickerToggleTrigger';
import { TypeAttributes, ItemDataType } from '../@types/common';
interface NodeKeys {
    valueKey: string;
    childrenKey: string;
}
export declare function createConcatChildrenFunction(node: any, nodeValue?: any, nodeKeys?: NodeKeys): (data: any[], children: any[]) => any[];
export declare function shouldDisplay(label: React.ReactNode, searchKeyword: string): boolean;
interface PickerClassNameProps {
    name?: string;
    classPrefix?: string;
    className?: string;
    placement?: TypeAttributes.Placement;
    appearance?: 'default' | 'subtle';
    cleanable?: boolean;
    block?: boolean;
    disabled?: boolean;
    countable?: boolean;
    readOnly?: boolean;
    plaintext?: boolean;
    hasValue?: boolean;
    classes?: any;
}
/**
 * The className of the assembled Toggle is on the Picker.
 */
export declare function usePickerClassName(props: PickerClassNameProps): [string, string[]];
interface EventsProps {
    down?: React.KeyboardEventHandler;
    up?: React.KeyboardEventHandler;
    enter?: React.KeyboardEventHandler;
    del?: React.KeyboardEventHandler;
    esc?: React.KeyboardEventHandler;
    right?: React.KeyboardEventHandler;
    left?: React.KeyboardEventHandler;
}
/**
 * Handling keyboard events...
 * @param event Keyboard event object
 * @param events Event callback functions
 */
export declare function onMenuKeyDown(event: React.KeyboardEvent, events: EventsProps): void;
interface FocusItemValueProps {
    target: HTMLElement | (() => HTMLElement);
    data?: any[];
    valueKey?: string;
    focusableQueryKey?: string;
    defaultLayer?: number;
    rtl?: boolean;
    callback?: (value: any, event: React.KeyboardEvent) => void;
}
/**
 * A hook that manages the focus state of the option.
 * @param defaultFocusItemValue
 * @param props
 */
export declare const useFocusItemValue: (defaultFocusItemValue: number | string | readonly string[], props: FocusItemValueProps) => {
    focusItemValue: any;
    setFocusItemValue: React.Dispatch<any>;
    layer: number;
    setLayer: React.Dispatch<React.SetStateAction<number>>;
    keys: any[];
    setKeys: React.Dispatch<React.SetStateAction<any[]>>;
    onKeyDown: (event: any) => void;
};
interface ToggleKeyDownEventProps {
    toggle?: boolean;
    triggerRef?: React.RefObject<any>;
    targetRef: React.RefObject<any>;
    overlayRef?: React.RefObject<any>;
    searchInputRef?: React.RefObject<any>;
    active?: boolean;
    onExit?: (event: any) => void;
    onKeyDown?: (event: any) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onMenuKeyDown?: (event: any) => void;
    onMenuPressEnter?: (event: any) => void;
    onMenuPressBackspace?: (event: any) => void;
    [key: string]: any;
}
/**
 * A hook to control the toggle keyboard operation
 * @param props
 */
export declare const useToggleKeyDownEvent: (props: ToggleKeyDownEventProps) => (event: React.KeyboardEvent) => void;
interface SearchProps {
    labelKey: string;
    data: ItemDataType[];
    searchBy: (keyword: any, label: any, item: any) => boolean;
    callback?: (keyword: string, data: ItemDataType[], event: React.SyntheticEvent) => void;
}
/**
 * A hook that handles search filter options
 * @param props
 */
export declare function useSearch(props: SearchProps): {
    searchKeyword: string;
    filteredData: any[];
    updateFilteredData: (nextData: ItemDataType[]) => void;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
    checkShouldDisplay: (item: ItemDataType, keyword?: string) => boolean;
    handleSearch: (searchKeyword: string, event: React.SyntheticEvent) => void;
};
interface Refs {
    triggerRef?: React.RefObject<OverlayTriggerInstance>;
    rootRef?: React.RefObject<HTMLElement>;
    overlayRef?: React.RefObject<HTMLElement>;
    targetRef?: React.RefObject<HTMLElement>;
}
/**
 * A hook of the exposed method of Picker
 *
 * {
 *   root: Element;
 *   overlay: Element;
 *   target?: Element;
 *   updatePosition:() => void;
 *   open:() => void;
 *   close:() => void;
 * }
 * @param ref
 * @param params
 */
export declare function usePublicMethods(ref: any, { triggerRef, overlayRef, targetRef, rootRef }: Refs, disabled?: boolean): void;
export {};
