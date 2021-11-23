"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _CheckboxGroup = require("../CheckboxGroup");

var _templateObject, _templateObject2, _templateObject3;

var Checkbox = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useContext = (0, _react.useContext)(_CheckboxGroup.CheckboxGroupContext),
      inlineContext = _useContext.inline,
      nameContext = _useContext.name,
      disabledContext = _useContext.disabled,
      readOnlyContext = _useContext.readOnly,
      plaintextContext = _useContext.plaintext,
      groupValue = _useContext.value,
      controlled = _useContext.controlled,
      onGroupChange = _useContext.onChange;

  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      controlledChecked = props.checked,
      className = props.className,
      children = props.children,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'checkbox' : _props$classPrefix,
      _props$checkable = props.checkable,
      checkable = _props$checkable === void 0 ? true : _props$checkable,
      defaultChecked = props.defaultChecked,
      title = props.title,
      inputRef = props.inputRef,
      inputProps = props.inputProps,
      indeterminate = props.indeterminate,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? disabledContext : _props$disabled,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? readOnlyContext : _props$readOnly,
      _props$plaintext = props.plaintext,
      plaintext = _props$plaintext === void 0 ? plaintextContext : _props$plaintext,
      _props$inline = props.inline,
      inline = _props$inline === void 0 ? inlineContext : _props$inline,
      _props$name = props.name,
      name = _props$name === void 0 ? nameContext : _props$name,
      value = props.value,
      onClick = props.onClick,
      onCheckboxClick = props.onCheckboxClick,
      onChange = props.onChange,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "checked", "className", "children", "classPrefix", "checkable", "defaultChecked", "title", "inputRef", "inputProps", "indeterminate", "tabIndex", "disabled", "readOnly", "plaintext", "inline", "name", "value", "onClick", "onCheckboxClick", "onChange"]);
  var isChecked = (0, _react.useCallback)(function () {
    if (typeof groupValue !== 'undefined' && typeof value !== 'undefined') {
      return groupValue.some(function (i) {
        return i === value;
      });
    }

    return controlledChecked;
  }, [controlledChecked, groupValue, value]);

  var _useControlled = (0, _utils.useControlled)(isChecked(), defaultChecked),
      checked = _useControlled[0],
      setChecked = _useControlled[1];

  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix,
      withClassPrefix = _useClassNames.withClassPrefix;

  var classes = merge(className, withClassPrefix({
    inline: inline,
    indeterminate: indeterminate,
    disabled: disabled,
    checked: checked
  }));

  var _partitionHTMLProps = (0, _utils.partitionHTMLProps)(rest),
      htmlInputProps = _partitionHTMLProps[0],
      restProps = _partitionHTMLProps[1];

  if (typeof controlled !== 'undefined') {
    // In uncontrolled situations, use defaultChecked instead of checked
    htmlInputProps[controlled ? 'checked' : 'defaultChecked'] = checked;
  }

  var handleChange = (0, _react.useCallback)(function (event) {
    var nextChecked = !checked;

    if (disabled || readOnly) {
      return;
    }

    setChecked(nextChecked);
    onChange === null || onChange === void 0 ? void 0 : onChange(value, nextChecked, event);
    onGroupChange === null || onGroupChange === void 0 ? void 0 : onGroupChange(value, nextChecked, event);
  }, [checked, disabled, readOnly, setChecked, onChange, value, onGroupChange]);

  if (plaintext) {
    return checked ? /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
      ref: ref,
      className: classes
    }), children) : null;
  }

  var input = /*#__PURE__*/_react.default.createElement("span", {
    className: prefix(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["wrapper"]))),
    onClick: onCheckboxClick,
    "aria-disabled": disabled
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, htmlInputProps, inputProps, {
    name: name,
    value: value,
    type: "checkbox",
    ref: inputRef,
    tabIndex: tabIndex,
    readOnly: readOnly,
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-checked": indeterminate ? 'mixed' : checked,
    onClick: function onClick(event) {
      return event.stopPropagation();
    },
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: prefix(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["inner"]))),
    "aria-hidden": true,
    role: "presentation"
  }));

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
    ref: ref,
    onClick: onClick,
    className: classes
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: prefix(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["checker"])))
  }, /*#__PURE__*/_react.default.createElement("label", {
    title: title
  }, checkable ? input : null, children)));
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  as: _propTypes.default.elementType,
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  inline: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  indeterminate: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  inputProps: _propTypes.default.any,
  inputRef: _utils.TypeChecker.refType,
  value: _propTypes.default.any,
  children: _propTypes.default.node,
  classPrefix: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  checkable: _propTypes.default.bool,
  onCheckboxClick: _propTypes.default.func
};
var _default = Checkbox;
exports.default = _default;