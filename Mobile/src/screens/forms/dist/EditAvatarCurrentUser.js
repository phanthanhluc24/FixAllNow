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
var Entypo_1 = require("react-native-vector-icons/Entypo");
var react_native_document_picker_1 = require("react-native-document-picker");
var native_1 = require("@react-navigation/native");
var useUploadAvatarUser_1 = require("../../hooks/useUploadAvatarUser");
var EditAvatarCurrentUser = function (_a) {
    var route = _a.route;
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var navigation = native_1.useNavigation();
    var image = route.params.image;
    var _c = react_1.useState(image), singleFile = _c[0], setSingleFile = _c[1];
    react_1.useEffect(function () {
        setSingleFile(image);
    }, [image]);
    var selectFile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_document_picker_1["default"].pick({
                            type: [react_native_document_picker_1["default"].types.allFiles]
                        })];
                case 1:
                    res = (_a.sent())[0];
                    setSingleFile(res);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    setSingleFile(null);
                    if (react_native_document_picker_1["default"].isCancel(err_1)) {
                        navigation.navigate("Profile");
                    }
                    else {
                        throw err_1;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var sendData = useUploadAvatarUser_1["default"]().sendData;
    var handleSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var responseData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setLoading(true);
                    data.image = singleFile;
                    return [4 /*yield*/, sendData(data)];
                case 1:
                    responseData = _a.sent();
                    if (responseData) {
                        setLoading(false);
                        navigation.navigate('Profile', { reload: true });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setLoading(false);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleCancle = function () {
        navigation.navigate('Profile');
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: loading, onRequestClose: function () {
                setLoading(false);
            } },
            react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                    react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: 40, color: "#FCA234" }))))),
        react_1["default"].createElement(react_native_1.View, { style: { flex: 9 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.part },
                react_1["default"].createElement(react_native_1.View, null,
                    !!singleFile || (react_1["default"].createElement(react_native_1.View, { style: styles.selectedImage },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: selectFile, activeOpacity: 0.5 },
                            react_1["default"].createElement(react_native_1.View, { style: styles.imageView },
                                react_1["default"].createElement(Entypo_1["default"], { name: "camera", size: 50, color: "#FCA234" }))))),
                    singleFile && (react_1["default"].createElement(react_native_1.View, { style: styles.selectedImage },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: singleFile === null || singleFile === void 0 ? void 0 : singleFile.uri }, style: styles.imageStyle }),
                        react_1["default"].createElement(react_native_1.View, { style: { position: 'absolute' } },
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: selectFile },
                                react_1["default"].createElement(react_native_1.View, { style: styles.imageViews },
                                    react_1["default"].createElement(Entypo_1["default"], { name: "camera", size: 25, color: "#394C6D" }))))))))),
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, marginBottom: 10 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                    react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.bookNow, onPress: handleCancle },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "Hu\u0309y"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: handleSubmit },
                        react_1["default"].createElement(react_native_1.View, { style: styles.book },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "C\u00E2\u0323p nh\u00E2\u0323t"))))))));
};
exports["default"] = EditAvatarCurrentUser;
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
    selectedImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    imageStyle: {
        width: '90%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#FCA234',
        borderRadius: 10
    },
    imageViews: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#394C6D',
        backgroundColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
        marginHorizontal: 20,
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
    part: {
        marginVertical: 5
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
        color: '#000000'
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
