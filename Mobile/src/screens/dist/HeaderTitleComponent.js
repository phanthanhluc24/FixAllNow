"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var HeaderTitleComponent = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Image, { style: styles.title, source: require('../assets/Headers/headerFAN.png') })));
};
var styles = react_native_1.StyleSheet.create({
    header: {
        height: "100%",
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2ecc71'
    },
    title: {
        height: 40,
        width: 220
    }
});
exports["default"] = HeaderTitleComponent;
