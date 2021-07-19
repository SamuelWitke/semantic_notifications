"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showNotification = showNotification;
exports.showSuccess = showSuccess;
exports.showInfo = showInfo;
exports.showWarning = showWarning;
exports.showError = showError;
exports.dismissNotification = dismissNotification;
exports.clearNotifications = clearNotifications;

var _actionTypes = require("./actionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultDismissTime = 2500; // 2.5 seconds

/**
 * Publish a notification. if `dismissAfter` is set, the notification will be
 * auto dismissed after the given period.
 * @param {Object} notif - Object containing
 * @param {Object} notif.kind - Kinda of notification (success, warning, failure)
 * @param {Object} notif.message - Notification message
 * @param {Object} notif.dismissAfter - Time after which to dismiss notification (default time set in constants)
 */

function showNotification(notif) {
  var payload = Object.assign({}, notif); // Set default id to now if none provided

  if (!payload.id) {
    payload.id = Date.now();
  }

  return function (dispatch) {
    dispatch({
      type: _actionTypes.NOTIFICATION_SHOW,
      payload: payload
    });
    setTimeout(function () {
      dispatch({
        type: _actionTypes.NOTIFICATION_DISMISS,
        payload: payload.id
      });
    }, payload.dismissAfter || defaultDismissTime);
  };
}
/**
 * Show message for a success
 * @param {String} message - Message to show
 */


function showSuccess(params) {
  return showNotification(_objectSpread({
    type: 'success'
  }, params));
}
/**
 * Show message for a info
 * @param {String} message - Message to show
 */


function showInfo(params) {
  return showNotification(_objectSpread({
    type: 'info'
  }, params));
}
/**
 * Show message for a warrning
 * @param {String} message - Message to show
 */


function showWarning(params) {
  return showNotification(_objectSpread({
    type: 'warning'
  }, params));
}
/**
 * Show message for a error
 * @param {String} message - Message to show
 */


function showError(params) {
  return showNotification(_objectSpread({
    type: 'error'
  }, params));
}
/**
 * Dismiss a notification by the given id.
 * @param {Number} id - notification id
 */


function dismissNotification(payload) {
  return {
    type: _actionTypes.NOTIFICATION_DISMISS,
    payload: payload
  };
}
/**
 * Clear all notifications
 */


function clearNotifications() {
  return {
    type: _actionTypes.NOTIFICATION_CLEAR
  };
}