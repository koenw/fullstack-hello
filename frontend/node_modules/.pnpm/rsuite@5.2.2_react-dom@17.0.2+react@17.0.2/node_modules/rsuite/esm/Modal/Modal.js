import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _templateObject, _templateObject2;

import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import on from 'dom-lib/on';
import getTransitionEnd from 'dom-lib/getTransitionEnd';
import BaseModal, { modalPropTypes } from '../Overlay/Modal';
import Bounce from '../Animation/Bounce';
import { useClassNames, mergeRefs, SIZE } from '../utils';
import ModalDialog, { modalDialogPropTypes } from './ModalDialog';
import { ModalContext } from './ModalContext';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalFooter from './ModalFooter';
import { useBodyStyles } from './utils';
import useUniqueId from '../utils/useUniqueId';
var Modal = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'modal' : _props$classPrefix,
      dialogClassName = props.dialogClassName,
      backdropClassName = props.backdropClassName,
      _props$backdrop = props.backdrop,
      backdrop = _props$backdrop === void 0 ? true : _props$backdrop,
      dialogStyle = props.dialogStyle,
      _props$animation = props.animation,
      animation = _props$animation === void 0 ? Bounce : _props$animation,
      open = props.open,
      _props$size = props.size,
      size = _props$size === void 0 ? 'sm' : _props$size,
      full = props.full,
      _props$dialogAs = props.dialogAs,
      Dialog = _props$dialogAs === void 0 ? ModalDialog : _props$dialogAs,
      animationProps = props.animationProps,
      _props$animationTimeo = props.animationTimeout,
      animationTimeout = _props$animationTimeo === void 0 ? 300 : _props$animationTimeo,
      _props$overflow = props.overflow,
      overflow = _props$overflow === void 0 ? true : _props$overflow,
      drawer = props.drawer,
      onClose = props.onClose,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExited = props.onExited,
      _props$role = props.role,
      role = _props$role === void 0 ? 'dialog' : _props$role,
      idProp = props.id,
      ariaLabelledby = props['aria-labelledby'],
      ariaDescribedby = props['aria-describedby'],
      rest = _objectWithoutPropertiesLoose(props, ["className", "children", "classPrefix", "dialogClassName", "backdropClassName", "backdrop", "dialogStyle", "animation", "open", "size", "full", "dialogAs", "animationProps", "animationTimeout", "overflow", "drawer", "onClose", "onEntered", "onEntering", "onExited", "role", "id", "aria-labelledby", "aria-describedby"]);

  var inClass = {
    in: open && !animation
  };

  var _useClassNames = useClassNames(classPrefix),
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix;

  var classes = merge(className, prefix(size, {
    full: full
  }));
  var dialogRef = useRef();
  var transitionEndListener = useRef(); // The style of the Modal body will be updated with the size of the window or container.

  var _useBodyStyles = useBodyStyles(dialogRef, {
    overflow: overflow,
    drawer: drawer,
    prefix: prefix
  }),
      bodyStyles = _useBodyStyles[0],
      onChangeBodyStyles = _useBodyStyles[1],
      onDestroyEvents = _useBodyStyles[2];

  var dialogId = useUniqueId('dialog-', idProp);
  var modalContextValue = useMemo(function () {
    return {
      dialogId: dialogId,
      onModalClose: onClose,
      getBodyStyles: function getBodyStyles() {
        return bodyStyles;
      },
      isDrawer: drawer
    };
  }, [dialogId, onClose, bodyStyles, drawer]);

  var _useState = useState(false),
      shake = _useState[0],
      setShake = _useState[1];

  var handleBackdropClick = useCallback(function () {
    // When the value of `backdrop` is `static`, a jitter animation will be added to the dialog when clicked.
    if (backdrop === 'static') {
      setShake(true);
      transitionEndListener.current = on(dialogRef.current, getTransitionEnd(), function () {
        setShake(false);
      });
    }
  }, [backdrop]);
  var handleExited = useCallback(function (node) {
    var _transitionEndListene;

    onExited === null || onExited === void 0 ? void 0 : onExited(node);
    onDestroyEvents();
    (_transitionEndListene = transitionEndListener.current) === null || _transitionEndListene === void 0 ? void 0 : _transitionEndListene.off();
  }, [onDestroyEvents, onExited]);
  var handleEntered = useCallback(function (node) {
    onEntered === null || onEntered === void 0 ? void 0 : onEntered(node);
    onChangeBodyStyles();
  }, [onChangeBodyStyles, onEntered]);
  var handleEntering = useCallback(function (node) {
    onEntering === null || onEntering === void 0 ? void 0 : onEntering(node);
    onChangeBodyStyles(true);
  }, [onChangeBodyStyles, onEntering]);
  useEffect(function () {
    var _transitionEndListene2;

    (_transitionEndListene2 = transitionEndListener.current) === null || _transitionEndListene2 === void 0 ? void 0 : _transitionEndListene2.off();
  }, []);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: modalContextValue
  }, /*#__PURE__*/React.createElement(BaseModal, _extends({}, rest, {
    ref: ref,
    backdrop: backdrop,
    open: open,
    onClose: onClose,
    onBackdropClick: handleBackdropClick,
    className: prefix(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["wrapper"]))),
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExited: handleExited,
    backdropClassName: merge(prefix(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["backdrop"]))), backdropClassName, inClass),
    containerClassName: prefix({
      open: open,
      'has-backdrop': backdrop
    }),
    transition: animation ? animation : undefined,
    animationProps: animationProps,
    dialogTransitionTimeout: animationTimeout,
    backdropTransitionTimeout: 150
  }), function (transitionProps, transitionRef) {
    var transitionClassName = transitionProps.className,
        transitionRest = _objectWithoutPropertiesLoose(transitionProps, ["className"]);

    return /*#__PURE__*/React.createElement(Dialog, _extends({
      role: role,
      id: dialogId,
      "aria-labelledby": ariaLabelledby !== null && ariaLabelledby !== void 0 ? ariaLabelledby : dialogId + "-title",
      "aria-describedby": ariaDescribedby
    }, transitionRest, pick(rest, Object.keys(modalDialogPropTypes)), {
      ref: mergeRefs(dialogRef, transitionRef),
      classPrefix: classPrefix,
      className: merge(classes, transitionClassName, prefix({
        shake: shake
      })),
      dialogClassName: dialogClassName,
      dialogStyle: dialogStyle
    }), children);
  }));
});
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;
Modal.Dialog = ModalDialog;
Modal.displayName = 'Modal';
Modal.propTypes = _extends({}, modalPropTypes, {
  animation: PropTypes.any,
  animationTimeout: PropTypes.number,
  classPrefix: PropTypes.string,
  dialogClassName: PropTypes.string,
  size: PropTypes.oneOf(SIZE),
  dialogStyle: PropTypes.object,
  dialogAs: PropTypes.elementType,
  full: PropTypes.bool,
  overflow: PropTypes.bool,
  drawer: PropTypes.bool
});
export default Modal;