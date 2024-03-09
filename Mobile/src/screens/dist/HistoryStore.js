"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var RepairmanConfirmBooking_1 = require("./RepairmanConfirmBooking");
var useRepairmanConfirmStatusBooking_1 = require("../hooks/useRepairmanConfirmStatusBooking");
var HistoryStore = function () {
    var _a = react_1.useState(0), selectedTab = _a[0], setSelectedTab = _a[1];
    var transformedSelectedTab = selectedTab + 1;
    var _b = useRepairmanConfirmStatusBooking_1["default"](transformedSelectedTab), statusBooking = _b.statusBooking, isLoading = _b.isLoading;
    var renderComponent = function () {
        return react_1["default"].createElement(RepairmanConfirmBooking_1["default"], { statusBooking: statusBooking, isLoading: isLoading });
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: styles.listHistory },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setSelectedTab(0); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 0 ? styles.selectedText : null,
                        ] }, "Xa\u0301c nh\u00E2\u0323n")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setSelectedTab(1); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 1 ? styles.selectedText : null,
                        ] }, "\u0110\u00E3 x\u00E1c nh\u1EADn")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setSelectedTab(2); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 2 ? styles.selectedText : null,
                        ] }, "\u0110\u00E3 h\u1EE7y")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setSelectedTab(3); } },
                    react_1["default"].createElement(react_native_1.Text, { style: [
                            styles.titleButton,
                            selectedTab === 3 ? styles.selectedText : null,
                        ] }, "\u0110a\u0303 hoa\u0300n tha\u0300nh")))),
        react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 70 } }, renderComponent())));
};
exports["default"] = HistoryStore;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    listHistory: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: '#FCA234'
    },
    eventButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#FCA234',
        height: 50
    },
    titleButton: {
        color: '#394C6D',
        fontWeight: "bold"
    },
    selectedButton: {
        color: '#FCA234'
    },
    selectedText: {
        color: '#FCA234',
        fontWeight: "bold"
    }
});
