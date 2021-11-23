import React from 'react';
interface PortalProps {
    id?: string;
    container?: HTMLElement | (() => HTMLElement);
}
declare function usePortal(props?: PortalProps): {
    target: Element | HTMLElement;
    Portal: React.FC<any>;
};
export default usePortal;
