"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var Shop = function () {
    return (react_1["default"].createElement(react_native_2.View, null,
        react_1["default"].createElement(react_native_2.Button, { title: 'dialog box', onPress: function () {
                return react_native_alert_notification_1.Dialog.show({
                    type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Congrats! this is dialog box success',
                    button: 'close'
                });
            } }),
        react_1["default"].createElement(react_native_2.Button, { title: 'toast notification', onPress: function () {
                return react_native_alert_notification_1.Toast.show({
                    type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Congrats! this is toast notification success'
                });
            } })));
};
exports["default"] = Shop;
var styles = react_native_1.StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: 300
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#FCA234"
    },
    image: {
        alignSelf: "center",
        width: 80,
        height: 80
    },
    underline: {
        width: "100%",
        height: 1,
        backgroundColor: "#394C6D",
        alignItems: "center"
    },
    spaceButton: {
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingTop: 20
    },
    viewDetails: {
        marginLeft: 10
    },
    textTitle: {
        fontSize: 18,
        color: "#FCA234"
    },
    textSubTitle: {
        color: "#394C6D"
    }
});
