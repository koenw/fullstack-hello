import React, { Dispatch } from 'react';
export interface DisclosureState {
    open: boolean;
}
export declare enum DisclosureActionTypes {
    Show = 0,
    Hide = 1
}
export declare type DisclosureAction = {
    type: DisclosureActionTypes;
};
export declare type DisclosureContextProps = [
    DisclosureState,
    Dispatch<DisclosureAction>,
    {
        onToggle: (open: boolean, event?: React.SyntheticEvent) => void;
    }
];
declare const DisclosureContext: React.Context<DisclosureContextProps>;
export default DisclosureContext;
