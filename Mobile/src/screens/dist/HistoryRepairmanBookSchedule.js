"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var react_1 = require("react");
var RepairmanFinderWaitingConfirmBook_1 = require("./RepairmanFinderWaitingConfirmBook");
var useRepairmanFinderGetStatusBooking_1 = require("../hooks/useRepairmanFinderGetStatusBooking");
var RepairmanFinderConfirmRatingComment_1 = require("./RepairmanFinderConfirmRatingComment");
var HistoryRepairmanBookSchedule = function () {
    var _a = react_1.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var transformedSelectedTab = selectedTab + 1;
    var _b = useRepairmanFinderGetStatusBooking_1["default"](transformedSelectedTab), statusBooking = _b.statusBooking, isLoading = _b.isLoading, isError = _b.isError;
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
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
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
                        ] }, "\u0110\u00E3 x\u00E1c nh\u1EADn")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 2 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(2); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 2 ? styles.selectedText : null,
                        ] }, "\u0110\u01A1n \u0111\u00E3 h\u1EE7y")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 3 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(3); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 3 ? styles.selectedText : null,
                        ] }, "\u0110a\u0303 hoa\u0300n tha\u0300nh")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                        styles.eventButton,
                        selectedTab === 4 ? styles.selectedButton : null,
                    ], onPress: function () { return setSelectedTab(4); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 4 ? styles.selectedText : null,
                        ] }, "Ch\u01B0a \u0111a\u0301nh gia\u0301")))),
        react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 70, alignItems: "center" } }, isLoading ? (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: "center" } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' })))) : statusBooking ? (renderComponent()) : (react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
            react_1["default"].createElement(react_native_1.Text, { style: styles.noDataText }, "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c t\u00ECm th\u1EA5y."))))));
};
exports["default"] = HistoryRepairmanBookSchedule;
var styles = react_native_1.StyleSheet.create({
    noDataText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 200,
        color: "#FCA234"
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        width: 50,
        height: 50,
        marginTop: 100
    },
    container: {
        flex: 1
    },
    selectedButton: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#FCA234'
    },
    eventButton: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#394C6D',
        height: 50,
        width: 140
    },
    listHistory: {
        height: 50
    },
    titleButton: {
        color: '#394C6D',
        fontWeight: 'bold'
    },
    selectedText: {
        color: '#FCA234',
        fontWeight: 'bold'
    }
});
