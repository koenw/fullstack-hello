import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useCallback, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import MenuContext, { MenuActionTypes, MoveFocusTo } from './MenuContext';
import { KEY_VALUES, useCustom } from '../utils';
import useUniqueId from '../utils/useUniqueId';
import useMenu from './useMenu';
import useFocus from '../utils/useFocus';
import useClickOutside from '../utils/useClickOutside';
import { isFocusLeaving } from '../utils/events';
import { isFocusableElement } from '../utils/dom';
var defaultOpenMenuOn = ['click'];
/**
 * Headless ARIA `menu`
 */

function Menu(props) {
  var _items$activeItemInde;

  var disabled = props.disabled,
      children = props.children,
      _props$openMenuOn = props.openMenuOn,
      openMenuOn = _props$openMenuOn === void 0 ? defaultOpenMenuOn : _props$openMenuOn,
      menuButtonText = props.menuButtonText,
      renderMenuButton = props.renderMenuButton,
      renderMenuPopup = props.renderMenuPopup,
      onToggleMenu = props.onToggleMenu;
  var buttonElementRef = useRef();
  var menuElementRef = useRef();
  var parentMenu = useContext(MenuContext);
  var isSubmenu = !!parentMenu;
  var menu = useMenu();
  var _menu$ = menu[0],
      open = _menu$.open,
      items = _menu$.items,
      activeItemIndex = _menu$.activeItemIndex,
      dispatch = menu[1];

  var _useCustom = useCustom('Menu'),
      rtl = _useCustom.rtl;

  var activeItem = (_items$activeItemInde = items[activeItemIndex]) === null || _items$activeItemInde === void 0 ? void 0 : _items$activeItemInde.element;
  var menuFocus = useFocus(menuElementRef);
  var openMenu = useCallback(function (event) {
    dispatch({
      type: MenuActionTypes.OpenMenu
    });

    if (!event.isTrusted) {
      dispatch({
        type: MenuActionTypes.MoveFocus,
        to: MoveFocusTo.First
      });
    }

    onToggleMenu === null || onToggleMenu === void 0 ? void 0 : onToggleMenu(true, event);
    menuFocus.grab();
  }, [dispatch, onToggleMenu, menuFocus]);
  var closeMenu = useCallback(function (event, returnFocusToButton) {
    if (returnFocusToButton === void 0) {
      returnFocusToButton = true;
    }

    dispatch({
      type: MenuActionTypes.CloseMenu
    });
    dispatch({
      type: MenuActionTypes.MoveFocus,
      to: MoveFocusTo.None
    });
    onToggleMenu === null || onToggleMenu === void 0 ? void 0 : onToggleMenu(false, event);

    if (returnFocusToButton) {
      buttonElementRef.current.focus({
        preventScroll: true
      });
    }
  }, [dispatch, onToggleMenu, buttonElementRef]);
  var toggleMenu = useCallback(function (event) {
    if (!open) {
      openMenu(event);
    } else {
      closeMenu(event);
    }
  }, [open, openMenu, closeMenu]);
  useClickOutside({
    enabled: open,
    isOutside: function isOutside(event) {
      return !buttonElementRef.current.contains(event.target) && !menuElementRef.current.contains(event.target);
    },
    // fixme if clicking on a focusable element, don't move focus to menu button
    handle: function handle(event) {
      return closeMenu(event, !isFocusableElement(event.target));
    }
  });
  /**
   * Keyboard interaction on menu button
   * @see https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
   */

  var handleButtonKeydown = useCallback(function (e) {
    switch (e.key) {
      // Open the menu
      case KEY_VALUES.ENTER:
      case KEY_VALUES.SPACE:
        e.preventDefault();
        e.stopPropagation();

        if (!open) {
          openMenu(e);
          dispatch({
            type: MenuActionTypes.MoveFocus,
            to: MoveFocusTo.First
          });
        } else {
          closeMenu(e);
        }

        break;
      // Open the menu (if closed) and move focus to first item
      // This is mostly useful after opening the menu with click

      case KEY_VALUES.DOWN:
        e.preventDefault();
        e.stopPropagation();

        if (!open) {
          openMenu(e);
        }

        dispatch({
          type: MenuActionTypes.MoveFocus,
          to: MoveFocusTo.First
        });
        break;
    }
  }, [open, openMenu, closeMenu, dispatch]);
  var handleButtonClick = useCallback(function (event) {
    if (disabled) {
      return;
    }

    toggleMenu(event);
  }, [disabled, toggleMenu]);
  var handleButtonContextMenu = useCallback(function (event) {
    // prevents default contextmenu
    event.preventDefault(); // Only opens menu on right click. Left click can close the menu opened by a right click

    if (open) return;
    if (disabled) return;
    openMenu(event);
  }, [open, disabled, openMenu]);
  var buttonEventHandlers = {
    onKeyDown: handleButtonKeydown
  };
  /**
   * Bind event of trigger,
   * not used in  in the expanded state of '<Sidenav>'
   */

  if (openMenuOn !== null && openMenuOn !== void 0 && openMenuOn.includes('click')) {
    buttonEventHandlers.onClick = handleButtonClick;
  }

  if (openMenuOn !== null && openMenuOn !== void 0 && openMenuOn.includes('contextmenu')) {
    buttonEventHandlers.onContextMenu = handleButtonContextMenu;
  }

  var buttonId = useUniqueId('menubutton-');
  var menuId = useUniqueId('menu-'); // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#wai-aria-roles-states-and-properties-14

  var buttonAriaAttributes = {
    role: 'button',
    'aria-haspopup': 'menu',
    'aria-expanded': open || undefined,
    // it's recommend to remove aria-expanded when menu is hidden
    'aria-controls': menuId
  };

  var buttonProps = _extends({
    id: buttonId
  }, buttonAriaAttributes, buttonEventHandlers, {
    // render props
    open: open
  });

  var customMenuButton = renderMenuButton === null || renderMenuButton === void 0 ? void 0 : renderMenuButton(buttonProps, buttonElementRef);
  var buttonElement = customMenuButton !== null && customMenuButton !== void 0 ? customMenuButton : /*#__PURE__*/React.createElement("button", _extends({
    ref: buttonElementRef
  }, buttonProps), menuButtonText);
  /**
   * Keyboard interaction on menu
   * @see https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-12
   */

  var handleMenuKeydown = useCallback(function (e) {
    switch (e.key) {
      // Move focus to previous item
      case KEY_VALUES.UP:
        e.preventDefault();
        e.stopPropagation();
        dispatch({
          type: MenuActionTypes.MoveFocus,
          to: MoveFocusTo.Prev
        });
        break;
      // Move focus to next item

      case KEY_VALUES.DOWN:
        e.preventDefault();
        e.stopPropagation();
        dispatch({
          type: MenuActionTypes.MoveFocus,
          to: MoveFocusTo.Next
        });
        break;
      // When focus is in a menu and on a menuitem that has a submenu, opens the submenu and places focus on its first item.

      case KEY_VALUES.RIGHT:
        e.preventDefault();
        e.stopPropagation();

        if (!rtl) {
          if ((activeItem === null || activeItem === void 0 ? void 0 : activeItem.getAttribute('aria-haspopup')) === 'menu') {
            activeItem.click();
          }
        } else if (isSubmenu) {
          dispatch({
            type: MenuActionTypes.CloseMenu
          });
        }

        break;
      // When focus is in a submenu of an item in a menu, closes the submenu and returns focus to the parent menuitem.

      case KEY_VALUES.LEFT:
        e.preventDefault();
        e.stopPropagation();

        if (!rtl) {
          if (isSubmenu) {
            closeMenu(e);
          }
        } else if ((activeItem === null || activeItem === void 0 ? void 0 : activeItem.getAttribute('aria-haspopup')) === 'menu') {
          activeItem.click();
        }

        break;
      // Move focus to the first item

      case KEY_VALUES.HOME:
        e.preventDefault();
        e.stopPropagation();
        dispatch({
          type: MenuActionTypes.MoveFocus,
          to: MoveFocusTo.First
        });
        break;
      // Move focus to the last item

      case KEY_VALUES.END:
        e.preventDefault();
        e.stopPropagation();
        dispatch({
          type: MenuActionTypes.MoveFocus,
          to: MoveFocusTo.Last
        });
        break;
      // - When focus is on a menuitem that has a submenu, opens the submenu and places focus on its first item.
      // - Otherwise, activates the item and closes the menu.

      case KEY_VALUES.ENTER:
      case KEY_VALUES.SPACE:
        if (activeItem) {
          e.preventDefault();
          e.stopPropagation();
          activeItem.click();

          if (!activeItem.getAttribute('aria-haspopup')) {
            closeMenu(e);
          }
        }

        break;
      //  Close the menu that contains focus and return focus to the element or context,
      //  e.g., menu button or parent menuitem, from which the menu was opened.

      case KEY_VALUES.ESC:
        closeMenu(e);
        break;
    }
  }, [dispatch, activeItem, isSubmenu, rtl, closeMenu]); // Only used for clicks bubbling from child `menuitem`s.

  var handleMenuClick = useCallback(function (event) {
    var target = event.target; // Only handle clicks on `menuitem`s

    if (target.getAttribute('role') !== 'menuitem') return; // Ignore clicks on `menuitem`s that controls a submenu

    if (target.getAttribute('aria-haspopup') === 'menu') return; // Ignore disabled `menuitem`s

    if (target.getAttribute('aria-disabled') === 'true') return;
    closeMenu(event, !isSubmenu);
  }, [closeMenu, isSubmenu]); // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#wai-aria-roles-states-and-properties-13

  var menuAriaAttributes = {
    role: 'menu',
    'aria-labelledby': buttonId,
    'aria-activedescendant': activeItem === null || activeItem === void 0 ? void 0 : activeItem.id
  };
  var menuEventHandlers = {
    onClick: handleMenuClick,
    onKeyDown: handleMenuKeydown
  };

  var menuProps = _extends({
    id: menuId
  }, menuAriaAttributes, menuEventHandlers, {
    tabIndex: 0
  });

  var customMenuPopup = renderMenuPopup === null || renderMenuPopup === void 0 ? void 0 : renderMenuPopup(_extends({}, menuProps, {
    open: open
  }), menuElementRef);
  var menuElement = customMenuPopup !== null && customMenuPopup !== void 0 ? customMenuPopup : /*#__PURE__*/React.createElement("ul", _extends({
    ref: menuElementRef
  }, menuProps, {
    hidden: !open
  }), children);
  var handleMouseEnter = useCallback(function (e) {
    if (!disabled) {
      openMenu(e);
    }
  }, [disabled, openMenu]);
  var handleMouseLeave = useCallback(function (e) {
    if (!disabled) {
      closeMenu(e);
    }
  }, [disabled, closeMenu]);
  var rootElementRef = useRef();
  var handleContainerBlur = useCallback(function (event) {
    if (isFocusLeaving(event)) {
      closeMenu(event, false);
    }
  }, [closeMenu]);
  var rootEventHandlers = {
    onBlur: handleContainerBlur
  };

  if (openMenuOn !== null && openMenuOn !== void 0 && openMenuOn.includes('mouseover')) {
    rootEventHandlers.onMouseEnter = handleMouseEnter;
    rootEventHandlers.onMouseLeave = handleMouseLeave;
  }

  var rootProps = _extends({}, rootEventHandlers, {
    children: /*#__PURE__*/React.createElement(React.Fragment, null, buttonElement, /*#__PURE__*/React.createElement(MenuContext.Provider, {
      value: menu
    }, menuElement)),
    // render props
    open: open
  });

  if (isSubmenu) {
    rootProps.role = 'none presentation';
  }

  return children(rootProps, rootElementRef);
}

Menu.displayName = 'Menu';
Menu.propTypes = {
  children: PropTypes.func.isRequired
};
export default Menu;