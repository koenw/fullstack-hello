import { useCallback, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useUniqueId from '../utils/useUniqueId';
import MenuContext, { MenuActionTypes, MoveFocusTo } from './MenuContext';

/**
 * Headless ARIA `menuitem`
 */
function MenuItem(props) {
  var _menuState$items$menu;

  var children = props.children,
      selected = props.selected,
      disabled = props.disabled,
      onActivate = props.onActivate;
  var menuitemRef = useRef();
  var menuitemId = useUniqueId('menuitem-');
  var menu = useContext(MenuContext); // fixme make sure <MenuItem> is used inside a <Menu>

  var _ref = menu !== null && menu !== void 0 ? menu : [],
      menuState = _ref[0],
      dispatch = _ref[1]; // Whether this menuitem has focus (indicated by `aria-activedescendant` from parent menu)


  var hasFocus = (menuState === null || menuState === void 0 ? void 0 : (_menuState$items$menu = menuState.items[menuState === null || menuState === void 0 ? void 0 : menuState.activeItemIndex]) === null || _menuState$items$menu === void 0 ? void 0 : _menuState$items$menu.element) === menuitemRef.current && !!menuitemRef.current;
  var handleClick = useCallback(function (event) {
    if (disabled) {
      return;
    }

    onActivate === null || onActivate === void 0 ? void 0 : onActivate(event);
  }, [disabled, onActivate]); // Gain/release focus on mousedown in `menubar`

  var handleMouseDown = useCallback(function () {
    dispatch({
      type: MenuActionTypes.MoveFocus,
      to: MoveFocusTo.Specific,
      id: menuitemRef.current.id
    });
  }, [dispatch]); // Gain/release focus on mouseenter/mouseleave in `menu`

  var handleMouseMove = useCallback(function () {
    dispatch({
      type: MenuActionTypes.MoveFocus,
      to: MoveFocusTo.Specific,
      id: menuitemRef.current.id
    });
  }, [dispatch]);
  var handleMouseLeave = useCallback(function () {
    dispatch({
      type: MenuActionTypes.MoveFocus,
      to: MoveFocusTo.None
    });
  }, [dispatch]);
  useEffect(function () {
    var menuitemElement = menuitemRef.current;
    dispatch === null || dispatch === void 0 ? void 0 : dispatch({
      type: MenuActionTypes.RegisterItem,
      element: menuitemElement,
      props: {
        disabled: disabled
      }
    });
    return function () {
      dispatch === null || dispatch === void 0 ? void 0 : dispatch({
        type: MenuActionTypes.UnregisterItem,
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
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.func.isRequired,
  onActivate: PropTypes.func
};
export default MenuItem;