"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var formik_1 = require("formik");
var ForgotPassword = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { email: '' }, onSubmit: function (values) { return console.log(values); } }, function (_a) {
        var handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.confirmContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.body },
                    react_1["default"].createElement(react_native_1.View, { style: styles.container },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "XA\u0301C TH\u01AF\u0323C TA\u0300I KHOA\u0309N")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Vui lo\u0300ng nh\u00E2\u0323p Email!"),
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('email'), onBlur: handleBlur('email'), value: values.email }),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('NewPassword'); }, style: styles.buttonConfirm },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.textConfirm }, "XA\u0301C TH\u01AF\u0323C"))))),
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../../assets/ForgotPassword/background.png'), resizeMode: "cover", style: styles.bgImg },
                        react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../../assets/ForgotPassword/backgrounds.png'), resizeMode: "cover", style: styles.bgImgs },
                            react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/ForgotPassword/demoFg.png'), style: styles.demo })))))));
    }));
};
exports["default"] = ForgotPassword;
var styles = react_native_1.StyleSheet.create({
    confirmContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    body: {
        flex: 1,
        position: "absolute",
        zIndex: 100,
        justifyContent: 'center',
        width: '100%'
    },
    footer: {
        flex: 15
    },
    bgImg: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }, bgImgs: {
        width: '70%',
        height: '70%',
        alignItems: 'center',
        marginTop: "90%",
        marginRight: "35%"
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#394C6D',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titles: {
        fontSize: 15,
        color: "white"
    },
    titleCode: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputCode: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        width: "80%"
    },
    spaceContainer: {
        alignItems: "center",
        marginTop: 40
    },
    timeInput: {
        fontSize: 15,
        marginTop: 10
    },
    sentBack: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#0000ff"
    },
    container: {
        marginTop: 60
    },
    buttonConfirm: {
        width: '50%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        height: 60,
        marginHorizontal: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    textConfirm: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    demo: {
        marginTop: "60%",
        marginRight: "-60%"
    }
});
