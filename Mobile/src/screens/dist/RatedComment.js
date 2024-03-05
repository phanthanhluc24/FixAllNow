"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var StarRating_1 = require("./StarRating");
var RatedComment = function () {
    var navigation = native_1.useNavigation();
    var handleRatingPress = function (rating) {
    };
    return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled" },
            react_1["default"].createElement(react_native_1.View, { style: styles.containerRatedComment },
                react_1["default"].createElement(react_native_1.View, { style: styles.comment },
                    react_1["default"].createElement(react_native_1.TextInput, { multiline: true, style: styles.input, placeholderTextColor: '#394C69', placeholder: "Ha\u0303y \u0111a\u0301nh gia\u0301 theo ca\u0309m nh\u00E2\u0323n cu\u0309a ba\u0323n!" })),
                react_1["default"].createElement(react_native_1.Text, { style: styles.level }, "M\u01B0\u0301c \u0111\u00F4\u0323 ha\u0300i lo\u0300ng:"),
                react_1["default"].createElement(StarRating_1["default"], { rating: 0, onRatingPress: handleRatingPress })),
            react_1["default"].createElement(react_native_1.View, { style: styles.bottom },
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.Image, { style: styles.imgFooter, source: require('../assets/Form/double.png') }),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bgButton, onPress: function () { return navigation.navigate('ConfirmInforBooking'); } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameBook }, "\u0110a\u0301nh gia\u0301")))))));
};
exports["default"] = RatedComment;
var styles = react_native_1.StyleSheet.create({
    nameBook: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    imgFooter: {
        width: '100%'
    },
    bgButton: {
        backgroundColor: '#394C6D',
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 10
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -20
    },
    boxInput: {
        marginVertical: 30
    },
    level: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    container: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    containerRatedComment: {
        marginHorizontal: 20,
        flex: 5
    },
    bottom: {
        flex: 5,
        marginHorizontal: 20
    },
    comment: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        paddingLeft: 15,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#394C6D',
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'white'
    }
});
