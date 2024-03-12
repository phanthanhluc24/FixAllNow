"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var formik_1 = require("formik");
var useResetNewPassword_1 = require("../../hooks/useResetNewPassword");
var ValidationNewPassword_1 = require("./ValidationNewPassword");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var NewPassword = function () {
    var _a = react_1.useState(''), errorMessage = _a[0], setErrorMessage = _a[1];
    var passwordRef = react_1.useRef();
    var navigation = native_1.useNavigation();
    var route = native_1.useRoute();
    var resetPasswordToken = route.params.resetPasswordToken;
    var handleResetSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var newPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPassword = {
                        tokenPassword: resetPasswordToken,
                        newPassword: values.newpassword,
                        confirmPassword: values.confirmpassword
                    };
                    return [4 /*yield*/, useResetNewPassword_1["default"](newPassword)
                            .then(function (res) {
                            if (res.status !== 201) {
                                setErrorMessage(res.message);
                            }
                            else {
                                react_native_alert_notification_1.Toast.show({
                                    type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                                    title: 'Thành công',
                                    textBody: 'Lấy lại mật khẩu thành công!'
                                });
                                navigation.navigate('SignIn');
                            }
                        })["catch"](function (error) { })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { newpassword: '', confirmpassword: '' }, validationSchema: ValidationNewPassword_1.NewPasswordSchema, onSubmit: handleResetSubmit }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.confirmContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.body },
                    react_1["default"].createElement(react_native_1.View, { style: styles.container },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "M\u00C2\u0323T KH\u00C2\u0309U M\u01A0\u0301I")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.spaceForm },
                            react_1["default"].createElement(react_native_1.View, { style: { height: 30 } }, errorMessage ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorMessage }, errorMessage)) : null),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "M\u00E2\u0323t kh\u00E2\u0309u m\u01A1\u0301i"),
                            react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainers },
                                react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                                    react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('newpassword'), enterKeyHint: 'next', secureTextEntry: true, onSubmitEditing: function () { var _a; return (_a = passwordRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, onBlur: handleBlur('newpassword'), value: values.newpassword })),
                                errors.newpassword && touched.newpassword ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText }, errors.newpassword)) : null),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Xa\u0301c th\u01B0\u0323c m\u00E2\u0323t kh\u00E2\u0309u"),
                            react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainers },
                                react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                                    react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, secureTextEntry: true, onChangeText: handleChange('confirmpassword'), onBlur: handleBlur('confirmpassword'), value: values.confirmpassword })),
                                errors.confirmpassword && touched.confirmpassword ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText }, errors.confirmpassword)) : null),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonConfirm, onPress: function (e) { return handleSubmit(); } },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.textConfirm }, "XA\u0301C TH\u01AF\u0323C"))))),
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../../assets/ForgotPassword/background.png'), resizeMode: "cover", style: styles.bgImg },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/ForgotPassword/footerimg.png'), style: styles.demoImg }))))));
    }));
};
exports["default"] = NewPassword;
var styles = react_native_1.StyleSheet.create({
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 8,
        marginHorizontal: 40,
        height: 40,
        paddingBottom: 20
    },
    errorText: {
        fontWeight: 'bold',
        color: 'red',
        margin: 0,
        padding: 0,
        marginHorizontal: 35
    },
    confirmContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    body: {
        flex: 1,
        position: 'absolute',
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
        fontSize: 20,
        color: '#394C6D',
        fontWeight: 'bold',
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
        width: '80%',
        paddingLeft: 15
    },
    spaceContainer: {
        alignItems: 'center'
    },
    spaceContainers: {
        height: 90
    },
    timeInput: {
        fontSize: 15,
        marginTop: 10
    },
    sentBack: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0000ff'
    },
    container: {
        marginTop: 70
    },
    buttonConfirm: {
        width: '80%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        height: 60,
        marginHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textConfirm: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    demo: {
        marginTop: '60%',
        marginRight: '-60%'
    },
    spaceForm: {
        marginTop: 10,
        height: 300
    },
    demoImg: {
        marginTop: '130%'
    }
});
