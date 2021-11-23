"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _DisclosureContext = _interopRequireWildcard(require("./DisclosureContext"));

var _utils = require("../utils");

function DisclosureButton(props) {
  var children = props.children;
  var buttonRef = (0, _react.useRef)();

  var _useContext = (0, _react.useContext)(_DisclosureContext.default),
      open = _useContext[0].open,
      dispatch = _useContext[1],
      onToggle = _useContext[2].onToggle;

  var toggle = (0, _react.useCallback)(function (event) {
    if (!open) {
      dispatch({
        type: _DisclosureContext.DisclosureActionTypes.Show
      });
      onToggle === null || onToggle === void 0 ? void 0 : onToggle(true, event);
    } else {
      dispatch({
        type: _DisclosureContext.DisclosureActionTypes.Hide
      });
      onToggle === null || onToggle === void 0 ? void 0 : onToggle(false, event);
    }
  }, [open, dispatch, onToggle]);
  var onClick = (0, _react.useCallback)(function (event) {
    toggle(event);
  }, [toggle]);
  var onKeyDown = (0, _react.useCallback)(function (event) {
    switch (event.key) {
      case _utils.KEY_VALUES.ENTER:
      case _utils.KEY_VALUES.SPACE:
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
var _default = DisclosureButton;
exports.default = _default;