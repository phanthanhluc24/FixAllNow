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
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameViewHistory, onPress: function () { return navigation.navigate('HistoryStore'); } }, "Li\u0323ch s\u01B0\u0309 c\u01B0\u0309a ha\u0300ng"))),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { marginHorizontal: 20 }, onPress: function () { return navigation.navigate('HistoryRepairmanBookSchedule'); } },
            react_1["default"].createElement(react_native_1.View, { style: styles.viewHistorys },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameViewHistory }, "Li\u0323ch s\u01B0\u0309 \u0111\u0103\u0323t li\u0323ch")))));
};
exports["default"] = ProfileButtonEvent;
var styles = react_native_1.StyleSheet.create({
    nameAddService: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    nameViewHistory: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    viewHistory: {
        backgroundColor: '#394C6D',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        // marginBottom:10,
        // marginHorizontal:20
        marginBottom: 10
    },
    viewHistorys: {
        backgroundColor: '#394C6D',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        // marginBottom:10,
        // marginHorizontal:20
        marginBottom: 10,
        width: '100%'
    },
    addService: {
        backgroundColor: '#394C6D',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    containerEvent: {
        flex: 1
    },
    styleEvent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20
    }
});
