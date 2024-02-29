"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var ProfileButtonEvent = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerEvent },
        react_1["default"].createElement(react_native_1.View, { style: styles.styleEvent },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.addService, onPress: function () { return navigation.navigate('FormAddNewService'); } },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameAddService }, "Th\u00EAm m\u01A1\u0301i di\u0323ch vu\u0323")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.viewHistory },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameViewHistory, onPress: function () { return navigation.navigate('HistoryStore'); } }, "Li\u0323ch s\u01B0\u0309 c\u01B0\u0309a ha\u0300ng")))));
};
exports["default"] = ProfileButtonEvent;
var styles = react_native_1.StyleSheet.create({
    nameAddService: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: "#394C6D"
    },
    nameViewHistory: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: "#394C6D"
    },
    viewHistory: {
        backgroundColor: "#FCA234",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    addService: {
        backgroundColor: "#FCA234",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    containerEvent: {
        flex: 1,
        backgroundColor: "#394C6D"
    },
    styleEvent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 20
    }
});
