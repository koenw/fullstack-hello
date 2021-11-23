export interface UseTimeoutFnReturn {
    clear: () => void;
    reset: () => void;
}
/**
 * A timer hook
 * @param fn Timer callback function
 * @param ms Milliseconds of the timer
 * @param open Whether to open the timer
 */
declare function useTimeout(fn: () => void, ms?: number, open?: boolean): UseTimeoutFnReturn;
export default useTimeout;
