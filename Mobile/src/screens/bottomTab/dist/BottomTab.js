"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Home_1 = require("../feed/Repairman_Finder/Home");
var Shop_1 = require("../feed/Repairman_Finder/Shop");
var Notification_1 = require("../feed/Repairman_Finder/Notification");
var Scan_1 = require("../feed/Repairman_Finder/Scan");
var Profile_1 = require("../feed/Repairman_Finder/Profile");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var URL_IMAGE = '../../assets/BottomTab';
var BottomTab = function () {
    return (react_1["default"].createElement(Tab.Navigator, { initialRouteName: "Home", screenOptions: function (_a) {
            var route = _a.route;
            return ({
                tabBarIcon: function (_a) {
                    var focused = _a.focused, size = _a.size;
                    var rn = route.name;
                    var imageSource;
                    if (rn === 'Home') {
                        imageSource = require(URL_IMAGE + "/iconhome.png");
                    }
                    else if (rn === 'Shop') {
                        imageSource = require(URL_IMAGE + "/iconshop.png");
                    }
                    else if (rn === 'Scan') {
                        imageSource = require(URL_IMAGE + "/scans.png");
                    }
                    else if (rn === 'Notification') {
                        imageSource = require(URL_IMAGE + "/iconnotification.png");
                    }
                    else if (rn === 'Profile') {
                        imageSource = require(URL_IMAGE + "/iconprofile.png");
                    }
                    return (react_1["default"].createElement(react_native_1.View, { style: focused ? styles.focusedStyle : null },
                        react_1["default"].createElement(react_native_1.Image, { source: imageSource, style: [
                                {
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#FCA234' : '#394C6D'
                                },
                            ] })));
                },
                tabBarLabel: function () {
                    return null;
                },
                tabBarStyle: {
                    height: 62
                }
            });
        } },
        react_1["default"].createElement(Tab.Screen, { name: "Home", component: Home_1["default"], options: { headerShown: false } }),
        react_1["default"].createElement(Tab.Screen, { name: "Shop", component: Shop_1["default"], options: { headerShown: false } }),
        react_1["default"].createElement(Tab.Screen, { name: "Scan", component: Scan_1["default"], options: { headerShown: false } }),
        react_1["default"].createElement(Tab.Screen, { name: "Notification", component: Notification_1["default"], options: { headerShown: false } }),
        react_1["default"].createElement(Tab.Screen, { name: "Profile", component: Profile_1["default"], options: { headerShown: false } })));
};
exports["default"] = BottomTab;
var styles = react_native_1.StyleSheet.create({
    tabIcon: {
        borderRadius: 10,
        borderWidth: 2,
        width: '100%',
        height: '100%'
    },
    focusedStyle: {
        backgroundColor: 'rgba(252, 162, 52, 0.46)',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 62,
        width: '100%'
    }
});
