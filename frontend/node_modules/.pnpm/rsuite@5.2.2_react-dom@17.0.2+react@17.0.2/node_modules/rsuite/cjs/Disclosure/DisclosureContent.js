"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _DisclosureContext = _interopRequireDefault(require("./DisclosureContext"));

function DisclosureContent(props) {
  var children = props.children;
  var elementRef = (0, _react.useRef)();

  var _useContext = (0, _react.useContext)(_DisclosureContext.default),
      open = _useContext[0].open;

  return children({
    open: open
  }, elementRef);
}

DisclosureContent.displayName = 'Disclosure.Content';
var _default = DisclosureContent;
exports.default = _default;