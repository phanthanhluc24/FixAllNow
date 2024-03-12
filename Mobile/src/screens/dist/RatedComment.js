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
var native_1 = require("@react-navigation/native");
var StarRating_1 = require("./StarRating");
var useRatingComment_1 = require("../hooks/useRatingComment");
var react_native_alert_notification_1 = require("react-native-alert-notification");
var native_2 = require("@react-navigation/native");
var RatedComment = function () {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var route = native_2.useRoute();
    var service_id = route.params.service_id;
    var navigation = native_1.useNavigation();
    var _b = react_1.useState(''), content = _b[0], setContent = _b[1];
    var _c = react_1.useState(0), star = _c[0], setStar = _c[1];
    var _d = react_1.useState(''), error = _d[0], setError = _d[1];
    var handleStarPress = function (starValue) {
        setStar(starValue);
    };
    var handleContentChange = function (text) {
        setContent(text);
    };
    var sendData = useRatingComment_1["default"]().sendData;
    var handleSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var body, responseData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    if (content === '') {
                        setError('Vui lòng nhập nội dung đánh giá!');
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    if (star === 0) {
                        setError('Vui lòng chọn mức độ đánh giá!');
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    data.content = content;
                    data.star = star;
                    body = {
                        content: data.content,
                        star: data.star.toString()
                    };
                    return [4 /*yield*/, sendData(body, service_id)];
                case 1:
                    responseData = _a.sent();
                    if (responseData) {
                        setLoading(false);
                        react_native_alert_notification_1.Toast.show({
                            type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                            title: 'Thành công',
                            textBody: 'Đã đánh giá thành công!'
                        });
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Root' }]
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled" },
            react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: loading, onRequestClose: function () {
                    setLoading(false);
                } },
                react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                        react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                            react_1["default"].createElement(react_native_1.ActivityIndicator, { size: 40, color: "#FCA234" }))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.containerRatedComment },
                react_1["default"].createElement(react_native_1.View, { style: { marginVertical: 40 } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.messageErrors }, error !== '' && react_1["default"].createElement(react_native_1.Text, { style: styles.errorMessage }, error)),
                    react_1["default"].createElement(react_native_1.View, { style: styles.comment },
                        react_1["default"].createElement(react_native_1.TextInput, { multiline: true, style: styles.input, placeholderTextColor: '#394C69', placeholder: "Ha\u0303y \u0111a\u0301nh gia\u0301 theo ca\u0309m nh\u00E2\u0323n cu\u0309a ba\u0323n!", value: content, onChangeText: handleContentChange }))),
                react_1["default"].createElement(react_native_1.Text, { style: styles.level }, "M\u01B0\u0301c \u0111\u00F4\u0323 ha\u0300i lo\u0300ng:"),
                react_1["default"].createElement(StarRating_1["default"], { star: 0, onRatingPress: handleStarPress })),
            react_1["default"].createElement(react_native_1.View, { style: styles.bottom },
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bgButton, onPress: handleSubmit },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameBook }, "G\u01B0\u0309i")),
                    react_1["default"].createElement(react_native_1.Image, { style: styles.imgFooter, source: require('../assets/Form/double.png') }))))));
};
exports["default"] = RatedComment;
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
    messageErrors: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    errorMessage: {
        color: 'red'
    },
    nameBook: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    imgFooter: {
        width: '100%'
    },
    bgButton: {
        backgroundColor: '#394C6D',
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 50
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -20
    },
    boxInput: {
        marginVertical: 30
    },
    level: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    container: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    containerRatedComment: {
        marginHorizontal: 20,
        flex: 5
    },
    bottom: {
        flex: 5,
        marginHorizontal: 20
    },
    comment: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#394C6D',
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'white'
    }
});
