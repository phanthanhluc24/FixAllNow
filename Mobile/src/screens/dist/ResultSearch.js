"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var HeaderSearch_1 = require("./HeaderSearch");
var ListServiceSearch_1 = require("./ListServiceSearch");
var native_1 = require("@react-navigation/native");
var ResultSearch = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState([]), searchData = _a[0], setSearchData = _a[1];
    var _b = react_1.useState(false), isSearching = _b[0], setIsSearching = _b[1];
    var _c = react_1.useState(''), searchQuery = _c[0], setSearchQuery = _c[1];
    var handleSearch = function (data) {
        setSearchData(data);
        setIsSearching(true);
    };
    var handleChangeSearch = function (query) {
        setSearchQuery(query);
        setIsSearching(false);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(HeaderSearch_1["default"], { onSearch: handleSearch, onChangeText: handleChangeSearch, value: searchQuery }),
            react_1["default"].createElement(ListServiceSearch_1["default"], { data: searchData }))));
};
exports["default"] = ResultSearch;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
