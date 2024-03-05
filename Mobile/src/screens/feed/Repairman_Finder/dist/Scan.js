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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var QuestionAndAnswer_1 = require("../../QuestionAndAnswer");
var useAskAiToGiveAnswer_1 = require("../../../hooks/useAskAiToGiveAnswer");
var Scan = function () {
    var _a = useAskAiToGiveAnswer_1["default"](), questionAndAnswer = _a.questionAndAnswer, answer = _a.answer, isLoading = _a.isLoading, setIsLoading = _a.setIsLoading;
    var _b = react_1.useState(""), question = _b[0], setQuestion = _b[1];
    var clientQuestion = { question: question };
    var handleSendQuestion = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, questionAndAnswer(clientQuestion)];
                case 1:
                    _a.sent();
                    react_native_1.Keyboard.dismiss();
                    setQuestion("");
                    setIsLoading(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.headerScan },
            react_1["default"].createElement(react_native_1.Image, { source: require("../../../assets/Landing/logo.png"), style: styles.image })),
        react_1["default"].createElement(QuestionAndAnswer_1["default"], { answer: answer, isLoading: isLoading }),
        react_1["default"].createElement(react_native_1.View, { style: { flex: 2 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.inputAskDiv },
                react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: styles.inputAsk, placeholder: "Nh\u1EADp c\u00E2u h\u1ECFi c\u1EE7a b\u1EA1n", multiline: true, value: question, onChangeText: function (text) { return setQuestion(text); } }),
                react_1["default"].createElement(Ionicons_1["default"], { name: "send", size: 24, color: "#000", style: styles.iconSend, onPress: handleSendQuestion })))));
};
exports["default"] = Scan;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    headerScan: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: 10
    },
    image: {
        height: 60,
        width: 60
    },
    inputAsk: {
        paddingLeft: 15,
        width: 270,
        height: 50
    },
    inputAskDiv: {
        width: "95%",
        height: 50,
        borderWidth: 1,
        borderColor: "#FCA234",
        borderRadius: 10,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20
    },
    dropdown: {
        margin: 5,
        height: 40,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 37,
        shadowColor: '#000',
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        paddingLeft: 15,
        elevation: 2
    },
    placeholderStyle: {
        fontSize: 16
    },
    selectedTextStyle: {
        fontSize: 16
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textItem: {
        flex: 1,
        fontSize: 16
    },
    textTitle: {
        fontSize: 18,
        color: "#FCA234",
        paddingBottom: 20
    },
    iconSend: {
        paddingRight: 10,
        alignSelf: "center"
    }
});
