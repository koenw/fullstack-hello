"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _ToastContainer = _interopRequireDefault(require("./ToastContainer"));

var defaultContainerId = 'default';
var containers = new Map();
/**
 * Create a container by Id.
 * @param containerId
 * @param options
 */

function createContainer(containerId, props) {
  var _ToastContainer$getIn = _ToastContainer.default.getInstance(props),
      container = _ToastContainer$getIn[0];

  containers.set(containerId || defaultContainerId, container);
  return container;
}
/**
 * Get the container by ID. Use default ID when ID is not available.
 * @param containerId
 */


function getContainer(containerId) {
  if (containers.size == 0) {
    return null;
  }

  return containers.get(containerId || defaultContainerId);
}

var toaster = function toaster(message) {
  return toaster.push(message);
};

toaster.push = function (message, options) {
  if (options === void 0) {
    options = {};
  }

  var container = getContainer(options.placement);

  if (!container) {
    container = createContainer(options.placement, options);
  }

  return container.current.push(message);
};

toaster.remove = function (key) {
  containers.forEach(function (c) {
    return c.current.remove(key);
  });
};

toaster.clear = function () {
  containers.forEach(function (c) {
    return c.current.clear();
  });
};

var _default = toaster;
exports.default = _default;