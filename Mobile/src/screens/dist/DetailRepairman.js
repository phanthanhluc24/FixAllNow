"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var DetailHeaderRepairman_1 = require("./DetailHeaderRepairman");
var DetailCommentRepairman_1 = require("./DetailCommentRepairman");
var DetailRepairman = function (_a) {
    var route = _a.route;
    var data = [{ key: 'DetailHeaderRepairman' }];
    var renderHeader = function () {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(DetailHeaderRepairman_1["default"], null)));
    };
    var renderBodyRepairman = function () {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(DetailCommentRepairman_1["default"], null)));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerServiceSpecific },
        react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item.key; }, renderItem: renderBodyRepairman, ListHeaderComponent: renderHeader })));
};
exports["default"] = DetailRepairman;
var styles = react_native_1.StyleSheet.create({
    containerServiceSpecific: {
        flex: 1
    }
});
