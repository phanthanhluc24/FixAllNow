"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var native_1 = require("@react-navigation/native");
var useSignup_1 = require("../../hooks/useSignup");
var SignUp = function () {
    var _a = react_1.useState(null), errorServer = _a[0], setErrorServer = _a[1];
    var _b = react_1.useState(false), phoneNumberEntered = _b[0], setPhoneNumberEntered = _b[1];
    var route = native_1.useRoute();
    var _c = route.params || {}, selectedRole = _c.selectedRole, _id = _c._id, address = _c.address;
    var navigation = native_1.useNavigation();
    var _d = react_1.useState(''), error = _d[0], setError = _d[1];
    var _e = react_1.useState({
        number_phone: null,
        full_name: '',
        email: '',
        password: ''
    }), register = _e[0], setRegister = _e[1];
    var _f = react_1.useState({
        full_name: false,
        email: false,
        number_phone: false,
        password: false
    }), inputErrors = _f[0], setInputErrors = _f[1];
    var handleInputChange = function (field, text) { return function () {
        var _a, _b;
        setRegister(__assign(__assign({}, register), (_a = {}, _a[field] = text, _a)));
        setInputErrors(__assign(__assign({}, inputErrors), (_b = {}, _b[field] = false, _b)));
        if (field === 'number_phone' && text.length === 10) {
            setPhoneNumberEntered(true);
        }
        else {
            setPhoneNumberEntered(false);
        }
    }; };
    var repairmanRegister = {
        full_name: register.full_name,
        email: register.email,
        number_phone: register.number_phone,
        password: register.password,
        address: address,
        role: selectedRole,
        category_id: _id
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isValid, newInputErrors, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isValid = true;
                    newInputErrors = __assign({}, inputErrors);
                    if (!register.full_name) {
                        newInputErrors.full_name = true;
                        isValid = false;
                    }
                    if (!register.email) {
                        newInputErrors.email = true;
                        isValid = false;
                    }
                    if (!register.number_phone) {
                        newInputErrors.number_phone = true;
                        isValid = false;
                    }
                    if (!register.password) {
                        newInputErrors.password = true;
                        isValid = false;
                    }
                    setInputErrors(newInputErrors);
                    if (!isValid) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, useSignup_1["default"](repairmanRegister)
                            .then(function (res) {
                            if (res.status != 201) {
                                setErrorServer(res.message);
                            }
                            else {
                                navigation.navigate('ConfirmCode', { code: res.code, refreshCode: res.refreshCode });
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.signUpContainer },
        react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.headerImg },
                react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/SignUp/headers.png'), style: styles.imgHeader })),
            react_1["default"].createElement(react_native_1.View, { style: styles.signupBody },
                react_1["default"].createElement(react_native_1.View, { style: styles.titleSignup },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "\u0110\u0102NG KY\u0301")),
                react_1["default"].createElement(react_native_1.Text, { style: styles.error }, !phoneNumberEntered && errorServer),
                react_1["default"].createElement(react_native_1.View, { style: styles.fromInput },
                    react_1["default"].createElement(react_native_1.View, { style: styles.space },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "Ho\u0323 va\u0300 t\u00EAn"),
                        react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, onChangeText: function (text) { return handleInputChange('full_name', text)(); } }),
                        inputErrors.full_name && react_1["default"].createElement(react_native_1.Text, { style: styles.errorMessage }, "* Ho\u0323 t\u00EAn kh\u00F4ng bo\u0309 tr\u00F4\u0301ng")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.space },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "Email"),
                        react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, onChangeText: function (text) { return handleInputChange('email', text)(); } }),
                        inputErrors.email && react_1["default"].createElement(react_native_1.Text, { style: styles.errorMessage }, "* Email kh\u00F4ng bo\u0309 tr\u00F4\u0301ng")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.space },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleEmail }, "S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i"),
                        react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputEmail, onChangeText: function (text) { return handleInputChange('number_phone', text)(); } }),
                        inputErrors.number_phone && react_1["default"].createElement(react_native_1.Text, { style: styles.errorMessage }, "* S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i kh\u00F4ng bo\u0309 tr\u00F4\u0301ng")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.space },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titlePassword }, "M\u00E2\u0323t Kh\u00E2\u0309u"),
                        react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputPassword, secureTextEntry: true, onChangeText: function (text) { return handleInputChange('password', text)(); } }),
                        inputErrors.password && react_1["default"].createElement(react_native_1.Text, { style: styles.errorMessage }, "* M\u00E2\u0323t kh\u00E2\u0309u kh\u00F4ng bo\u0309 tr\u00F4\u0301ng")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.confirmInfo },
                        react_1["default"].createElement(react_native_1.View, { style: styles.confirmcreate },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titlefg },
                                "Ba\u0323n \u0111a\u0303 co\u0301 ta\u0300i khoa\u0309n ch\u01B0a?",
                                ' '),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.createAcc, onPress: function () { return navigation.navigate('SignIn'); } }, "\u0110\u0103ng nh\u00E2\u0323p"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonLogin, onPress: handleSubmit },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.textLgoin }, "\u0110\u0103ng ky\u0301")))))));
};
exports["default"] = SignUp;
var styles = react_native_1.StyleSheet.create({
    errorMessage: {
        color: "red",
        fontWeight: "bold"
    },
    signUpContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    signupBody: {
        flex: 14,
        justifyContent: 'center',
        width: '100%',
        marginTop: '10%',
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
        marginHorizontal: 40
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
        borderWidth: 1,
        paddingLeft: 15
    },
    space: {
        height: 110
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
        borderWidth: 1,
        paddingLeft: 15
    },
    confirmInfo: {
        marginTop: 10,
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
        marginTop: 500,
        zIndex: 3,
        height: 60
    },
    textLgoin: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    errorText: {
        fontWeight: 'bold',
        color: 'red',
        margin: 0,
        padding: 0
    },
    error: {
        fontWeight: 'bold',
        color: "red",
        paddingLeft: 40,
        marginTop: 45
    }
});
