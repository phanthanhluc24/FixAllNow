"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var Welcome = function () {
    var navigation = native_1.useNavigation();
    react_1.useEffect(function () {
        var timeout = setTimeout(function () {
            navigation.navigate('Landing');
        }, 500);
        return function () { return clearTimeout(timeout); };
    }, [navigation]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.welcomeContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.logoConatiner },
            react_1["default"].createElement(react_native_1.View, { style: styles.circularLogo },
                react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Landing/logo.png'), style: styles.logo })),
            react_1["default"].createElement(react_native_1.View, { style: styles.welcomcontent },
                react_1["default"].createElement(react_native_1.Text, { style: styles.content }, "Cha\u0300o m\u01B0\u0300ng \u0111\u00EA\u0301n v\u01A1\u0301i FixAllNow")))));
};
exports["default"] = Welcome;
var styles = react_native_1.StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoConatiner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    circularLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginRight: 13
    },
    welcomcontent: {
        paddingTop: 20
    },
    content: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
