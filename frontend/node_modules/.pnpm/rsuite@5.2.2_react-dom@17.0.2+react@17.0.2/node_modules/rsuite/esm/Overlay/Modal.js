import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useRef, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import canUseDOM from 'dom-lib/canUseDOM';
import contains from 'dom-lib/contains';
import getContainer from 'dom-lib/getContainer';
import on from 'dom-lib/on';
import ModalManager from './ModalManager';
import Fade from '../Animation/Fade';
import { animationPropTypes } from '../Animation/utils';
import { mergeRefs, getDOMNode, usePortal, createChainedFunction, useWillUnmount } from '../utils';
var manager;

function getManager() {
  if (!manager) manager = new ModalManager();
  return manager;
}

var useModalManager = function useModalManager() {
  var modalManager = getManager();
  var modal = useRef({
    dialog: null,
    backdrop: null
  });
  return {
    add: function add(containerElement, containerClassName) {
      return modalManager.add(modal.current, containerElement, containerClassName);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: useCallback(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: useCallback(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  };
};

var Modal = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      children = props.children,
      Transition = props.transition,
      dialogTransitionTimeout = props.dialogTransitionTimeout,
      style = props.style,
      className = props.className,
      container = props.container,
      animationProps = props.animationProps,
      containerClassName = props.containerClassName,
      _props$keyboard = props.keyboard,
      keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
      _props$enforceFocus = props.enforceFocus,
      enforceFocus = _props$enforceFocus === void 0 ? true : _props$enforceFocus,
      _props$backdrop = props.backdrop,
      backdrop = _props$backdrop === void 0 ? true : _props$backdrop,
      backdropTransitionTimeout = props.backdropTransitionTimeout,
      backdropStyle = props.backdropStyle,
      backdropClassName = props.backdropClassName,
      open = props.open,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      onBackdropClick = props.onBackdropClick,
      onEscapeKeyUp = props.onEscapeKeyUp,
      onExit = props.onExit,
      onExiting = props.onExiting,
      onExited = props.onExited,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered,
      onClose = props.onClose,
      onOpen = props.onOpen,
      rest = _objectWithoutPropertiesLoose(props, ["as", "children", "transition", "dialogTransitionTimeout", "style", "className", "container", "animationProps", "containerClassName", "keyboard", "enforceFocus", "backdrop", "backdropTransitionTimeout", "backdropStyle", "backdropClassName", "open", "autoFocus", "onBackdropClick", "onEscapeKeyUp", "onExit", "onExiting", "onExited", "onEnter", "onEntering", "onEntered", "onClose", "onOpen"]);

  var _useState = useState(!open),
      exited = _useState[0],
      setExited = _useState[1];

  var _usePortal = usePortal({
    container: container
  }),
      Portal = _usePortal.Portal;

  var modal = useModalManager();

  if (open) {
    if (exited) setExited(false);
  } else if (!Transition && !exited) {
    setExited(true);
  }

  var mountModal = open || Transition && !exited;
  var rootRef = useRef();
  var lastFocus = useRef();
  var handleDocumentKeyUp = useCallback(function (event) {
    if (keyboard && event.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyUp === null || onEscapeKeyUp === void 0 ? void 0 : onEscapeKeyUp(event);
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }
  }, [keyboard, modal, onEscapeKeyUp, onClose]);
  var checkForFocus = useCallback(function () {
    if (canUseDOM) {
      lastFocus.current = document.activeElement;
    }
  }, []);
  var restoreLastFocus = useCallback(function () {
    if (lastFocus.current) {
      var _lastFocus$current$fo, _lastFocus$current;

      (_lastFocus$current$fo = (_lastFocus$current = lastFocus.current).focus) === null || _lastFocus$current$fo === void 0 ? void 0 : _lastFocus$current$fo.call(_lastFocus$current);
      lastFocus.current = null;
    }
  }, []);
  var getDialogElement = useCallback(function () {
    return getDOMNode(rootRef.current);
  }, []);
  var handleEnforceFocus = useCallback(function () {
    if (!enforceFocus || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = document.activeElement;
    var dialog = getDialogElement();

    if (dialog && dialog !== currentActiveElement && !contains(dialog, currentActiveElement)) {
      dialog.focus();
    }
  }, [enforceFocus, getDialogElement, modal]);
  var handleBackdropClick = useCallback(function (event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    onBackdropClick === null || onBackdropClick === void 0 ? void 0 : onBackdropClick(event);

    if (backdrop === true) {
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }
  }, [backdrop, onBackdropClick, onClose]);
  var documentKeyupListener = useRef();
  var docusinListener = useRef();
  var handleOpen = useCallback(function () {
    var dialog = getDialogElement();
    var containerElement = getContainer(container, document.body);
    modal.add(containerElement, containerClassName);
    documentKeyupListener.current = on(document, 'keydown', handleDocumentKeyUp);
    docusinListener.current = on(document, 'focus', handleEnforceFocus, true);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    checkForFocus();

    if (autoFocus) {
      dialog === null || dialog === void 0 ? void 0 : dialog.focus();
    }
  }, [autoFocus, checkForFocus, container, containerClassName, getDialogElement, handleDocumentKeyUp, handleEnforceFocus, modal, onOpen]);
  var handleClose = useCallback(function () {
    var _documentKeyupListene, _docusinListener$curr;

    modal.remove();
    (_documentKeyupListene = documentKeyupListener.current) === null || _documentKeyupListene === void 0 ? void 0 : _documentKeyupListene.off();
    (_docusinListener$curr = docusinListener.current) === null || _docusinListener$curr === void 0 ? void 0 : _docusinListener$curr.off();
    restoreLastFocus();
  }, [modal, restoreLastFocus]);
  useEffect(function () {
    if (!open) {
      return;
    }

    handleOpen();
  }, [open, handleOpen]);
  useEffect(function () {
    if (!exited) {
      return;
    }

    handleClose();
  }, [exited, handleClose]);
  useWillUnmount(function () {
    handleClose();
  });
  var handleExited = useCallback(function () {
    setExited(true);
  }, []);

  if (!mountModal) {
    return null;
  }

  var renderBackdrop = function renderBackdrop() {
    var backdropPorps = {
      style: backdropStyle,
      onClick: handleBackdropClick
    };

    if (Transition) {
      return /*#__PURE__*/React.createElement(Fade, {
        transitionAppear: true,
        in: open,
        timeout: backdropTransitionTimeout
      }, function (fadeProps, ref) {
        var className = fadeProps.className,
            rest = _objectWithoutPropertiesLoose(fadeProps, ["className"]);

        return /*#__PURE__*/React.createElement("div", _extends({
          "aria-hidden": true
        }, rest, backdropPorps, {
          ref: mergeRefs(modal.setBackdropRef, ref),
          className: classNames(backdropClassName, className)
        }));
      });
    }

    return /*#__PURE__*/React.createElement("div", _extends({
      "aria-hidden": true
    }, backdropPorps, {
      className: backdropClassName
    }));
  };

  var dialogElement = Transition ? /*#__PURE__*/React.createElement(Transition, _extends({}, animationProps, {
    transitionAppear: true,
    unmountOnExit: true,
    in: open,
    timeout: dialogTransitionTimeout,
    onExit: onExit,
    onExiting: onExiting,
    onExited: createChainedFunction(handleExited, onExited),
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered
  }), children) : children;
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    ref: mergeRefs(modal.setDialogRef, ref),
    style: style,
    className: className,
    tabIndex: -1
  }), backdrop && renderBackdrop(), dialogElement));
});
export var modalPropTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  backdropClassName: PropTypes.string,
  style: PropTypes.object,
  backdropStyle: PropTypes.object,
  open: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  keyboard: PropTypes.bool,
  autoFocus: PropTypes.bool,
  enforceFocus: PropTypes.bool,
  animationProps: PropTypes.object,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};
Modal.displayName = 'OverlayModal';
Modal.propTypes = _extends({}, animationPropTypes, modalPropTypes, {
  children: PropTypes.func,
  container: PropTypes.any,
  containerClassName: PropTypes.string,
  dialogTransitionTimeout: PropTypes.number,
  backdropTransitionTimeout: PropTypes.number,
  transition: PropTypes.any,
  onEscapeKeyUp: PropTypes.func,
  onBackdropClick: PropTypes.func
});
export default Modal;