"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var drawer_1 = require("@react-navigation/drawer");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Home_1 = require("../../screens/feed/Repairman_Finder/Home");
var Shop_1 = require("../../screens/feed/Repairman_Finder/Shop");
var Notification_1 = require("../../screens/feed/Repairman_Finder/Notification");
var Profile_1 = require("../../screens/feed/Repairman_Finder/Profile");
var BottomTab_1 = require("../../screens/bottomTab/BottomTab");
var URL_IMAGE = "../../assets/BottomTab";
var DrawerNavigator = function () {
    var navigation = native_1.useNavigation();
    var Drawer = drawer_1.createDrawerNavigator();
    var headerOptions = {
        headerStyle: {
            backgroundColor: "white"
        }
    };
    var optionsScreen = function (_a) {
        var drawerIcon = _a.drawerIcon, _b = _a.size, size = _b === void 0 ? 24 : _b;
        return (__assign({ drawerIcon: function (_a) {
                var color = _a.color;
                return (react_1["default"].createElement(react_native_1.Image, { source: drawerIcon, style: { width: size, height: size, tintColor: color } }));
            } }, headerOptions));
    };
    return (react_1["default"].createElement(react_native_gesture_handler_1.GestureHandlerRootView, { style: styles.DrawerContainer },
        react_1["default"].createElement(Drawer.Navigator, { initialRouteName: 'Main' },
            react_1["default"].createElement(Drawer.Screen, { name: "Main", component: BottomTab_1["default"], options: headerOptions }),
            react_1["default"].createElement(Drawer.Screen, { name: "Home", component: Home_1["default"], options: optionsScreen({
                    drawerIcon: require(URL_IMAGE + "/iconhome.png"),
                    backgroundColor: "white"
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Shop", component: Shop_1["default"], options: optionsScreen({
                    drawerIcon: require(URL_IMAGE + "/iconshop.png"),
                    backgroundColor: "white"
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Notification", component: Notification_1["default"], options: optionsScreen({
                    drawerIcon: require(URL_IMAGE + "/iconnotification.png"),
                    backgroundColor: "white"
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Profile", component: Profile_1["default"], options: optionsScreen({
                    drawerIcon: require(URL_IMAGE + "/iconprofile.png"),
                    backgroundColor: "white"
                }) }))));
};
exports["default"] = DrawerNavigator;
var styles = react_native_1.StyleSheet.create({
    DrawerContainer: {
        flex: 1
    }
});
