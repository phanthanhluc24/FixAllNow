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
var useVerificationEmail_1 = require("../../hooks/useVerificationEmail");
var ForgotPassword = function () {
    var navigation = native_1.useNavigation();
    var handleSubmitVerification = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(values.email);
                    return [4 /*yield*/, useVerificationEmail_1["default"](values.email)
                            .then(function (res) {
                            if (res.status != 201) {
                                react_native_1.Alert.alert(res.message);
                            }
                            else {
                                navigation.navigate("ConfirmCode", { code: res.code, refreshCode: res.refreshCode, resetPasswordToken: res.resetPasswordToken });
                                console.log(res.code);
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { email: '' }, onSubmit: handleSubmitVerification }, function (_a) {
        var handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.confirmContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.body },
                    react_1["default"].createElement(react_native_1.View, { style: styles.container },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "XA\u0301C TH\u01AF\u0323C TA\u0300I KHOA\u0309N")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Vui lo\u0300ng nh\u00E2\u0323p Email!"),
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('email'), onBlur: handleBlur('email'), value: values.email, enterKeyHint: 'done' }),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleSubmit, style: styles.buttonConfirm },
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
