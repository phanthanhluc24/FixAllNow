"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var RepairmanFinderFollowProcessing_1 = require("./RepairmanFinderFollowProcessing");
var RepairmanFinderDeconfirmBooking_1 = require("./RepairmanFinderDeconfirmBooking");
var RepairmanFinderReviewAccomplishedRepair_1 = require("./RepairmanFinderReviewAccomplishedRepair");
var RepairmanFinderWaitingConfirmBook_1 = require("./RepairmanFinderWaitingConfirmBook");
var ProfileBodyRepairmanFinder = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var renderComponent = function () {
        switch (selectedTab) {
            case 0:
                return react_1["default"].createElement(RepairmanFinderWaitingConfirmBook_1["default"], null);
            case 1:
                return react_1["default"].createElement(RepairmanFinderDeconfirmBooking_1["default"], null);
            case 2:
                return react_1["default"].createElement(RepairmanFinderFollowProcessing_1["default"], null);
            case 3:
                return react_1["default"].createElement(RepairmanFinderReviewAccomplishedRepair_1["default"], null);
            default:
                return null;
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerProfileBodyRepairmanFinder },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.ScrollView, { style: styles.listHistory, horizontal: true },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 0 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(0); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 0 ? styles.selectedText : null,
                        ] }, "Ch\u01A1\u0300 xa\u0301c nh\u00E2\u0323n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 1 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(1); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 1 ? styles.selectedText : null,
                        ] }, "\u0110\u01A1n \u0111\u00E3 h\u1EE7y")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 2 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(2); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 2 ? styles.selectedText : null,
                        ] }, "\u0110ang th\u1EF1c hi\u1EC7n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 3 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(3); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 3 ? styles.selectedText : null,
                        ] }, "\u0110\u00E3 ho\u00E0n th\u00E0nh")))),
        react_1["default"].createElement(react_native_1.View, null, renderComponent())));
};
exports["default"] = ProfileBodyRepairmanFinder;
var styles = react_native_1.StyleSheet.create({
    listHistory: {
        height: 50
    },
    eventButton: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#FCA234',
        height: 50,
        width: 140
    },
    titleButton: {
        color: '#394C6D'
    },
    selectedButton: {
        backgroundColor: '#394C6D'
    },
    selectedText: {
        color: 'white'
    },
    container: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#394C6D',
        width: '90%',
        height: 120,
        marginTop: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    hello: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FCA234',
        width: '90%'
    },
    detaildemo: {
        fontSize: 13,
        color: '#FFFFFF',
        width: '90%'
    },
    containerProfileBodyRepairmanFinder: {
        flex: 1
    },
    profileBodyRepairmanFinder: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    nameAccount: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FCA234',
        paddingVertical: 10
    },
    nameSecurity: {
        fontSize: 20,
        color: '#394C6D'
    },
    nameAddress: {
        fontSize: 20,
        color: '#394C6D'
    },
    nameBank: {
        fontSize: 20,
        color: '#394C6D'
    },
    nameLanguage: {
        marginHorizontal: 20,
        fontSize: 15,
        color: '#394C6D'
    }
});
