"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _DisclosureContext = _interopRequireWildcard(require("./DisclosureContext"));

var _DisclosureButton = _interopRequireDefault(require("./DisclosureButton"));

var _DisclosureContent = _interopRequireDefault(require("./DisclosureContent"));

var _useClickOutside = _interopRequireDefault(require("../utils/useClickOutside"));

// Headless Disclosure
// Ref: https://w3c.github.io/aria-practices/#disclosure
var initialDisclosureState = {
  open: false
};

function disclosureReducer(state, action) {
  switch (action.type) {
    case _DisclosureContext.DisclosureActionTypes.Show:
      return (0, _extends2.default)({}, state, {
        open: true
      });

    case _DisclosureContext.DisclosureActionTypes.Hide:
      return (0, _extends2.default)({}, state, {
        open: false
      });
  }

  return state;
}

function Disclosure(props) {
  var children = props.children,
      openProp = props.open,
      _props$defaultOpen = props.defaultOpen,
      defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
      _props$hideOnClickOut = props.hideOnClickOutside,
      hideOnClickOutside = _props$hideOnClickOut === void 0 ? false : _props$hideOnClickOut,
      onToggle = props.onToggle;

  var _useReducer = (0, _react.useReducer)(disclosureReducer, (0, _extends2.default)({}, initialDisclosureState, {
    open: defaultOpen
  })),
      openState = _useReducer[0].open,
      dispatch = _useReducer[1];

  var containerElementRef = (0, _react.useRef)();
  var open = openProp !== null && openProp !== void 0 ? openProp : openState;
  (0, _useClickOutside.default)({
    enabled: hideOnClickOutside,
    isOutside: function isOutside(event) {
      return !containerElementRef.current.contains(event.target);
    },
    handle: function handle() {
      return dispatch({
        type: _DisclosureContext.DisclosureActionTypes.Hide
      });
    }
  });
  var context = (0, _react.useMemo)(function () {
    return [{
      open: open
    }, dispatch, {
      onToggle: onToggle
    }];
  }, [open, dispatch, onToggle]);
  return /*#__PURE__*/_react.default.createElement(_DisclosureContext.default.Provider, {
    value: context
  }, children({
    open: open
  }, containerElementRef));
}

Disclosure.Button = _DisclosureButton.default;
Disclosure.Content = _DisclosureContent.default;
var _default = Disclosure;
exports.default = _default;