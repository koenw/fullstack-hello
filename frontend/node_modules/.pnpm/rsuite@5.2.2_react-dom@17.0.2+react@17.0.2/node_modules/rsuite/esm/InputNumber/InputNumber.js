import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import AngleUpIcon from '@rsuite/icons/legacy/AngleUp';
import AngleDownIcon from '@rsuite/icons/legacy/AngleDown';
import on from 'dom-lib/on';
import InputGroup from '../InputGroup/InputGroup';
import InputGroupAddon from '../InputGroup/InputGroupAddon';
import Input from '../Input';
import Button from '../Button';
import { partitionHTMLProps, createChainedFunction, useClassNames, useControlled } from '../utils';

/**
 * Check if the value is a number.
 * @param value
 */
var isNumber = function isNumber(value) {
  return /(^-?|^\+?|^\d?)\d*\.\d+$/.test(value + '');
};
/**
 * Get the length of the decimal.
 * @param value
 */


function getDecimalLength(value) {
  if (isNumber(value)) {
    return value.toString().split('.')[1].length;
  }

  return 0;
}
/**
 * Get the value after the decimal point.
 * @param values
 */


function decimals() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var lengths = values.map(getDecimalLength);
  return Math.max.apply(Math, lengths);
}
/**
 * Disable the upper limit of the number.
 * @param value
 * @param max
 */


function disableMaxValue(value, max) {
  if (!isNil(value)) {
    return +value >= max;
  }

  return false;
}
/**
 * Disable the lower limit of the number.
 * @param value
 * @param min
 */


function disableMinValue(value, min) {
  if (!isNil(value)) {
    return +value <= min;
  }

  return false;
}

