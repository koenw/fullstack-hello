import React from 'react';
import { ListProps, ListRowProps } from 'react-virtualized/dist/commonjs/List';
import { AutoSizerProps } from 'react-virtualized/dist/commonjs/AutoSizer';
export interface ListInstance {
    child: Element;
    scrollToRow?: (index: number) => void;
}
export type { ListProps, AutoSizerProps, ListRowProps };
export declare const List: React.ComponentType<ListProps>;
export declare const AutoSizer: React.ComponentType<AutoSizerProps>;
