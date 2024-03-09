"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var Shop = function () {
    var _a = react_1.useState('Initial Data'), data = _a[0], setData = _a[1];
    var handleButtonPress = function (option) {
        switch (option) {
            case '1':
                setData('Data for Option 1');
                break;
            case '2':
                setData('Data for Option 2');
                break;
            case '3':
                setData('Data for Option 3');
                break;
            default:
                setData('Initial Data');
        }
    };
    var ratingCompleted = function (rating) {
        console.log('Rating is: ' + rating);
    };
    return (react_1["default"].createElement(react_native_2.View, { style: styles.container },
        react_1["default"].createElement(react_native_2.Button, { title: "1", onPress: function () { return handleButtonPress('1'); } }),
        react_1["default"].createElement(react_native_2.Button, { title: "2", onPress: function () { return handleButtonPress('2'); } }),
        react_1["default"].createElement(react_native_2.Button, { title: "3", onPress: function () { return handleButtonPress('3'); } }),
        react_1["default"].createElement(react_native_2.Text, null, data)));
};
exports["default"] = Shop;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
