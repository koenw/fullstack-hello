import React from 'react';
export interface NavContextProps {
    activeKey: string | null;
    onSelect: (eventKey: string, event: React.SyntheticEvent) => void;
}
declare const NavContext: React.Context<NavContextProps>;
export default NavContext;
