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
var datetimepicker_1 = require("@react-native-community/datetimepicker");
var native_1 = require("@react-navigation/native");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var FormBookSchedule = function (_a) {
    var route = _a.route;
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), error = _c[0], setError = _c[1];
    var _d = react_1.useState(false), submitted = _d[0], setSubmitted = _d[1];
    var serviceInfo = route.params.serviceInfo;
    var navigation = native_1.useNavigation();
    var _e = react_1.useState(new Date()), date = _e[0], setDate = _e[1];
    var _f = react_1.useState(new Date()), time = _f[0], setTime = _f[1];
    var _g = react_1.useState(false), showPicker = _g[0], setShowPicker = _g[1];
    var _h = react_1.useState(false), showTimePicker = _h[0], setShowTimePicker = _h[1];
    var _j = react_1.useState(new Date()), selectedDate = _j[0], setSelectedDate = _j[1];
    var _k = react_1.useState(new Date()), selectedTime = _k[0], setSelectedTime = _k[1];
    var currentDate = new Date();
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
    var handleSubmitInfoBooking = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var infoBooking;
        return __generator(this, function (_a) {
            setLoading(true);
            setSubmitted(true);
            if (!selectedDate || !selectedTime || !values.address || !values.demobug) {
                setError('Vui lòng nhập đầy đủ thông tin!');
                setLoading(false);
                return [2 /*return*/];
            }
            if (selectedDate.getFullYear() < currentDate.getFullYear() ||
                (selectedDate.getFullYear() === currentDate.getFullYear() &&
                    selectedDate.getMonth() < currentDate.getMonth()) ||
                (selectedDate.getFullYear() === currentDate.getFullYear() &&
                    selectedDate.getMonth() === currentDate.getMonth() &&
                    selectedDate.getDate() < currentDate.getDate())) {
                setError('Vui lòng chọn ngày từ ngày hiện tại trở đi!');
                setLoading(false);
                return [2 /*return*/];
            }
            if (selectedDate.getFullYear() === currentDate.getFullYear() &&
                selectedDate.getMonth() === currentDate.getMonth() &&
                selectedDate.getDate() === currentDate.getDate() &&
                selectedTime.getTime() < currentDate.getTime()) {
                setError('Vui lòng chọn giờ từ giờ hiện tại trở đi!');
                setLoading(false);
                return [2 /*return*/];
            }
            if (/^\d+$/.test(values.address)) {
                // Là toàn bộ số
                setError('Địa chỉ không hợp lệ!');
                setLoading(false);
                return [2 /*return*/];
            }
            if (/^\d+$/.test(values.address)) {
                // Là toàn bộ khoảng trắng
                setError('Địa chỉ không hợp lệ!');
                setLoading(false);
                return [2 /*return*/];
            }
            if (/^\d+$/.test(values.demobug)) {
                // Là toàn bộ số
                setError('Mô tả tình trạng không hợp lệ!');
                setLoading(false);
                return [2 /*return*/];
            }
            if (values.demobug.trim().length === 0) {
                setError('Mô tả tình trạng không hợp lệ!');
                setLoading(false);
                return [2 /*return*/];
            }
            else {
                setError('');
                setLoading(true);
                infoBooking = {
                    infoServiceBooking: serviceInfo,
                    date: selectedDate.toLocaleDateString('vi-VN'),
                    time: selectedTime.toLocaleTimeString('vi-VN'),
                    address: values.address,
                    bugService: values.demobug
                };
                navigation.navigate('ConfirmInforBooking', { infoBooking: infoBooking });
            }
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: {
            selectedDate: '',
            selectedTime: '',
            address: '',
            demobug: ''
        }, onSubmit: handleSubmitInfoBooking }, function (_a) {
        var errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, values = _a.values, handleSubmit = _a.handleSubmit;
        return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss },
            react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.editInfoCurrentUserContainer },
                react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: loading, onRequestClose: function () {
                        setLoading(false);
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                        react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                            react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                                react_1["default"].createElement(react_native_1.ActivityIndicator, { size: 40, color: "#FCA234" }))))),
                react_1["default"].createElement(react_native_1.View, { style: styles.form },
                    react_1["default"].createElement(react_native_1.View, { style: styles.styleTitle },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleForm }, "VUI LO\u0300NG NH\u00C2\u0323P TH\u00D4NG TIN B\u00CAN D\u01AF\u01A0\u0301I")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.boxInput },
                        react_1["default"].createElement(react_native_1.View, { style: { height: 25 } }, submitted && error !== '' && (react_1["default"].createElement(react_native_1.Text, { style: styles.messageError }, error))),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.inputDate, onPress: toggleDatepicker },
                            react_1["default"].createElement(react_native_1.TextInput, { style: { color: '#000000', width: '80%' }, enterKeyHint: 'next', value: date.toLocaleDateString('vi-VN'), placeholder: "Cho\u0323n nga\u0300y he\u0323n", placeholderTextColor: '#000000', editable: false }),
                            showPicker && (react_1["default"].createElement(datetimepicker_1["default"], { mode: "date", display: "spinner", value: selectedDate, onChange: onChange })),
                            react_1["default"].createElement(MaterialIcons_1["default"], { style: styles.clock, name: "date-range", size: 30, color: "#FCA234" })),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.inputDate, onPress: toggleTimepicker },
                            react_1["default"].createElement(react_native_1.TextInput, { style: { color: '#000000', width: '80%' }, enterKeyHint: 'next', value: time.toLocaleTimeString('vi-VN'), placeholder: "Cho\u0323n gi\u01A1\u0300 he\u0323n", placeholderTextColor: '#000000', editable: false }),
                            showTimePicker && (react_1["default"].createElement(datetimepicker_1["default"], { mode: "time", display: "spinner", value: selectedTime, onChange: onChangeTime })),
                            react_1["default"].createElement(AntDesign_1["default"], { style: styles.clock, name: "clockcircle", size: 30, color: "#FCA234" })),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', onChangeText: handleChange('address'), onBlur: handleBlur('address'), value: values.address, placeholder: "* \u0110i\u0323a chi\u0309" })),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputDate, enterKeyHint: 'next', numberOfLines: 4, multiline: true, onChangeText: handleChange('demobug'), onBlur: handleBlur('demobug'), value: values.demobug, placeholder: "* M\u00F4 ta\u0309 v\u00E2\u0301n \u0111\u00EA\u0300 h\u01B0 ho\u0309ng thi\u00EA\u0301t bi\u0323" }))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.imgFooter, source: require('../../assets/Form/book.png') }),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bgButton, onPress: handleSubmit },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameBook }, "\u0110\u0103\u0323t li\u0323ch")))))));
    }));
};
exports["default"] = FormBookSchedule;
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
    messageError: {
        color: 'red',
        fontWeight: 'bold'
    },
    clock: {
        marginHorizontal: 20
    },
    nameBook: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    imgFooter: {
        width: '50%',
        marginTop: 40
    },
    bgButton: {
        backgroundColor: '#FCA234',
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -20
    },
    boxInput: {
        marginVertical: 10,
        height: 245
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderColor: '#FCA234',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        paddingLeft: 15,
        color: '#000000',
        width: '100%'
    }
});
