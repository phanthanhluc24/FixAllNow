"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var formik_1 = require("formik");
var datetimepicker_1 = require("@react-native-community/datetimepicker");
var native_1 = require("@react-navigation/native");
var FormBookSchedule = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(new Date()), date = _a[0], setDate = _a[1];
    var _b = react_1.useState(new Date()), time = _b[0], setTime = _b[1];
    var _c = react_1.useState(false), showPicker = _c[0], setShowPicker = _c[1];
    var _d = react_1.useState(false), showTimePicker = _d[0], setShowTimePicker = _d[1];
    var _e = react_1.useState(new Date()), selectedDate = _e[0], setSelectedDate = _e[1];
    var _f = react_1.useState(new Date()), selectedTime = _f[0], setSelectedTime = _f[1];
    var toggleDatepicker = function () {
        setShowPicker(!showPicker);
    };
    var onChange = function (_a, selectedDate) {
        var type = _a.type;
        var currentDate = selectedDate || date;
        setShowPicker(react_native_1.Platform.OS === 'ios');
        setSelectedDate(currentDate);
        setDate(currentDate);
    };
    var toggleTimepicker = function () {
        setShowTimePicker(!showTimePicker);
    };
    var onChangeTime = function (_a, selectedTime) {
        var type = _a.type;
        var currentTime = selectedTime || time;
        setShowTimePicker(react_native_1.Platform.OS === 'ios');
        setSelectedTime(currentTime);
        setTime(currentTime);
    };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: {}, onSubmit: function (values) {
            setTimeout(function () {
                var account = {
                    email: values.email,
                    password: values.password
                };
                handleInfo(account);
                // console.log(account);
            }, 100);
        } }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, values = _a.values, handleSubmit = _a.handleSubmit;
        return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss },
            react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.editInfoCurrentUserContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.form },
                    react_1["default"].createElement(react_native_1.View, { style: styles.styleTitle },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleForm }, "VUI LO\u0300NG NH\u00C2\u0323P TH\u00D4NG TIN B\u00CAN D\u01AF\u01A0\u0301I")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.boxInput },
                        react_1["default"].createElement(react_native_1.View, null,
                            showPicker && (react_1["default"].createElement(datetimepicker_1["default"], { mode: "date", display: "spinner", value: selectedDate, onChange: onChange })),
                            !showPicker && (react_1["default"].createElement(react_native_1.Pressable, { onPress: toggleDatepicker },
                                react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: setDate, 
                                    // onBlur={handleBlur('date')}
                                    value: date.toLocaleDateString('vi-VN'), placeholder: "Cho\u0323n nga\u0300y he\u0323n", editable: false })))),
                        react_1["default"].createElement(react_native_1.View, null,
                            showTimePicker && (react_1["default"].createElement(datetimepicker_1["default"], { mode: "time", display: "spinner", value: selectedTime, onChange: onChangeTime })),
                            !showTimePicker && (react_1["default"].createElement(react_native_1.Pressable, { onPress: toggleTimepicker },
                                react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: setTime, 
                                    // onBlur={handleBlur('time')}
                                    value: time.toLocaleTimeString('vi-VN'), placeholder: "Cho\u0323n th\u01A1\u0300i gian", editable: false })))),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: handleChange('full_name'), onBlur: handleBlur('full_name'), value: values.full_name, placeholder: "Ho\u0323 va\u0300 t\u00EAn" })),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: handleChange('number_phone'), onBlur: handleBlur('number_phone'), value: values.number_phone, placeholder: "S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i" })),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: handleChange('address'), onBlur: handleBlur('address'), value: values.address, placeholder: "\u0110i\u0323a chi\u0309" })),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: handleChange('demobug'), onBlur: handleBlur('demobug'), value: values.demobug, placeholder: "M\u00F4 ta\u0309 v\u00E2\u0301n \u0111\u00EA\u0300 h\u01B0 ho\u0309ng thi\u00EA\u0301t bi\u0323" }))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.imgFooter, source: require('../../assets/Form/book.png') }),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bgButton, onPress: function () { return navigation.navigate('ConfirmInforBooking'); } },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameBook }, "\u0110\u0103\u0323t li\u0323ch")))))));
    }));
};
exports["default"] = FormBookSchedule;
var styles = react_native_1.StyleSheet.create({
    nameBook: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    imgFooter: {
        width: '50%'
    },
    bgButton: {
        backgroundColor: '#FCA234',
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10,
        borderWidth: 2
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -20
    },
    boxInput: {
        marginVertical: 30
    },
    styleTitle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleForm: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    form: {
        marginHorizontal: 20,
        paddingVertical: 20
    },
    editInfoCurrentUserContainer: {
        flex: 1,
        backgroundColor: '#394C6D'
    },
    inputDate: {
        backgroundColor: 'white',
        borderColor: '#FCA234',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        paddingLeft: 15,
        color: '#000000'
    }
});
