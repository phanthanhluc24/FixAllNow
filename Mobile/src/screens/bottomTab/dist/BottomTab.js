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
                    var title = '';
                    if (rn === 'Home') {
                        imageSource = require(URL_IMAGE + "/iconhome.png");
                        title = 'Trang chủ';
                    }
                    else if (rn === 'Shop') {
                        imageSource = require(URL_IMAGE + "/iconshop.png");
                        title = 'Cửa hàng';
                    }
                    else if (rn === 'Scan') {
                        imageSource = require(URL_IMAGE + "/AI.png");
                        title = 'Hỏi đáp';
                    }
                    else if (rn === 'Notification') {
                        imageSource = require(URL_IMAGE + "/iconnotification.png");
                        title = 'Thông báo';
                    }
                    else if (rn === 'Profile') {
                        imageSource = require(URL_IMAGE + "/iconprofile.png");
                        title = 'Hồ sơ';
                    }
                    return (react_1["default"].createElement(react_native_1.View, { style: focused ? styles.focusedStyle : styles.tabItem },
                        react_1["default"].createElement(react_native_1.Image, { source: imageSource, style: [
                                styles.tabIcon,
                                {
                                    tintColor: focused ? '#ffffff' : '#394C6D'
                                },
                            ] }),
                        react_1["default"].createElement(react_native_1.Text, { style: focused ? styles.focusedLabelStyle : styles.labelStyle }, title)));
                },
                tabBarHideOnKeyboard: true,
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
        width: 35,
        height: 35
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    focusedStyle: {
        backgroundColor: '#394C6D',
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 62,
        width: '100%'
    },
    labelStyle: {
        fontSize: 12,
        color: '#394C6D',
        textAlign: 'center'
    },
    focusedLabelStyle: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: "bold"
    }
});
