"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var DetailServiceButton = function () {
    var navigation = native_1.useNavigation();
    var handleBookNow = function () {
        navigation.navigate('MapScreen');
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.belowInfoService },
        react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
            react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bookNow, onPress: handleBookNow },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t ngay"))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: function () { return navigation.navigate('FormBookSchedule'); } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.book },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t li\u0323ch")))))));
};
exports["default"] = DetailServiceButton;
var styles = react_native_1.StyleSheet.create({
    belowInfoService: {
        flex: 1
    },
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10
    },
    button1: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookNow: {
        width: '80%',
        height: 50,
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    book: {
        width: '80%',
        height: 50,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    books: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    oneLine: {
        width: '100%',
        backgroundColor: '#FCA234',
        height: 1,
        marginTop: 15
    }
});
