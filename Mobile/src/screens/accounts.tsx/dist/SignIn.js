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
var react_1 = require("react");
var formik_1 = require("formik");
var Validation_1 = require("./Validation");
var useSignin_1 = require("../../hooks/useSignin");
var notificationHelper_1 = require("../../utils/notificationHelper");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var native_1 = require("@react-navigation/native");
var SignIn = function (_a) {
    var navigation = _a.navigation;
    var passwordRef = react_1.useRef();
    var _b = useSignin_1["default"]({ navigation: navigation }), handleSignin = _b.handleSignin, errorServer = _b.errorServer;
    var _c = react_1.useState(false), tokenChecked = _c[0], setTokenChecked = _c[1];
    var isFocused = native_1.useIsFocused();
    var _d = react_1.useState(""), deviceToken = _d[0], setDeviceToken = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    react_1.useEffect(function () {
        notificationHelper_1.requestUserPermission();
        getFcmToken();
    }, []);
    var getFcmToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, async_storage_1["default"].getItem("fcmToken")];
                case 1:
                    token = _a.sent();
                    if (token) {
                        setDeviceToken(token);
                        setLoading(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var checkLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_storage_1["default"].getItem('accessToken')];
                    case 1:
                        accessToken = _a.sent();
                        if (accessToken) {
                            navigation.navigate('Root');
                        }
                        else {
                            setTokenChecked(true);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        checkLogin();
    }, [isFocused]);
    if (!tokenChecked) {
        return null;
    }
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { email: '', password: '' }, validationSchema: Validation_1.SignupSchema, onSubmit: function (values) {
            setTimeout(function () {
                var account = {
                    email: values.email,
                    password: values.password,
                    deviceToken: deviceToken
                };
                handleSignin(account);
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
                                errors.password && touched.password ? (react_1["default"].createElement(react_native_1.Text, { style: styles.errorText }, errors.password)) : null)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.fromInput },
                            react_1["default"].createElement(react_native_1.View, { style: styles.confirmInfo },
                                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('ForgotPassword'); } },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlefg }, "Qu\u00EAn m\u00E2\u0323t kh\u00E2\u0309u?")),
                                react_1["default"].createElement(react_native_1.View, { style: styles.confirmcreate },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlefgs }, "Ch\u01B0a co\u0301 ta\u0300i khoa\u0309n! "),
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
        marginTop: 10,
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
        marginTop: 30,
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
