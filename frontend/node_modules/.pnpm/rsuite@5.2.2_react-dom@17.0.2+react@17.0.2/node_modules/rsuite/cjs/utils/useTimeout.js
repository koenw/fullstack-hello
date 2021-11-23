"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

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

  var timeout = (0, _react.useRef)();
  var clear = (0, _react.useCallback)(function () {
    timeout.current && clearTimeout(timeout.current);
  }, []);
  var set = (0, _react.useCallback)(function () {
    timeout.current = open && setTimeout(function () {
      return fn === null || fn === void 0 ? void 0 : fn();
    }, ms);
  }, [ms, fn, open]);
  (0, _react.useEffect)(function () {
    set();
    return clear;
  }, [fn, ms, open, clear, set]);
  return {
    clear: clear,
    reset: set
  };
}

var _default = useTimeout;
exports.default = _default;