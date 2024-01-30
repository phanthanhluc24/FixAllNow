"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Feather_1 = require("react-native-vector-icons/Feather");
var RatedComment = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.containerRatedComment },
            react_1["default"].createElement(react_native_1.View, { style: styles.comment },
                react_1["default"].createElement(react_native_1.View, { style: styles.avatar },
                    react_1["default"].createElement(react_native_1.Image, { style: styles.avatarComment, source: require('../assets/Homes/avatars.png') })),
                react_1["default"].createElement(react_native_1.View, { style: styles.content },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.comments }, "Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2m"),
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/star.png') })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.bottom },
            react_1["default"].createElement(react_native_1.View, { style: styles.writeComment },
                react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: 'Ha\u0303y \u0111a\u0301nh gia\u0301 gi\u0300 \u0111o\u0301' }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                    react_1["default"].createElement(Feather_1["default"], { paddingHorizontal: 15, name: "send", color: "black", size: 28 }))))));
};
exports["default"] = RatedComment;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    containerRatedComment: {
        marginHorizontal: 20,
        flex: 9
    },
    bottom: {
        flex: 1,
        marginHorizontal: 20
    },
    comment: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    writeComment: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#394C6D",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    avatarComment: {
        width: 50,
        height: 50
    },
    content: {
        width: "80%"
    },
    comments: {
        fontSize: 16,
        color: "#394C6D",
        marginVertical: 10
    },
    input: {
        paddingLeft: 15
    }
});
