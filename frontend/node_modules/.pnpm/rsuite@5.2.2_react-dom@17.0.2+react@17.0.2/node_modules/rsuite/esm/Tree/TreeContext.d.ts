import React from 'react';
export interface TreeContextProps {
    inline?: boolean;
    dragNodeRef?: React.MutableRefObject<any>;
}
declare const TreeContext: React.Context<TreeContextProps>;
export default TreeContext;
