import React from 'react';
import DisclosureButton from './DisclosureButton';
import DisclosureContent from './DisclosureContent';
export interface DisclosureRenderProps {
    open: boolean;
}
export interface DisclosureProps {
    children: (props: DisclosureRenderProps, ref: React.Ref<HTMLElement>) => React.ReactNode;
    /** Controlled open state */
    open?: boolean;
    /** Whether disclosure is initially expanded */
    defaultOpen?: boolean;
    hideOnClickOutside?: boolean;
    /** Callback when disclosure button is being activated to update the open state */
    onToggle?: (open: boolean, event: React.SyntheticEvent) => void;
}
declare function Disclosure(props: DisclosureProps): JSX.Element;
declare namespace Disclosure {
    var Button: typeof DisclosureButton;
    var Content: typeof DisclosureContent;
}
export default Disclosure;
