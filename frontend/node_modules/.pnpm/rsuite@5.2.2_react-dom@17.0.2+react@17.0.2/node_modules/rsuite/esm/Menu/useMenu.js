import _extends from "@babel/runtime/helpers/esm/extends";
// Inspired by tailwindlabs/headlessui
import { useReducer } from 'react';
import { MenuActionTypes, MoveFocusTo } from './MenuContext';
export var initialMenuState = {
  role: 'menu',
  open: false,
  items: [],
  activeItemIndex: null
};
export function menuReducer(state, action) {
  var items = state.items,
      activeItemIndex = state.activeItemIndex;

  switch (action.type) {
    case MenuActionTypes.RegisterItem:
      return _extends({}, state, {
        items: [].concat(items, [{
          element: action.element,
          props: action.props
        }])
      });

    case MenuActionTypes.UnregisterItem:
      return _extends({}, state, {
        items: items.filter(function (item) {
          return item.element.id !== action.id;
        })
      });

    case MenuActionTypes.OpenMenu:
      return _extends({}, state, {
        open: true
      });

    case MenuActionTypes.CloseMenu:
      return _extends({}, state, {
        open: false
      });

    case MenuActionTypes.MoveFocus:
      var nextActiveItemIndex = activeItemIndex;

      switch (action.to) {
        case MoveFocusTo.Next:
          for (var i = nextActiveItemIndex === null ? 0 : activeItemIndex + 1; i < items.length; i++) {
            if (!items[i].props.disabled) {
              nextActiveItemIndex = i;
              break;
            }
          }

          break;

        case MoveFocusTo.Prev:
          for (var _i = nextActiveItemIndex === null ? items.length - 1 : activeItemIndex - 1; _i >= 0; _i--) {
            if (!items[_i].props.disabled) {
              nextActiveItemIndex = _i;
              break;
            }
          }

          break;

        case MoveFocusTo.First:
          for (var _i2 = 0; _i2 < items.length; _i2++) {
            if (!items[_i2].props.disabled) {
              nextActiveItemIndex = _i2;
              break;
            }
          }

          break;

        case MoveFocusTo.Last:
          for (var _i3 = items.length - 1; _i3 >= 0; _i3--) {
            if (!items[_i3].props.disabled) {
              nextActiveItemIndex = _i3;
              break;
            }
          }

          break;

        case MoveFocusTo.Specific:
          for (var _i4 = 0; _i4 < items.length; _i4++) {
            if (items[_i4].element.id === action.id && !items[_i4].props.disabled) {
              nextActiveItemIndex = _i4;
              break;
            }
          }

          break;

        case MoveFocusTo.None:
          nextActiveItemIndex = null;
          break;
      }

      return _extends({}, state, {
        activeItemIndex: nextActiveItemIndex
      });

    default:
      return state;
  }
}
export default function useMenu(initialState) {
  // `menuitem`s
  var _useReducer = useReducer(menuReducer, _extends({}, initialMenuState, initialState)),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return [state, dispatch];
}