import { useEffect, useRef, useCallback } from 'react';

/**
 * A timer hook
 * @param fn Timer callback function
 * @param ms Milliseconds of the timer
 * @param open Whether to open the timer
 */
function useTimeout(fn, ms, open) {
  if (ms === void 0) {
    ms = 0;
  }

  if (open === void 0) {
    open = true;
  }

  var timeout = useRef();
  var clear = useCallback(function () {
    timeout.current && clearTimeout(timeout.current);
  }, []);
  var set = useCallback(function () {
    timeout.current = open && setTimeout(function () {
      return fn === null || fn === void 0 ? void 0 : fn();
    }, ms);
  }, [ms, fn, open]);
  useEffect(function () {
    set();
    return clear;
  }, [fn, ms, open, clear, set]);
  return {
    clear: clear,
    reset: set
  };
}

export default useTimeout;