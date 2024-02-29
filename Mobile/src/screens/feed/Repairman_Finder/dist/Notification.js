"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var react_native_2 = require("react-native");
var Notification = function () {
    var _a = react_1.useState(false), clicked = _a[0], setClicked = _a[1];
    var handlePress = function () {
        setClicked(true);
    };
    react_1.useEffect(function () {
        setClicked(true);
    }, []);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_2.TouchableOpacity, { style: [styles.layout, { backgroundColor: clicked ? 'white' : '#BCD4E6' }], onPress: handlePress },
            react_1["default"].createElement(react_native_1.View, { style: styles.notificationContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.avatarShop },
                    react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: require('../../../assets/Homes/avatar.png') })),
                react_1["default"].createElement(react_native_1.View, { style: styles.contentNotification },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Hello fixallnow"),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3 },
                        ' ',
                        "s\u01B0\u0323 ki\u00EA\u0323n m\u01A1\u0301i di\u00EA\u0303n ra s\u01B0\u0323 ki\u00EA\u0323n m\u01A1\u0301i di\u00EA\u0303n ra s\u01B0\u0323 ki\u00EA\u0323n m\u01A1\u0301i di\u00EA\u0303n ra s\u01B0\u0323 ki\u00EA\u0323n m\u01A1\u0301i di\u00EA\u0303n ra s\u01B0\u0323 ki\u00EA\u0323n m\u01A1\u0301i di\u00EA\u0303n ra"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.time }, "16 nga\u0300y tr\u01B0\u01A1\u0301c")),
                react_1["default"].createElement(react_native_1.View, { style: styles.openView },
                    react_1["default"].createElement(AntDesign_1["default"], { name: "ellipsis1", color: "#394C6D", size: 30 }))))));
};
exports["default"] = Notification;
var styles = react_native_1.StyleSheet.create({
    time: {
        color: 'blue'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    avatar: {
        width: 50,
        height: 50
    },
    container: {
        flex: 1
    },
    layout: {
        borderBottomWidth: 1,
        borderBottomColor: '#394C6D'
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    avatarShop: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentNotification: {
        width: '75%',
        padding: 10
    },
    openView: {
        width: '10%'
    }
});
