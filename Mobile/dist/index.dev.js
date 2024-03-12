"use strict";

var _reactNative = require("react-native");

var _App = _interopRequireDefault(require("./App"));

var _app = require("./app.json");

var _messaging = _interopRequireDefault(require("@react-native-firebase/messaging"));

var _reactNativeAlertNotification = require("react-native-alert-notification");

var _reactNativeSound = _interopRequireDefault(require("react-native-sound"));

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @format
 */
var sound = new _reactNativeSound["default"](require('../Mobile/src/assets/mussic/mussic_booking.mp3'), _reactNativeSound["default"].MAIN_BUNDLE, function (error) {
  if (error) {
    console.log('Error loading sound file:', error);
  }
});
(0, _messaging["default"])().setBackgroundMessageHandler(function _callee(message) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sound.play(function (success) {
            if (success) {
              console.log('Sound played successfully');
            } else {
              console.log('Error playing sound');
            }
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
(0, _messaging["default"])().onMessage(function _callee2(message) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _reactNativeAlertNotification.Toast.show({
            type: _reactNativeAlertNotification.ALERT_TYPE.INFO,
            title: "".concat(message.notification.title),
            textBody: "".concat(message.notification.body)
          });

          sound.play(function (success) {
            if (success) {
              console.log('Sound played successfully');
            } else {
              console.log('Error playing sound');
            }
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});

_reactNative.AppRegistry.registerComponent(_app.name, function () {
  return _App["default"];
});