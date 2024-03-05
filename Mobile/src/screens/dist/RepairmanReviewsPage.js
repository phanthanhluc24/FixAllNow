"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var RepairmanReviewsPage = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.comment },
            react_1["default"].createElement(react_native_1.View, { style: styles.avatar },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatarComment, source: require('../assets/Homes/avatars.png') })),
            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                react_1["default"].createElement(react_native_1.Text, { style: styles.comments }, "Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2m")))));
};
exports["default"] = RepairmanReviewsPage;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    writeComment: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#394C6D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarComment: {
        width: 50,
        height: 50
    },
    content: {
        width: '80%'
    },
    comments: {
        fontSize: 16,
        color: '#394C6D',
        marginVertical: 10
    }
});
