/// <reference types="react" />
export declare const tuple: <T extends string[]>(...args: T) => T;
export declare type Partial<T> = {
    [P in keyof T]?: T[P];
};
export declare type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export declare type Exclude<T, U> = T extends U ? never : T;
export declare type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
export declare type ReplaceProps<Inner extends React.ElementType, P> = Omit<React.ComponentPropsWithRef<Inner>, P> & P;
