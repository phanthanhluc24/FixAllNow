"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var HomeCategories_1 = require("../../HomeCategories");
var HeaderSearch_1 = require("../../HeaderSearch");
var HomeRepairmanPopular_1 = require("../../HomeRepairmanPopular");
var HomeServicePopular_1 = require("../../HomeServicePopular");
var Home = function () {
    var data = [
        { key: 'HomeServicePopular' },
    ];
    var renderHeader = function () { return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(HeaderSearch_1["default"], null),
        react_1["default"].createElement(HomeCategories_1["default"], null),
        react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopular },
            react_1["default"].createElement(react_native_1.View, { style: styles.containers },
                react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u01A1\u0323 n\u00F4\u0309i b\u00E2\u0323t"),
                react_1["default"].createElement(HomeRepairmanPopular_1["default"], null))),
        react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopulars },
            react_1["default"].createElement(react_native_1.View, { style: styles.containerss },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Di\u0323ch vu\u0323 n\u00F4\u0309i b\u00E2\u0323t"),
                react_1["default"].createElement(HomeServicePopular_1["default"], null))))); };
    var renderItem = function () { return (react_1["default"].createElement(react_native_1.View, null)); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item.key; }, renderItem: renderItem, ListHeaderComponent: renderHeader })));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    repairmanPopular: {
        flex: 1,
        marginTop: 20
    },
    containers: {
        marginHorizontal: 20
    },
    title: {
        color: "#394C6D",
        fontSize: 20,
        fontWeight: "bold"
    },
    repairmanPopulars: {
        flex: 1,
        marginTop: 20
    },
    containerss: {
        marginHorizontal: 20
    },
    titles: {
        color: "#394C6D",
        fontSize: 20,
        fontWeight: "bold"
    }
});
