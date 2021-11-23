import { useCallback, useContext, useRef } from 'react';
import DisclosureContext, { DisclosureActionTypes } from './DisclosureContext';
import { KEY_VALUES } from '../utils';

function DisclosureButton(props) {
  var children = props.children;
  var buttonRef = useRef();

  var _useContext = useContext(DisclosureContext),
      open = _useContext[0].open,
      dispatch = _useContext[1],
      onToggle = _useContext[2].onToggle;

  var toggle = useCallback(function (event) {
    if (!open) {
      dispatch({
        type: DisclosureActionTypes.Show
      });
      onToggle === null || onToggle === void 0 ? void 0 : onToggle(true, event);
    } else {
      dispatch({
        type: DisclosureActionTypes.Hide
      });
      onToggle === null || onToggle === void 0 ? void 0 : onToggle(false, event);
    }
  }, [open, dispatch, onToggle]);
  var onClick = useCallback(function (event) {
    toggle(event);
  }, [toggle]);
  var onKeyDown = useCallback(function (event) {
    switch (event.key) {
      case KEY_VALUES.ENTER:
      case KEY_VALUES.SPACE:
        event.preventDefault();
        event.stopPropagation();
        toggle(event);
        break;
    }
  }, [toggle]);
  return children({
    role: 'button',
    'aria-expanded': open,
    onClick: onClick,
    onKeyDown: onKeyDown,
    open: open
  }, buttonRef);
}

DisclosureButton.displayName = 'Disclosure.Button';
export default DisclosureButton;