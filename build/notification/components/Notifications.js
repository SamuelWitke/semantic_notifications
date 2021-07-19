"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TRANSITION_DOWN_DURATION = exports.TRANSITION_DELAY = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _semanticUiReact = require("semantic-ui-react");

var _classnames = _interopRequireDefault(require("classnames"));

require("semantic-ui-css/semantic.min.css");

var actions = _interopRequireWildcard(require("../actions"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var icons = {
  info: 'announcement',
  success: 'checkmark',
  error: 'remove',
  warning: 'warning circle'
};
var TRANSITION_DELAY = 150;
exports.TRANSITION_DELAY = TRANSITION_DELAY;
var TRANSITION_DOWN_DURATION = 200;
exports.TRANSITION_DOWN_DURATION = TRANSITION_DOWN_DURATION;

var getTransitionStyles = function getTransitionStyles(offset, anchorOrigin) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, anchorOrigin.vertical, offset), _defineProperty(_ref, "WebKitTransition", "all ".concat(TRANSITION_DOWN_DURATION, "ms")), _defineProperty(_ref, "MozTransition", "all ".concat(TRANSITION_DOWN_DURATION, "ms")), _defineProperty(_ref, "msTransition", "all ".concat(TRANSITION_DOWN_DURATION, "ms")), _defineProperty(_ref, "OTransition", "all ".concat(TRANSITION_DOWN_DURATION, "ms")), _defineProperty(_ref, "transition", "all ".concat(TRANSITION_DOWN_DURATION, "ms")), _defineProperty(_ref, "transitionDelay", "".concat(TRANSITION_DELAY, "ms")), _ref;
};

function Notifications(_ref2) {
  var allIds = _ref2.allIds,
      byId = _ref2.byId,
      dismissNotification = _ref2.dismissNotification;

  // Only render if notifications exist
  if (!allIds || !Object.keys(allIds).length) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, allIds.map(function (id, i) {
    var _byId$id = byId[id],
        type = _byId$id.type,
        header = _byId$id.header,
        content = _byId$id.content;
    var computedIcon = icons[type];
    return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, _extends({
      key: id
    }, _defineProperty({}, type, true), {
      header: header,
      content: content,
      icon: computedIcon,
      floating: true
    }));
  }));
}

Notifications.propTypes = {
  allIds: _propTypes["default"].array.isRequired,
  byId: _propTypes["default"].object.isRequired,
  dismissNotification: _propTypes["default"].func.isRequired
};

var _default = (0, _reactRedux.connect)(function (_ref4) {
  var _ref4$notifications = _ref4.notifications,
      allIds = _ref4$notifications.allIds,
      byId = _ref4$notifications.byId;
  return {
    allIds: allIds,
    byId: byId
  };
}, actions)(Notifications);

exports["default"] = _default;