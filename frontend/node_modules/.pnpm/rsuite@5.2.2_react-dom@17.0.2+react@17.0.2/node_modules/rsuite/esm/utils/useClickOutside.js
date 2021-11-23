import { useEffect, useRef } from 'react';
export default function useClickOutside(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      isOutside = _ref.isOutside,
      handle = _ref.handle;
  var isOutsideRef = useRef(isOutside);
  var handleRef = useRef(handle);
  useEffect(function () {
    isOutsideRef.current = isOutside;
    handleRef.current = handle;
  }, [isOutside, handle]);
  useEffect(function () {
    if (enabled) {
      var eventHandler = function eventHandler(event) {
        if (isOutsideRef.current(event)) {
          handleRef.current(event);
        }
      };

      window.addEventListener('mousedown', eventHandler);
      return function () {
        window.removeEventListener('mousedown', eventHandler);
      };
    }
  }, [enabled]);
}