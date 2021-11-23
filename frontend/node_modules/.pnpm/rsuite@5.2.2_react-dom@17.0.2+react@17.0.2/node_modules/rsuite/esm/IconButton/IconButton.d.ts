import React from 'react';
import { ButtonProps } from '../Button';
import { IconProps } from '@rsuite/icons/lib/Icon';
export interface IconButtonProps extends ButtonProps {
    /** Set the icon */
    icon?: React.ReactElement<IconProps>;
    /** Set circle button */
    circle?: boolean;
    /** The placement of icon */
    placement?: 'left' | 'right';
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<unknown>>;
export default IconButton;
