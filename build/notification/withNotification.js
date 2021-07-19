"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Notifications = _interopRequireDefault(require("./components/Notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Notifications["default"], null), /*#__PURE__*/_react["default"].createElement(WrappedComponent, props));
  };
};

exports["default"] = _default;