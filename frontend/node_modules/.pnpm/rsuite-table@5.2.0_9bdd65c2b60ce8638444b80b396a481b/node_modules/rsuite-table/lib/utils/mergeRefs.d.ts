/// <reference types="react" />
declare type CallbackRef<T> = (ref: T | null) => void;
declare type Ref<T> = React.MutableRefObject<T> | CallbackRef<T>;
export default function mergeRefs<T>(refA?: Ref<T> | null, refB?: Ref<T> | null): (value: T | null) => void;
export {};
