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
var native_1 = require("@react-navigation/native");
var useSendVerificationCode_1 = require("../../hooks/useSendVerificationCode");
var ConfirmCode = function () {
    var _a = react_1.useState(180), countdown = _a[0], setCountdown = _a[1];
    var _b = react_1.useState(''), countdownMessage = _b[0], setCountdownMessage = _b[1];
    var navigation = native_1.useNavigation();
    var router = native_1.useRoute();
    var code = router.params.code;
    react_1.useEffect(function () {
        var interval;
        if (countdown > 0) {
            interval = setInterval(function () {
                setCountdown(function (prevCountdown) {
                    return prevCountdown > 0 ? prevCountdown - 1 : 0;
                });
            }, 1000);
        }
        else {
            setCountdownMessage('Mã xác thực hết hiệu lực');
        }
        return function () {
            clearInterval(interval);
            if (countdown === 0) {
                react_native_1.Alert.alert('Mã xác thực hết hiệu lực');
            }
        };
    }, [countdown]);
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(code);
                    return [4 /*yield*/, useSendVerificationCode_1["default"]({ codeToken: code, code: values.code }).then(function (res) {
                            if (res.status != 201) {
                                react_native_1.Alert.alert(res.message);
                            }
                            else {
                                navigation.navigate('Home');
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { code: '' }, onSubmit: handleSubmit }, function (_a) {
        var handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.confirmContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.body },
                    react_1["default"].createElement(react_native_1.View, { style: styles.container },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "NH\u00C2\u0323P MA\u0303 XA\u0301C TH\u01AF\u0323C")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('code'), onBlur: handleBlur('code'), value: values.code }),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.timeInput }, countdownMessage ||
                                "M\u00E3 s\u1EBD h\u1EBFt h\u1EA1n trong v\u00F2ng " + Math.floor(countdown / 60) + ":" + (countdown % 60 < 10 ? '0' : '') + countdown % 60 + "  ph\u00FAt"),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.sentBack }, "G\u01B0\u0309i la\u0323i ma\u0303"),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonConfirm, onPress: handleSubmit },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.textConfirm }, "XA\u0301C TH\u01AF\u0323C"))))),
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../../assets/Confirm/imgFooter.png'), resizeMode: "cover", style: styles.bgImg },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/Confirm/imgDemo.png') }))))));
    }));
};
exports["default"] = ConfirmCode;
var styles = react_native_1.StyleSheet.create({
    confirmContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    body: {
        flex: 2
    },
    footer: {
        flex: 1
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
        width: '80%'
    },
    spaceContainer: {
        alignItems: 'center',
        marginTop: 80
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
        marginTop: 40
    },
    buttonConfirm: {
        width: '80%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        height: 60,
        marginHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    textConfirm: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});