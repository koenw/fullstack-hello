export declare const SIZE: string[];
export declare const STATUS: string[];
export declare const COLOR: string[];
export declare const PLACEMENT_4: string[];
export declare const PLACEMENT_8: string[];
export declare const PLACEMENT_AUTO: string[];
export declare const PLACEMENT: any[];
/**
 *  Check Tree Node State
 */
export declare enum CHECK_STATE {
    UNCHECK = 0,
    CHECK = 1,
    INDETERMINATE = 2
}
export declare type CheckStateType = CHECK_STATE.UNCHECK | CHECK_STATE.CHECK | CHECK_STATE.INDETERMINATE;
export declare const TREE_NODE_PADDING = 16;
export declare const TREE_NODE_ROOT_PADDING = 12;
/**
 * Tree Node Drag Type
 */
export declare enum TREE_NODE_DROP_POSITION {
    DRAG_OVER = 0,
    DRAG_OVER_TOP = 1,
    DRAG_OVER_BOTTOM = 2
}
/**
 * UI Events KeyboardEvent key Values
 * https://www.w3.org/TR/uievents-key
 */
export declare const KEY_VALUES: {
    LEFT: string;
    UP: string;
    RIGHT: string;
    DOWN: string;
    END: string;
    HOME: string;
    PAGE_DOWN: string;
    PAGE_UP: string;
    ENTER: string;
    TAB: string;
    SPACE: string;
    BACKSPACE: string;
    DELETE: string;
    COMMA: string;
    ESC: string;
};
export declare enum DATERANGE_DISABLED_TARGET {
    CALENDAR = "CALENDAR",
    TOOLBAR_BUTTON_OK = "TOOLBAR_BUTTON_OK",
    TOOLBAR_SHORTCUT = "TOOLBAR_SHORTCUT"
}
