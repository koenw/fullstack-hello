import { Offset } from '../../@types/common';
export declare type Collection = string | number;
export interface ManagedItem {
    node: HTMLElement;
    edgeOffset: Offset;
    info: {
        collection: Collection;
        index: number;
        disabled?: boolean;
    };
}
declare const useManager: () => {
    listItemRegister: (item: ManagedItem) => {
        unregister: () => void;
    };
    getManagedItem: (node: HTMLElement) => ManagedItem;
    getOrderedItems: (collection: any) => ManagedItem[];
};
export default useManager;
