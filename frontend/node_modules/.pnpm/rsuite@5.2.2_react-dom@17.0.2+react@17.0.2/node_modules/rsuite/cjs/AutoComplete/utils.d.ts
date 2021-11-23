import { ItemDataType } from '../@types/common';
export declare function transformData(data: any[]): any[];
export declare const shouldDisplay: (filterBy: (value: string, item: ItemDataType) => boolean, value: any) => (item: any) => boolean;
