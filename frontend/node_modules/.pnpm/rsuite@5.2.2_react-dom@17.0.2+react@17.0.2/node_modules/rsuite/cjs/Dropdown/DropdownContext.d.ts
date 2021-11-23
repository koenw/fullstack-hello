import React, { Dispatch } from 'react';
import { DropdownAction } from './DropdownState';
export interface DropdownContextProps {
    activeKey?: string;
    onSelect: (eventKey: string, event: React.SyntheticEvent) => void;
    hasSelectedItem?: boolean;
    dispatch?: Dispatch<DropdownAction>;
}
declare const DropdownContext: React.Context<DropdownContextProps>;
export default DropdownContext;
