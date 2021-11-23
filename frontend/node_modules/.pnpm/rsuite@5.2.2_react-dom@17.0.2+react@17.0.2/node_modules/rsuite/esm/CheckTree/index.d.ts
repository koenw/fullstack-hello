import { FormControlPickerProps, RsRefForwardingComponent } from '../@types/common';
import { ValueType } from '../CheckTreePicker';
import { TreeBaseProps } from '../Tree/Tree';
export interface CheckTreeProps extends TreeBaseProps<ValueType>, FormControlPickerProps<ValueType> {
    /** Tree node cascade */
    cascade?: boolean;
}
declare const CheckTree: RsRefForwardingComponent<'div', CheckTreeProps>;
export default CheckTree;
