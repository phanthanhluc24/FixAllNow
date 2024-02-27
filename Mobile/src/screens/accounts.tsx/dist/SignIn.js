"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var formik_1 = require("formik");
var Validation_1 = require("./Validation");
var useSignin_1 = require("../../hooks/useSignin");
var SignIn = function (_a) {
    var navigation = _a.navigation;
    var passwordRef = react_1.useRef();
    var _b = useSignin_1["default"]({ navigation: navigation }), handleSignin = _b.handleSignin, errorServer = _b.errorServer;
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { email: '', password: '' }, validationSchema: Validation_1.SignupSchema, onSubmit: function (values) {
            setTimeout(function () {
                var account = {
                    email: values.email,
                    password: values.password
                };
                handleSignin(account);
                // console.log(account);
            }, 100);
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, values = _a.values, handleSubmit = _a.handleSubmit;
        return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss },
            react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.signInContainer },
                react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.signinHeader },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/SignIn/header.png'), style: styles.imgHeader })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.signinBody },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleSignin },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "\u0110\u0103ng nh\u00E2\u0323p")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.errorMessage }, errorServer != null && (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText },
                            "* ",
                            errorServer))),
                        react_1["default"].createElement(react_native_1.View, { style: styles.fromInput },
                            react_1["default"].createElement(react_native_1.View, null,
                                react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "Email"),
                                react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, enterKeyHint: 'next', onSubmitEditing: function () { var _a; return (_a = passwordRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, onChangeText: handleChange('email'), onBlur: handleBlur('email'), value: values.email }),
                                errors.email && touched.email ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText }, errors.email)) : null)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.fromInput },
                            react_1["default"].createElement(react_native_1.View, { style: styles.space },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.titlePassword }, "M\u00E2\u0323t Kh\u00E2\u0309u"),
                                react_1["default"].createElement(react_native_1.TextInput, { ref: passwordRef, style: styles.inputPassword, enterKeyHint: 'done', secureTextEntry: true, onSubmitEditing: function () { var _a; return (_a = passwordRef.current) === null || _a === void 0 ? void 0 : _a.clear(); }, onChangeText: handleChange('password'), onBlur: handleBlur('password'), value: values.password }),
                                errors.password && touched.password ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText }, errors.password)) : null),
                            react_1["default"].createElement(react_native_1.View, { style: styles.confirmInfo },
                                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('ForgotPassword'); } },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlefg }, "Qu\u00EAn m\u00E2\u0323t kh\u00E2\u0309u?")),
                                react_1["default"].createElement(react_native_1.View, { style: styles.confirmcreate },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlefgs }, "Ch\u01B0a co\u0301 ta\u0300i khoa\u0309n!"),
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.createacc, onPress: function () { return navigation.navigate('SelectRole'); } }, "\u0110\u0103ng ky\u0301"))),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonLogin, onPress: function (e) { return handleSubmit(); } },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.textLgoin }, "\u0110\u0103ng nh\u00E2\u0323p")))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.signinFooter },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/SignIn/footer.png'), style: styles.Imgfooter }))))));
    }));
};
exports["default"] = SignIn;
var styles = react_native_1.StyleSheet.create({
    signInContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    signinHeader: {
        marginLeft: 40
    },
    signinBody: {
        position: 'absolute',
        zIndex: 100,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 70,
        marginTop: '40%'
    },
    signinFooter: {},
    imgHeader: {
        marginLeft: 20
    },
    Imgfooter: {
        marginRight: 20,
        marginTop: 150
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    titleSignin: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    fromInput: {
        marginHorizontal: 40,
        marginTop: 15,
        height: 110
    },
    errorMessage: {
        marginHorizontal: 40,
        marginTop: 20
    },
    titleEmail: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputEmail: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        paddingLeft: 15
    },
    space: {
        marginTop: 1
    },
    titlePassword: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputPassword: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        paddingLeft: 15
    },
    confirmInfo: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlefg: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0000ff'
    },
    titlefgs: {
        color: '#394C6D',
        fontSize: 15
    },
    confirmcreate: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    createacc: {
        color: '#0000ff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    buttonLogin: {
        width: '100%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: '80%',
        zIndex: 3,
        height: 60
    },
    form: {
        position: 'absolute'
    },
    textLgoin: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    errorText: {
        fontWeight: 'bold',
        color: 'red',
        margin: 0,
        padding: 0
    }
});
