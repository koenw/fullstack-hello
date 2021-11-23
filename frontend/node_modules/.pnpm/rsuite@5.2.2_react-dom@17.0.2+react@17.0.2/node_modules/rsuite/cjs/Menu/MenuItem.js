"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useUniqueId = _interopRequireDefault(require("../utils/useUniqueId"));

var _MenuContext = _interopRequireWildcard(require("./MenuContext"));

/**
 * Headless ARIA `menuitem`
 */
function MenuItem(props) {
  var _menuState$items$menu;

  var children = props.children,
      selected = props.selected,
      disabled = props.disabled,
      onActivate = props.onActivate;
  var menuitemRef = (0, _react.useRef)();
  var menuitemId = (0, _useUniqueId.default)('menuitem-');
  var menu = (0, _react.useContext)(_MenuContext.default); // fixme make sure <MenuItem> is used inside a <Menu>

  var _ref = menu !== null && menu !== void 0 ? menu : [],
      menuState = _ref[0],
      dispatch = _ref[1]; // Whether this menuitem has focus (indicated by `aria-activedescendant` from parent menu)


  var hasFocus = (menuState === null || menuState === void 0 ? void 0 : (_menuState$items$menu = menuState.items[menuState === null || menuState === void 0 ? void 0 : menuState.activeItemIndex]) === null || _menuState$items$menu === void 0 ? void 0 : _menuState$items$menu.element) === menuitemRef.current && !!menuitemRef.current;
  var handleClick = (0, _react.useCallback)(function (event) {
    if (disabled) {
      return;
    }

    onActivate === null || onActivate === void 0 ? void 0 : onActivate(event);
  }, [disabled, onActivate]); // Gain/release focus on mousedown in `menubar`

  var handleMouseDown = (0, _react.useCallback)(function () {
    dispatch({
      type: _MenuContext.MenuActionTypes.MoveFocus,
      to: _MenuContext.MoveFocusTo.Specific,
      id: menuitemRef.current.id
    });
  }, [dispatch]); // Gain/release focus on mouseenter/mouseleave in `menu`

  var handleMouseMove = (0, _react.useCallback)(function () {
    dispatch({
      type: _MenuContext.MenuActionTypes.MoveFocus,
      to: _MenuContext.MoveFocusTo.Specific,
      id: menuitemRef.current.id
    });
  }, [dispatch]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    dispatch({
      type: _MenuContext.MenuActionTypes.MoveFocus,
      to: _MenuContext.MoveFocusTo.None
    });
  }, [dispatch]);
  (0, _react.useEffect)(function () {
    var menuitemElement = menuitemRef.current;
    dispatch === null || dispatch === void 0 ? void 0 : dispatch({
      type: _MenuContext.MenuActionTypes.RegisterItem,
      element: menuitemElement,
      props: {
        disabled: disabled
      }
    });
    return function () {
      dispatch === null || dispatch === void 0 ? void 0 : dispatch({
        type: _MenuContext.MenuActionTypes.UnregisterItem,
        id: menuitemElement.id
      });
    };
  }, [menuitemRef, disabled, dispatch]);
  var menuitemProps = {
    id: menuitemId,
    role: 'menuitem',
    // fixme Only use `aria-checked` on menuitemradio and menuitemcheckbox
    'aria-checked': selected || undefined,
    'aria-disabled': disabled,
    tabIndex: -1,
    onClick: handleClick,
    // render props
    selected: selected,
    active: hasFocus
  }; // Only move focus on hover in a `menu`, not `menubar`

  if ((menuState === null || menuState === void 0 ? void 0 : menuState.role) === 'menu') {
    menuitemProps.onMouseMove = handleMouseMove;
    menuitemProps.onMouseLeave = handleMouseLeave;
  }

  if ((menuState === null || menuState === void 0 ? void 0 : menuState.role) === 'menubar') {
    menuitemProps.onMouseDown = handleMouseDown;
  }

  return children(menuitemProps, menuitemRef);
}

MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = {
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.func.isRequired,
  onActivate: _propTypes.default.func
};
var _default = MenuItem;
exports.default = _default;