var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? InputGroup : _props$as,
      className = props.className,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'input-number' : _props$classPrefix,
      disabled = props.disabled,
      readOnly = props.readOnly,
      plaintext = props.plaintext,
      valueProp = props.value,
      defaultValue = props.defaultValue,
      size = props.size,
      prefixElement = props.prefix,
      postfix = props.postfix,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$buttonAppearan = props.buttonAppearance,
      buttonAppearance = _props$buttonAppearan === void 0 ? 'subtle' : _props$buttonAppearan,
      _props$min = props.min,
      min = _props$min === void 0 ? -Infinity : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? Infinity : _props$max,
      _props$scrollable = props.scrollable,
      scrollable = _props$scrollable === void 0 ? true : _props$scrollable,
      onChange = props.onChange,
      onWheel = props.onWheel,
      restProps = _objectWithoutPropertiesLoose(props, ["as", "className", "classPrefix", "disabled", "readOnly", "plaintext", "value", "defaultValue", "size", "prefix", "postfix", "step", "buttonAppearance", "min", "max", "scrollable", "onChange", "onWheel"]);

  var _useControlled = useControlled(valueProp, defaultValue),
      value = _useControlled[0],
      setValue = _useControlled[1];

  var _useState = useState(disableMaxValue(value, max)),
      disabledUpButton = _useState[0],
      setDisabledUpButton = _useState[1];

  var _useState2 = useState(disableMinValue(value, min)),
      disabledDownButton = _useState2[0],
      setDisabledDownButton = _useState2[1];

  var _useClassNames = useClassNames(classPrefix),
      withClassPrefix = _useClassNames.withClassPrefix,
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix;

  var classes = merge(className, withClassPrefix());

  var _partitionHTMLProps = partitionHTMLProps(restProps),
      htmlInputProps = _partitionHTMLProps[0],
      rest = _partitionHTMLProps[1];

  var inputRef = useRef();
  var handleChangeValue = useCallback(function (currentValue, event) {
    if (currentValue !== value) {
      // Disable the up button when the value is greater than the maximum value.
      setDisabledUpButton(disableMaxValue(currentValue, max)); // Disable the down button when the value is greater than the minimum value.

      setDisabledDownButton(disableMinValue(currentValue, min));
      setValue(currentValue);
      onChange === null || onChange === void 0 ? void 0 : onChange(currentValue, event);
    }
  }, [max, min, onChange, setValue, value]);
  var getSafeValue = useCallback(function (value) {
    if (!Number.isNaN(value)) {
      if (+value > max) {
        value = max;
      }

      if (+value < min) {
        value = min;
      }
    } else {
      value = '';
    }

    return value.toString();
  }, [max, min]);
  var handlePlus = useCallback(function (event) {
    var val = +(value || 0);
    var bit = decimals(val, step);
    handleChangeValue(getSafeValue((val + step).toFixed(bit)), event);
  }, [getSafeValue, handleChangeValue, step, value]);
  var handleMinus = useCallback(function (event) {
    var val = +(value || 0);
    var bit = decimals(val, step);
    handleChangeValue(getSafeValue((val - step).toFixed(bit)), event);
  }, [getSafeValue, handleChangeValue, step, value]);
  var handleWheel = useCallback(function (event) {
    if (!disabled && !readOnly && event.target === document.activeElement) {
      event.preventDefault();
      var delta = event['wheelDelta'] || -event.deltaY || -(event === null || event === void 0 ? void 0 : event.detail);

      if (delta > 0) {
        handleMinus(event);
      }

      if (delta < 0) {
        handlePlus(event);
      }
    }

    onWheel === null || onWheel === void 0 ? void 0 : onWheel(event);
  }, [disabled, handleMinus, handlePlus, onWheel, readOnly]);
  var handleChange = useCallback(function (value, event) {
    if (!/^-?(?:\d+)?(\.)?\d*$/.test(value) && value !== '') {
      return;
    }

    handleChangeValue(value, event);
  }, [handleChangeValue]);
  var handleBlur = useCallback(function (event) {
    var _event$target;

    var targetValue = Number.parseFloat((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value);
    handleChangeValue(getSafeValue(targetValue), event);
  }, [getSafeValue, handleChangeValue]);
  useEffect(function () {
    var wheelListener;

    if (inputRef.current && scrollable) {
      wheelListener = on(inputRef.current, 'wheel', handleWheel, {
        passive: false
      });
    }

    return function () {
      var _wheelListener;

      (_wheelListener = wheelListener) === null || _wheelListener === void 0 ? void 0 : _wheelListener.off();
    };
  }, [handleWheel, scrollable]);
  var input = /*#__PURE__*/React.createElement(Input, _extends({}, htmlInputProps, {
    type: "text",
    autoComplete: "off",
    step: step,
    inputRef: inputRef,
    onChange: handleChange,
    onBlur: createChainedFunction(handleBlur, htmlInputProps === null || htmlInputProps === void 0 ? void 0 : htmlInputProps.onBlur),
    value: isNil(value) ? '' : "" + value,
    disabled: disabled,
    readOnly: readOnly,
    plaintext: plaintext,
    ref: plaintext ? ref : undefined
  }));

  if (plaintext) {
    return input;
  }

  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    ref: ref,
    className: classes,
    disabled: disabled,
    size: size
  }), prefixElement && /*#__PURE__*/React.createElement(InputGroupAddon, null, prefixElement), input, /*#__PURE__*/React.createElement("span", {
    className: prefix('btn-group-vertical')
  }, /*#__PURE__*/React.createElement(Button, {
    appearance: buttonAppearance,
    className: prefix('touchspin-up'),
    onClick: handlePlus,
    disabled: disabledUpButton || disabled || readOnly
  }, /*#__PURE__*/React.createElement(AngleUpIcon, null)), /*#__PURE__*/React.createElement(Button, {
    appearance: buttonAppearance,
    className: prefix('touchspin-down'),
    onClick: handleMinus,
    disabled: disabledDownButton || disabled || readOnly
  }, /*#__PURE__*/React.createElement(AngleDownIcon, null))), postfix && /*#__PURE__*/React.createElement(InputGroupAddon, null, postfix));
});
InputNumber.displayName = 'InputNumber';
InputNumber.propTypes = {
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  prefix: PropTypes.node,
  postfix: PropTypes.node,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  plaintext: PropTypes.bool,
  scrollable: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  buttonAppearance: PropTypes.oneOf(['default', 'primary', 'link', 'subtle', 'ghost']),
  onWheel: PropTypes.func,
  onChange: PropTypes.func
};
export default InputNumber;