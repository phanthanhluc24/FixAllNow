"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var Landing = function () {
    var navigation = native_1.useNavigation();
    react_1.useEffect(function () {
        var timeout = setTimeout(function () {
            navigation.navigate('SignIn');
        }, 1000);
        return function () { return clearTimeout(timeout); };
    }, [navigation]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.landingContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.circularImage },
            react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Landing/landing.png'), style: { width: "99%", height: "80%" } })),
        react_1["default"].createElement(react_native_1.View, { style: styles.landingcontent },
            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.content }, "T\u00ECm th\u1EE3 s\u1EEDa ch\u1EEFa ti\u1EC7n l\u1EE3i t\u1EA1i \u0111\u00E2y!"))));
};
exports["default"] = Landing;
var styles = react_native_1.StyleSheet.create({
    landingContainer: {
        flex: 1,
        backgroundColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circularImage: {
        width: "80%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center"
    },
    landingcontent: {
        paddingTop: 20
    },
    content: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
