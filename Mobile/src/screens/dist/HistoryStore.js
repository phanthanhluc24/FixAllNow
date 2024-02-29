"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ConfirmedPage_1 = require("./ConfirmedPage");
var Deconfirmedpage_1 = require("./Deconfirmedpage");
var ProgressPage_1 = require("./ProgressPage");
var AccomplishedPage_1 = require("./AccomplishedPage");
var ReviewsPage_1 = require("./ReviewsPage");
var HistoryStore = function () {
    var _a = react_1.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var renderComponent = function () {
        switch (selectedTab) {
            case 0:
                return react_1["default"].createElement(ConfirmedPage_1["default"], null);
            case 1:
                return react_1["default"].createElement(Deconfirmedpage_1["default"], null);
            case 2:
                return react_1["default"].createElement(ProgressPage_1["default"], null);
            case 3:
                return react_1["default"].createElement(AccomplishedPage_1["default"], null);
            case 4:
                return react_1["default"].createElement(ReviewsPage_1["default"], null);
            default:
                return null;
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.ScrollView, { style: styles.listHistory, horizontal: true },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 0 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(0); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 0 ? styles.selectedText : null] }, "\u0110\u00E3 x\u00E1c nh\u1EADn")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 1 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(1); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 1 ? styles.selectedText : null] }, "\u0110\u00E3 h\u1EE7y")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 2 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(2); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 2 ? styles.selectedText : null] }, "\u0110ang th\u1EF1c hi\u1EC7n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 3 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(3); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 3 ? styles.selectedText : null] }, "\u0110\u00E3 ho\u00E0n th\u00E0nh")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 4 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(4); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 4 ? styles.selectedText : null] }, "Xem \u0111\u00E1nh gi\u00E1")))),
        react_1["default"].createElement(react_native_1.View, null, renderComponent())));
};
exports["default"] = HistoryStore;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    listHistory: {
        height: 50
    },
    eventButton: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#FCA234',
        height: 50
    },
    titleButton: {
        color: '#394C6D'
    },
    selectedButton: {
        backgroundColor: '#FCA234'
    },
    selectedText: {
        color: 'white'
    }
});
