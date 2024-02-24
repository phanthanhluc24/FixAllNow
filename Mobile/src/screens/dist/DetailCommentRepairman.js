"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var DetailCommentRepairman = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.rateComment },
            react_1["default"].createElement(react_native_1.View, { style: styles.containerTitle },
                react_1["default"].createElement(react_native_1.View, { style: styles.rating },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titless }, "\u0110a\u0301nh gia\u0301:(30)"),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RatedComment'); } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titlesss }, "\u0110a\u0301nh gia\u0301 ngay!"))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RatedComment'); } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.suggest }, "Xem \u0111a\u0301nh gia\u0301 ngay na\u0300o!"))))));
};
exports["default"] = DetailCommentRepairman;
var styles = react_native_1.StyleSheet.create({
    rateComment: {
        marginTop: 20
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    suggest: {
        color: '#FCA234'
    },
    containerTitle: {
        marginHorizontal: 20
    },
    titless: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    titlesss: {
        fontSize: 18,
        color: '#FCA234',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FCA234',
        padding: 3
    }
});
