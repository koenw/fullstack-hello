"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.modalPropTypes = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _canUseDOM = _interopRequireDefault(require("dom-lib/canUseDOM"));

var _contains = _interopRequireDefault(require("dom-lib/contains"));

var _getContainer = _interopRequireDefault(require("dom-lib/getContainer"));

var _on = _interopRequireDefault(require("dom-lib/on"));

var _ModalManager = _interopRequireDefault(require("./ModalManager"));

var _Fade = _interopRequireDefault(require("../Animation/Fade"));

var _utils = require("../Animation/utils");

var _utils2 = require("../utils");

var manager;

function getManager() {
  if (!manager) manager = new _ModalManager.default();
  return manager;
}

var useModalManager = function useModalManager() {
  var modalManager = getManager();
  var modal = (0, _react.useRef)({
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
    setDialogRef: (0, _react.useCallback)(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, _react.useCallback)(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  };
};

var Modal = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "children", "transition", "dialogTransitionTimeout", "style", "className", "container", "animationProps", "containerClassName", "keyboard", "enforceFocus", "backdrop", "backdropTransitionTimeout", "backdropStyle", "backdropClassName", "open", "autoFocus", "onBackdropClick", "onEscapeKeyUp", "onExit", "onExiting", "onExited", "onEnter", "onEntering", "onEntered", "onClose", "onOpen"]);

  var _useState = (0, _react.useState)(!open),
      exited = _useState[0],
      setExited = _useState[1];

  var _usePortal = (0, _utils2.usePortal)({
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
  var rootRef = (0, _react.useRef)();
  var lastFocus = (0, _react.useRef)();
  var handleDocumentKeyUp = (0, _react.useCallback)(function (event) {
    if (keyboard && event.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyUp === null || onEscapeKeyUp === void 0 ? void 0 : onEscapeKeyUp(event);
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }
  }, [keyboard, modal, onEscapeKeyUp, onClose]);
  var checkForFocus = (0, _react.useCallback)(function () {
    if (_canUseDOM.default) {
      lastFocus.current = document.activeElement;
    }
  }, []);
  var restoreLastFocus = (0, _react.useCallback)(function () {
    if (lastFocus.current) {
      var _lastFocus$current$fo, _lastFocus$current;

      (_lastFocus$current$fo = (_lastFocus$current = lastFocus.current).focus) === null || _lastFocus$current$fo === void 0 ? void 0 : _lastFocus$current$fo.call(_lastFocus$current);
      lastFocus.current = null;
    }
  }, []);
  var getDialogElement = (0, _react.useCallback)(function () {
    return (0, _utils2.getDOMNode)(rootRef.current);
  }, []);
  var handleEnforceFocus = (0, _react.useCallback)(function () {
    if (!enforceFocus || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = document.activeElement;
    var dialog = getDialogElement();

    if (dialog && dialog !== currentActiveElement && !(0, _contains.default)(dialog, currentActiveElement)) {
      dialog.focus();
    }
  }, [enforceFocus, getDialogElement, modal]);
  var handleBackdropClick = (0, _react.useCallback)(function (event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    onBackdropClick === null || onBackdropClick === void 0 ? void 0 : onBackdropClick(event);

    if (backdrop === true) {
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }
  }, [backdrop, onBackdropClick, onClose]);
  var documentKeyupListener = (0, _react.useRef)();
  var docusinListener = (0, _react.useRef)();
  var handleOpen = (0, _react.useCallback)(function () {
    var dialog = getDialogElement();
    var containerElement = (0, _getContainer.default)(container, document.body);
    modal.add(containerElement, containerClassName);
    documentKeyupListener.current = (0, _on.default)(document, 'keydown', handleDocumentKeyUp);
    docusinListener.current = (0, _on.default)(document, 'focus', handleEnforceFocus, true);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    checkForFocus();

    if (autoFocus) {
      dialog === null || dialog === void 0 ? void 0 : dialog.focus();
    }
  }, [autoFocus, checkForFocus, container, containerClassName, getDialogElement, handleDocumentKeyUp, handleEnforceFocus, modal, onOpen]);
  var handleClose = (0, _react.useCallback)(function () {
    var _documentKeyupListene, _docusinListener$curr;

    modal.remove();
    (_documentKeyupListene = documentKeyupListener.current) === null || _documentKeyupListene === void 0 ? void 0 : _documentKeyupListene.off();
    (_docusinListener$curr = docusinListener.current) === null || _docusinListener$curr === void 0 ? void 0 : _docusinListener$curr.off();
    restoreLastFocus();
  }, [modal, restoreLastFocus]);
  (0, _react.useEffect)(function () {
    if (!open) {
      return;
    }

    handleOpen();
  }, [open, handleOpen]);
  (0, _react.useEffect)(function () {
    if (!exited) {
      return;
    }

    handleClose();
  }, [exited, handleClose]);
  (0, _utils2.useWillUnmount)(function () {
    handleClose();
  });
  var handleExited = (0, _react.useCallback)(function () {
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
      return /*#__PURE__*/_react.default.createElement(_Fade.default, {
        transitionAppear: true,
        in: open,
        timeout: backdropTransitionTimeout
      }, function (fadeProps, ref) {
        var className = fadeProps.className,
            rest = (0, _objectWithoutPropertiesLoose2.default)(fadeProps, ["className"]);
        return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
          "aria-hidden": true
        }, rest, backdropPorps, {
          ref: (0, _utils2.mergeRefs)(modal.setBackdropRef, ref),
          className: (0, _classnames.default)(backdropClassName, className)
        }));
      });
    }

    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      "aria-hidden": true
    }, backdropPorps, {
      className: backdropClassName
    }));
  };

  var dialogElement = Transition ? /*#__PURE__*/_react.default.createElement(Transition, (0, _extends2.default)({}, animationProps, {
    transitionAppear: true,
    unmountOnExit: true,
    in: open,
    timeout: dialogTransitionTimeout,
    onExit: onExit,
    onExiting: onExiting,
    onExited: (0, _utils2.createChainedFunction)(handleExited, onExited),
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered
  }), children) : children;
  return /*#__PURE__*/_react.default.createElement(Portal, null, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: (0, _utils2.mergeRefs)(modal.setDialogRef, ref),
    style: style,
    className: className,
    tabIndex: -1
  }), backdrop && renderBackdrop(), dialogElement));
});

var modalPropTypes = {
  as: _propTypes.default.elementType,
  className: _propTypes.default.string,
  backdropClassName: _propTypes.default.string,
  style: _propTypes.default.object,
  backdropStyle: _propTypes.default.object,
  open: _propTypes.default.bool,
  backdrop: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  keyboard: _propTypes.default.bool,
  autoFocus: _propTypes.default.bool,
  enforceFocus: _propTypes.default.bool,
  animationProps: _propTypes.default.object,
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func
};
exports.modalPropTypes = modalPropTypes;
Modal.displayName = 'OverlayModal';
Modal.propTypes = (0, _extends2.default)({}, _utils.animationPropTypes, modalPropTypes, {
  children: _propTypes.default.func,
  container: _propTypes.default.any,
  containerClassName: _propTypes.default.string,
  dialogTransitionTimeout: _propTypes.default.number,
  backdropTransitionTimeout: _propTypes.default.number,
  transition: _propTypes.default.any,
  onEscapeKeyUp: _propTypes.default.func,
  onBackdropClick: _propTypes.default.func
});
var _default = Modal;
exports.default = _default;