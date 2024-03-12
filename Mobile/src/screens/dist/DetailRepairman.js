"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var DetailHeaderRepairman_1 = require("./DetailHeaderRepairman");
var DetailRepairman = function (_a) {
    var route = _a.route;
    var data = [{ key: 'DetailHeaderRepairman' }];
    var _b = route.params, id = _b.id, title = _b.title;
    console.log(id);
    var renderHeader = function () {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(DetailHeaderRepairman_1["default"], { repairman_id: id })));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerServiceSpecific },
        react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item.key; }, renderItem: renderHeader })));
};
exports["default"] = DetailRepairman;
var styles = react_native_1.StyleSheet.create({
    containerServiceSpecific: {
        flex: 1
    }
});
