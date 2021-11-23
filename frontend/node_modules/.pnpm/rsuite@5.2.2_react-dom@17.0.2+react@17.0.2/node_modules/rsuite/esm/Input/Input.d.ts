import React from 'react';
import { WithAsProps, RsRefForwardingComponent, TypeAttributes, FormControlBaseProps } from '../@types/common';
export interface LocaleType {
    unfilled: string;
}
export interface InputProps extends WithAsProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>, FormControlBaseProps {
    /** The HTML input type */
    type?: string;
    /** The HTML input id */
    id?: string;
    /** A component can have different sizes */
    size?: TypeAttributes.Size;
    /** Ref of input element */
    inputRef?: React.Ref<any>;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Called on press enter */
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}
declare const Input: RsRefForwardingComponent<'input', InputProps>;
export default Input;
