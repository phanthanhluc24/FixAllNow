"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ProfileBodyRepairmanFinder = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerProfileBodyRepairmanFinder },
        react_1["default"].createElement(react_native_1.View, { style: styles.profileBodyRepairmanFinder },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameAccount }, "Ta\u0300i khoa\u0309n"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Ta\u0300i khoa\u0309n va\u0300 ba\u0309o m\u00E2\u0323t"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameAddress }, "\u0110i\u0323a chi\u0309"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameBank }, "Ta\u0300i khoa\u0309n/Ng\u00E2n ha\u0300ng")),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameAccount }, "Ca\u0300i \u0111\u0103\u0323t"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Ca\u0300i \u0111\u0103\u0323t chat"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Ca\u0300i \u0111\u0103\u0323t th\u00F4ng ba\u0301o"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Ng\u00F4n ng\u01B0\u0303:"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameLanguage }, "Ti\u00EA\u0301ng vi\u00EA\u0323t")),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameAccount }, "H\u00F4\u0303 tr\u01A1\u0323"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Trung t\u00E2m h\u00F4\u0303 tr\u01A1\u0323"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Ti\u00EAu chu\u00E2\u0309n c\u00F4\u0323ng \u0111\u00F4\u0300ng"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameSecurity }, "Y\u00EAu c\u00E2\u0300u xo\u0301a ta\u0300i khoa\u0309n")))));
};
exports["default"] = ProfileBodyRepairmanFinder;
var styles = react_native_1.StyleSheet.create({
    containerProfileBodyRepairmanFinder: {
        flex: 1
    },
    profileBodyRepairmanFinder: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    nameAccount: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#FCA234",
        paddingVertical: 10
    },
    nameSecurity: {
        fontSize: 20,
        color: "#394C6D"
    },
    nameAddress: {
        fontSize: 20,
        color: "#394C6D"
    },
    nameBank: {
        fontSize: 20,
        color: "#394C6D"
    },
    nameLanguage: {
        marginHorizontal: 20,
        fontSize: 15,
        color: "#394C6D"
    }
});
