"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var HeaderSearch = function () {
    var handleSearchChange = function () {
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.SearchBarContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.SearchInputs },
            react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Ti\u0300m ki\u00EA\u0301m di\u0323ch vu\u0323", style: styles.searchInput }),
            react_1["default"].createElement(react_native_1.View, { style: styles.messageIcon },
                react_1["default"].createElement(AntDesign_1["default"], { name: "message1", color: "black", size: 28 })),
            react_1["default"].createElement(react_native_1.Image, { source: require("../assets/Homes/avatar.png") }))));
};
exports["default"] = HeaderSearch;
var styles = react_native_1.StyleSheet.create({
    SearchBarContainer: {
        flex: 1
    },
    searchInput: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        width: '70%',
        backgroundColor: 'white',
        paddingLeft: 15
    },
    SearchInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: "center"
    },
    messageIcon: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    }
});
