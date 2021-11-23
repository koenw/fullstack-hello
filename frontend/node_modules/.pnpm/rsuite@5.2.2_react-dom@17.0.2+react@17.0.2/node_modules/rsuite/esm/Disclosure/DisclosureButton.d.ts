import React from 'react';
export interface DisclosureButtonRenderProps {
    open: boolean;
}
export interface DisclosureButtonProps {
    children: (props: React.ButtonHTMLAttributes<HTMLButtonElement> & DisclosureButtonRenderProps, ref: React.Ref<HTMLButtonElement>) => React.ReactElement<React.HTMLAttributes<HTMLButtonElement>>;
}
declare function DisclosureButton(props: DisclosureButtonProps): React.ReactElement<React.HTMLAttributes<HTMLButtonElement>, string | React.JSXElementConstructor<any>>;
declare namespace DisclosureButton {
    var displayName: string;
}
export default DisclosureButton;
