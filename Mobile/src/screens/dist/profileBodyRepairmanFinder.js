"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var RepairmanFinderWaitingConfirmBook_1 = require("./RepairmanFinderWaitingConfirmBook");
var useRepairmanFinderGetStatusBooking_1 = require("../hooks/useRepairmanFinderGetStatusBooking");
var RepairmanFinderConfirmRatingComment_1 = require("./RepairmanFinderConfirmRatingComment");
var ProfileBodyRepairmanFinder = function () {
    var _a = react_1.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var transformedSelectedTab = selectedTab + 1;
    var statusBooking = useRepairmanFinderGetStatusBooking_1["default"](transformedSelectedTab).statusBooking;
    var renderComponent = function () {
        switch (transformedSelectedTab) {
            case 1:
            case 2:
            case 3:
            case 4:
                return (react_1["default"].createElement(RepairmanFinderWaitingConfirmBook_1["default"], { statusBooking: statusBooking }));
            default:
                return react_1["default"].createElement(RepairmanFinderConfirmRatingComment_1["default"], null);
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerProfileBodyRepairmanFinder },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.ScrollView, { style: styles.listHistory, horizontal: true },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 0 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(0); } },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: [
                            styles.titleButton,
                            selectedTab === 0 ? styles.selectedText : null,
                        ] }, "Ch\u01A1\u0300 xa\u0301c nh\u00E2\u0323n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 1 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(1); } },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: [
                            styles.titleButton,
                            selectedTab === 1 ? styles.selectedText : null,
                        ] }, "\u0110a\u0303 ch\u00E2\u0301p nh\u00E2\u0323n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 2 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(2); } },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: [
                            styles.titleButton,
                            selectedTab === 2 ? styles.selectedText : null,
                        ] }, "\u0110\u01A1n \u0111\u00E3 h\u1EE7y")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 3 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(3); } },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: [
                            styles.titleButton,
                            selectedTab === 3 ? styles.selectedText : null,
                        ] }, "\u0110\u00E3 ho\u00E0n th\u00E0nh")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 4 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(4); } },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: [
                            styles.titleButton,
                            selectedTab === 4 ? styles.selectedText : null,
                        ] }, "Ch\u01B0a \u0111a\u0301nh gia\u0301")))),
        react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 70 } }, renderComponent())));
};
exports["default"] = ProfileBodyRepairmanFinder;
var styles = react_native_1.StyleSheet.create({
    listHistory: {
        height: 50
    },
    eventButton: {
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#394C6D',
        height: 50
    },
    titleButton: {
        color: '#394C6D',
        fontWeight: "bold"
    },
    selectedButton: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#FCA234'
    },
    selectedText: {
        color: '#FCA234',
        fontWeight: "bold"
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
        flex: 1,
        width: "100%"
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
