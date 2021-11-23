declare class ModalManager {
    constructor(hideSiblingNodes?: boolean);
    hideSiblingNodes: any;
    modals: any[];
    containers: any[];
    data: any[];
    add(modal: any, container: any, className?: string): number;
    remove(modal: any): void;
    isTopModal(modal: any): boolean;
}
export default ModalManager;
