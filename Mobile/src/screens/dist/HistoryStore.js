"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var RepairmanConfirmedBooking_1 = require("./RepairmanConfirmedBooking");
var RepairmanDeconfirmedBooking_1 = require("./RepairmanDeconfirmedBooking");
var RepairmanAccomplishedRepair_1 = require("./RepairmanAccomplishedRepair");
var RepairmanReviewsPage_1 = require("./RepairmanReviewsPage");
var RepairmanProgressConfirm_1 = require("./RepairmanProgressConfirm");
var RepairmanConfirmBooking_1 = require("./RepairmanConfirmBooking");
var HistoryStore = function () {
    var _a = react_1.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var renderComponent = function () {
        switch (selectedTab) {
            case 0:
                return react_1["default"].createElement(RepairmanConfirmBooking_1["default"], null);
            case 1:
                return react_1["default"].createElement(RepairmanConfirmedBooking_1["default"], null);
            case 2:
                return react_1["default"].createElement(RepairmanDeconfirmedBooking_1["default"], null);
            case 3:
                return react_1["default"].createElement(RepairmanProgressConfirm_1["default"], null);
            case 4:
                return react_1["default"].createElement(RepairmanAccomplishedRepair_1["default"], null);
            case 5:
                return react_1["default"].createElement(RepairmanReviewsPage_1["default"], null);
            default:
                return null;
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.ScrollView, { style: styles.listHistory, horizontal: true },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 0 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(0); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 0 ? styles.selectedText : null] }, "Xa\u0301c nh\u00E2\u0323n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 1 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(1); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 1 ? styles.selectedText : null] }, "\u0110\u00E3 x\u00E1c nh\u1EADn")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 2 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(2); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 2 ? styles.selectedText : null] }, "\u0110\u00E3 h\u1EE7y")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 3 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(3); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 3 ? styles.selectedText : null] }, "\u0110ang th\u1EF1c hi\u1EC7n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 4 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(4); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 4 ? styles.selectedText : null] }, "\u0110\u00E3 ho\u00E0n th\u00E0nh")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.eventButton, selectedTab === 5 ? styles.selectedButton : null], onPress: function () { return setSelectedTab(5); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [styles.titleButton, selectedTab === 5 ? styles.selectedText : null] }, "Xem \u0111\u00E1nh gi\u00E1")))),
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
