"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var formik_1 = require("formik");
var native_1 = require("@react-navigation/native");
var Validation_Signup_1 = require("./Validation_Signup");
var SignUp = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { number_phone: '', full_name: '', email: '', password: '' }, validationSchema: Validation_Signup_1.Signup_Schema, onSubmit: function (values) {
            setTimeout(function () {
                var data = {
                    full_name: values.full_name,
                    number_phone: values.number_phone,
                    email: values.email,
                    password: values.password
                };
                // handleSinup(data);
            }, 200);
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.signUpContainer },
            react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss }),
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.headerImg },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/SignUp/headers.png'), style: styles.imgHeader })),
                react_1["default"].createElement(react_native_1.View, { style: styles.signupBody },
                    react_1["default"].createElement(react_native_1.View, { style: styles.titleSignup },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "\u0110\u0102NG KY\u0301")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.fromInput },
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "Ho\u0323 va\u0300 t\u00EAn"),
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, onChangeText: handleChange('full_name'), onBlur: handleBlur('full_name'), value: values.full_name }),
                            errors.full_name && touched.full_name ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText },
                                "* ",
                                errors.full_name)) : null),
                        react_1["default"].createElement(react_native_1.View, { style: styles.space },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "Email"),
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, onChangeText: handleChange('email'), onBlur: handleBlur('email'), value: values.email }),
                            errors.email && touched.email ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText },
                                "* ",
                                errors.email)) : null),
                        react_1["default"].createElement(react_native_1.View, { style: styles.space },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i"),
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, onChangeText: handleChange('number_phone'), onBlur: handleBlur('number_phone'), value: values.number_phone }),
                            errors.number_phone && touched.number_phone ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText },
                                "* ",
                                errors.number_phone)) : null),
                        react_1["default"].createElement(react_native_1.View, { style: styles.space },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titlePassword }, "M\u00E2\u0323t Kh\u00E2\u0309u"),
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputPassword, onChangeText: handleChange('password'), onBlur: handleBlur('password'), value: values.password }),
                            errors.password && touched.password ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText },
                                "* ",
                                errors.password)) : null),
                        react_1["default"].createElement(react_native_1.View, { style: styles.confirmInfo },
                            react_1["default"].createElement(react_native_1.View, { style: styles.confirmcreate },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.titlefg }, "Ba\u0323n \u0111a\u0303 co\u0301 ta\u0300i khoa\u0309n ch\u01B0a?"),
                                react_1["default"].createElement(react_native_1.Text, { style: styles.createAcc, onPress: function () { return navigation.navigate('SignIn'); } }, "\u0110\u0103ng nh\u00E2\u0323p"))),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonLogin },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.textLgoin, onPress: function () { return navigation.navigate('ConfirmCode'); } }, "\u0110\u0103ng ky\u0301"))))),
            react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, null)));
    }));
};
exports["default"] = SignUp;
var styles = react_native_1.StyleSheet.create({
    signUpContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    signupBody: {
        flex: 14,
        justifyContent: 'center',
        width: '100%',
        marginTop: '30%',
        position: 'absolute',
        zIndex: 2
    },
    headerImg: {
        flex: 1
    },
    imgHeader: {
        marginRight: 20
    },
    imgFooter: {
        marginLeft: '40%',
        height: 250
    },
    title: {
        color: '#394C6D',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleSignup: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    fromInput: {
        marginHorizontal: 40,
        marginTop: 20
    },
    titleEmail: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputEmail: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1
    },
    space: {
        marginTop: 20
    },
    titlePassword: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputPassword: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1
    },
    confirmInfo: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlefg: {
        color: '#394C6D',
        fontSize: 15
    },
    confirmcreate: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    createAcc: {
        color: '#0000ff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonLogin: {
        width: '100%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: 440,
        zIndex: 3,
        height: 60
    },
    textLgoin: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    errorText: {
        fontWeight: 'bold',
        color: 'red',
        margin: 0,
        padding: 0
    }
});
