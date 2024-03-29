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
var react_hook_form_1 = require("react-hook-form");
var native_1 = require("@react-navigation/native");
var useEditInfoCurrentUser_1 = require("../../hooks/useEditInfoCurrentUser");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var EditInfoCurrentUser = function (_a) {
    var route = _a.route;
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var navigation = native_1.useNavigation();
    var user = route.params.user;
    var _c = react_1.useState(user === null || user === void 0 ? void 0 : user.number_phone.toString()), number_phone = _c[0], setNumberPhone = _c[1];
    var _d = react_1.useState(user === null || user === void 0 ? void 0 : user.full_name), full_name = _d[0], setFullName = _d[1];
    var handleInputChange = function (fieldName, value) {
        switch (fieldName) {
            case 'full_name':
                setFullName(value);
                break;
            case 'number_phone':
                setNumberPhone(value);
                break;
            default:
                break;
        }
    };
    var _e = react_hook_form_1.useForm(), control = _e.control, handleSubmit = _e.handleSubmit, errors = _e.formState.errors;
    var hasLettersAndNoNumbers = function (value) {
        return /[a-zA-Z]/.test(value) && !/\d/.test(value);
    };
    var hasNumbersOnly = function (value) {
        return /^\d+$/.test(value);
    };
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, editSuccess, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = {
                        full_name: full_name,
                        number_phone: 0 + number_phone
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setLoading(true);
                    return [4 /*yield*/, useEditInfoCurrentUser_1["default"](formData)];
                case 2:
                    editSuccess = _a.sent();
                    if (editSuccess) {
                        setLoading(false);
                        react_native_alert_notification_1.Toast.show({
                            type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                            title: 'Thành công',
                            textBody: "Thông tin người dùng thay đổi thành công!"
                        });
                        navigation.navigate('Profile', { reload: true });
                    }
                    else {
                        console.error('Lỗi khi edit thông tin người dùng');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Lỗi khi edit thông tin người dùng:', error_1);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleCancle = function () {
        navigation.navigate('Profile');
    };
    return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled" },
            react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: loading, onRequestClose: function () {
                    setLoading(false);
                } },
                react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                        react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: 40, color: "#FCA234" }))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.formEdit },
                react_1["default"].createElement(react_native_1.View, { style: styles.part },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoEdit }, "T\u00EAn cu\u0309a ba\u0323n "),
                    react_1["default"].createElement(react_hook_form_1.Controller, { control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputInfo, onBlur: onBlur, onChangeText: function (text) {
                                    onChange(text);
                                    handleInputChange('full_name', text);
                                }, value: value, defaultValue: full_name }));
                        }, name: "full_name", rules: {
                            required: 'Tên không được bỏ trống',
                            validate: function (value) {
                                return hasLettersAndNoNumbers(value) || 'Tên không hợp lệ';
                            }
                        }, defaultValue: full_name }),
                    errors.full_name && (react_1["default"].createElement(react_native_1.Text, { style: { color: 'red' } }, errors.full_name.message))),
                react_1["default"].createElement(react_native_1.View, { style: styles.part },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoEdit }, "S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i"),
                    react_1["default"].createElement(react_hook_form_1.Controller, { control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (react_1["default"].createElement(react_native_1.View, { style: styles.inputInfo },
                                react_1["default"].createElement(react_native_1.Text, null, "(+84)"),
                                react_1["default"].createElement(react_native_1.TextInput, { onBlur: onBlur, onChangeText: function (text) {
                                        onChange(text);
                                        handleInputChange('number_phone', text);
                                    }, value: value, defaultValue: number_phone })));
                        }, name: "number_phone", rules: {
                            required: 'Số điện thoại không được bỏ trống',
                            minLength: {
                                value: 9,
                                message: 'Số điện thoại không được nhỏ hơn 9'
                            },
                            maxLength: {
                                value: 9,
                                message: 'Số điện thoại không được lớn hơn 9'
                            },
                            validate: function (value) { return hasNumbersOnly(value) || 'Số điện thoại chỉ được chứa số'; }
                        }, defaultValue: number_phone }),
                    errors.number_phone && (react_1["default"].createElement(react_native_1.Text, { style: { color: 'red' } }, errors.number_phone.message))),
                react_1["default"].createElement(react_native_1.View, { style: styles.part },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoEdit }, "Email cu\u0309a ba\u0323n"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.formEmail },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.email }, user === null || user === void 0 ? void 0 : user.email)))),
            react_1["default"].createElement(react_native_1.View, { style: styles.eventSubmit },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                        react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bookNow, onPress: handleCancle },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "Hu\u0309y"))),
                        react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.book, onPress: handleSubmit(onSubmit) },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "C\u1EADp nh\u1EADt")))))))));
};
exports["default"] = EditInfoCurrentUser;
var styles = react_native_1.StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5
    },
    formEmail: {
        backgroundColor: "white",
        height: 50,
        borderColor: '#FCA234',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5,
        justifyContent: "center"
    },
    email: {
        fontSize: 15,
        padding: 10,
        color: 'black'
    },
    imageViews: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#394C6D',
        backgroundColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 140,
        marginTop: 140
    },
    selectedImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 10
    },
    imageView: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginVertical: 10
    },
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    button1: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookNow: {
        width: '80%',
        height: 50,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    book: {
        width: '80%',
        height: 50,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    books: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    part: {
        marginVertical: 5,
        height: 100
    },
    infoEdit: {
        color: '#FCA234',
        fontSize: 15,
        fontWeight: 'bold'
    },
    eventSubmit: {
        flex: 26,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formEdit: {
        flex: 3,
        marginVertical: 20
    },
    container: {
        backgroundColor: '#394C69',
        flex: 1,
        paddingHorizontal: 20
    },
    inputInfo: {
        backgroundColor: 'white',
        borderColor: '#FCA234',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        paddingLeft: 15,
        color: '#000000',
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center'
    }
});
