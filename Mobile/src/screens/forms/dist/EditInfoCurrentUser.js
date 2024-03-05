"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var native_1 = require("@react-navigation/native");
var useEditInfoCurrentUser_1 = require("../../hooks/useEditInfoCurrentUser");
var EditInfoCurrentUser = function (_a) {
    var route = _a.route;
    var navigation = native_1.useNavigation();
    var user = route.params.user;
    var _b = react_1.useState(user === null || user === void 0 ? void 0 : user.number_phone.toString()), number_phone = _b[0], setNumberPhone = _b[1];
    var _c = react_1.useState(user === null || user === void 0 ? void 0 : user.full_name), full_name = _c[0], setFullName = _c[1];
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
    var _d = react_hook_form_1.useForm(), control = _d.control, handleSubmit = _d.handleSubmit, errors = _d.formState.errors;
    var hasLettersAndNoNumbers = function (value) {
        return /[a-zA-Z]/.test(value) && !/\d/.test(value);
    };
    var hasNumbersOnly = function (value) {
        return /^\d+$/.test(value);
    };
    var onSubmit = function () {
        var formData = {
            full_name: full_name,
            number_phone: number_phone
        };
        useEditInfoCurrentUser_1["default"](formData);
        // Toast.show({
        //   type: ALERT_TYPE.SUCCESS,
        //   title: 'Thành công',
        //   textBody: 'Thông tin người dùng đã được chỉnh sửa!',
        // })
        navigation.navigate('Profile');
    };
    var handleCancle = function () {
        navigation.navigate('Profile');
    };
    return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled" },
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
                                return hasLettersAndNoNumbers(value) || 'Tên không được chỉ chứa số';
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
                                value: 10,
                                message: 'Số điện thoại phải có đủ 10 chữ số'
                            },
                            validate: function (value) { return hasNumbersOnly(value) || 'Số điện thoại chỉ được chứa số'; }
                        }, defaultValue: number_phone }),
                    errors.number_phone && (react_1["default"].createElement(react_native_1.Text, { style: { color: 'red' } }, errors.number_phone.message))),
                react_1["default"].createElement(react_native_1.View, { style: styles.part },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infoEdit }, "Email cu\u0309a ba\u0323n"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.email }, user === null || user === void 0 ? void 0 : user.email),
                    react_1["default"].createElement(react_native_1.View, { style: styles.selectedImage },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: user === null || user === void 0 ? void 0 : user.image }, style: styles.imageStyle })))),
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
    email: {
        fontSize: 15,
        padding: 10,
        color: 'white'
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
        marginTop: 15,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formEdit: {
        flex: 9,
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
