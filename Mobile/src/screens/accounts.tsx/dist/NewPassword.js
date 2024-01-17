"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var formik_1 = require("formik");
var NewPassword = function () {
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { password: '', passwords: '' }, onSubmit: function (values) { return console.log(values); } }, function (_a) {
        var handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.confirmContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.body },
                    react_1["default"].createElement(react_native_1.View, { style: styles.container },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "M\u00C2\u0323T KH\u00C2\u0309U M\u01A0\u0301I")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.spaceForm },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "M\u00E2\u0323t kh\u00E2\u0309u m\u01A1\u0301i"),
                            react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                                react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('passwords'), onBlur: handleBlur('passwords'), value: values.passwords })),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Xa\u0301c th\u01B0\u0323c m\u00E2\u0323t kh\u00E2\u0309u m\u01A1\u0301i"),
                            react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                                react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('password'), onBlur: handleBlur('password'), value: values.password })),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonConfirm },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.textConfirm }, "XA\u0301C TH\u01AF\u0323C"))))),
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../../assets/ForgotPassword/background.png'), resizeMode: "cover", style: styles.bgImg },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/ForgotPassword/footerimg.png'), style: styles.demoImg }))))));
    }));
};
exports["default"] = NewPassword;
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
        fontSize: 22,
        color: "#394C6D",
        marginHorizontal: 40
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
        alignItems: "center"
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
        marginTop: 100
    },
    buttonConfirm: {
        width: '80%',
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
    },
    spaceForm: {
        marginTop: 50
    },
    demoImg: {
        marginTop: "130%"
    }
});
