import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useClassNames, useControlled, useCustom } from '../utils';
import Plaintext from '../Plaintext';
import Loader from '../Loader';
var Toggle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? 'span' : _props$as,
      disabled = props.disabled,
      readOnly = props.readOnly,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      plaintext = props.plaintext,
      className = props.className,
      checkedChildren = props.checkedChildren,
      unCheckedChildren = props.unCheckedChildren,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'toggle' : _props$classPrefix,
      checkedProp = props.checked,
      defaultChecked = props.defaultChecked,
      size = props.size,
      localeProp = props.locale,
      onChange = props.onChange,
      rest = _objectWithoutPropertiesLoose(props, ["as", "disabled", "readOnly", "loading", "plaintext", "className", "checkedChildren", "unCheckedChildren", "classPrefix", "checked", "defaultChecked", "size", "locale", "onChange"]);

  var inputRef = useRef();

  var _useControlled = useControlled(checkedProp, defaultChecked),
      checked = _useControlled[0],
      setChecked = _useControlled[1];

  var _useCustom = useCustom('Toggle', localeProp),
      locale = _useCustom.locale;

  var _useClassNames = useClassNames(classPrefix),
      merge = _useClassNames.merge,
      withClassPrefix = _useClassNames.withClassPrefix,
      prefix = _useClassNames.prefix;

  var classes = merge(className, withClassPrefix(size, {
    checked: checked,
    disabled: disabled,
    loading: loading
  }));
  var inner = checked ? checkedChildren : unCheckedChildren;
  var label = checked ? locale.on : locale.off;
  var handleInputChange = useCallback(function (e) {
    if (disabled || readOnly) {
      return;
    }

    var checked = e.target.checked;
    setChecked(checked);
    onChange === null || onChange === void 0 ? void 0 : onChange(checked, e);
  }, [disabled, readOnly, setChecked, onChange]);

  if (plaintext) {
    return /*#__PURE__*/React.createElement(Plaintext, null, inner || label);
  }

  return /*#__PURE__*/React.createElement("label", _extends({
    ref: ref,
    className: classes
  }, rest), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    readOnly: readOnly,
    onChange: handleInputChange,
    className: prefix('input'),
    role: "switch",
    "aria-checked": checked,
    "aria-disabled": disabled,
    "aria-label": typeof inner === 'string' ? inner : label,
    "aria-busy": loading || undefined
  }), /*#__PURE__*/React.createElement(Component, {
    className: prefix('presentation')
  }, /*#__PURE__*/React.createElement("span", {
    className: prefix('inner')
  }, inner), loading && /*#__PURE__*/React.createElement(Loader, {
    className: prefix('loader')
  })));
});
Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  plaintext: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checkedChildren: PropTypes.node,
  unCheckedChildren: PropTypes.node,
  loading: PropTypes.bool,
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  as: PropTypes.elementType,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  locale: PropTypes.shape({
    on: PropTypes.string,
    off: PropTypes.string
  })
};
export default Toggle;