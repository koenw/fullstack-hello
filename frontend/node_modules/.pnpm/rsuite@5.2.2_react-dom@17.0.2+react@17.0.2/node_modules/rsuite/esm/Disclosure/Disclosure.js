import _extends from "@babel/runtime/helpers/esm/extends";
// Headless Disclosure
// Ref: https://w3c.github.io/aria-practices/#disclosure
import React, { useMemo, useReducer, useRef } from 'react';
import DisclosureContext, { DisclosureActionTypes } from './DisclosureContext';
import DisclosureButton from './DisclosureButton';
import DisclosureContent from './DisclosureContent';
import useClickOutside from '../utils/useClickOutside';
var initialDisclosureState = {
  open: false
};

function disclosureReducer(state, action) {
  switch (action.type) {
    case DisclosureActionTypes.Show:
      return _extends({}, state, {
        open: true
      });

    case DisclosureActionTypes.Hide:
      return _extends({}, state, {
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

  var _useReducer = useReducer(disclosureReducer, _extends({}, initialDisclosureState, {
    open: defaultOpen
  })),
      openState = _useReducer[0].open,
      dispatch = _useReducer[1];

  var containerElementRef = useRef();
  var open = openProp !== null && openProp !== void 0 ? openProp : openState;
  useClickOutside({
    enabled: hideOnClickOutside,
    isOutside: function isOutside(event) {
      return !containerElementRef.current.contains(event.target);
    },
    handle: function handle() {
      return dispatch({
        type: DisclosureActionTypes.Hide
      });
    }
  });
  var context = useMemo(function () {
    return [{
      open: open
    }, dispatch, {
      onToggle: onToggle
    }];
  }, [open, dispatch, onToggle]);
  return /*#__PURE__*/React.createElement(DisclosureContext.Provider, {
    value: context
  }, children({
    open: open
  }, containerElementRef));
}

Disclosure.Button = DisclosureButton;
Disclosure.Content = DisclosureContent;
export default Disclosure;