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
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var native_1 = require("@react-navigation/native");
var useLogout_1 = require("../hooks/useLogout");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var ButtonLogout_1 = require("./bottomTab/ButtonLogout");
var react_native_document_picker_1 = require("react-native-document-picker");
var ProfileHeaderRepairmanFinder = function () {
    var navigation = native_1.useNavigation();
    var logout = useLogout_1["default"]().logout;
    var _a = react_1.useState(""), token = _a[0], setToken = _a[1];
    react_1.useEffect(function () {
        var getToken = function () { return __awaiter(void 0, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_storage_1["default"].getItem('accessToken')];
                    case 1:
                        accessToken = _a.sent();
                        setToken(accessToken);
                        return [2 /*return*/];
                }
            });
        }); };
        getToken();
    });
    var _b = useGetCurrentUser_1["default"](), currentUser = _b.currentUser, isLoading = _b.isLoading, isError = _b.isError;
    var _c = react_1.useState(null), singleFile = _c[0], setSingleFile = _c[1];
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
                    if (res) {
                        navigation.navigate('EditAvatarCurrentUser', { image: res });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    setSingleFile(null);
                    if (react_native_document_picker_1["default"].isCancel(err_1)) {
                    }
                    else {
                        throw err_1;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.profileHeader },
        react_1["default"].createElement(react_native_1.View, { style: styles.infoProfile },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.avatarPro },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatarProfile, source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image } }),
                react_1["default"].createElement(react_native_1.View, { style: { position: 'absolute' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: selectFile },
                        react_1["default"].createElement(react_native_1.View, { style: styles.imageViews },
                            react_1["default"].createElement(Entypo_1["default"], { name: "camera", size: 20, color: "#394C6D" }))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.contentProfile },
                react_1["default"].createElement(react_native_1.View, { style: styles.styleProfile },
                    react_1["default"].createElement(react_native_1.View, { style: styles.info },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameProfile }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.full_name)),
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonEvent },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.iconEdit, onPress: function () { return navigation.navigate('EditInfoCurrentUser', { user: currentUser }); } },
                            react_1["default"].createElement(Entypo_1["default"], { name: "edit", size: 24, color: "white" })),
                        react_1["default"].createElement(ButtonLogout_1["default"], null))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.infoQuality },
            react_1["default"].createElement(react_native_1.View, { style: styles.email },
                react_1["default"].createElement(react_native_1.Text, null,
                    react_1["default"].createElement(MaterialIcons_1["default"], { name: "email", size: 24, color: "#394C6D" })),
                react_1["default"].createElement(react_native_1.View, { style: styles.infoEmail },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameEmail }, "Email"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detailEmail }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.email))),
            react_1["default"].createElement(react_native_1.View, { style: styles.phone },
                react_1["default"].createElement(react_native_1.Text, null,
                    react_1["default"].createElement(Entypo_1["default"], { name: "phone", size: 24, color: "#394C6D" })),
                react_1["default"].createElement(react_native_1.View, { style: styles.infoPhone },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.namePhone }, "S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detailPhone },
                        "(+84)", currentUser === null || currentUser === void 0 ? void 0 :
                        currentUser.number_phone))))));
};
exports["default"] = ProfileHeaderRepairmanFinder;
var styles = react_native_1.StyleSheet.create({
    imageViews: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#394C6D',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 50
    },
    buttonEvent: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginRight: 25
    },
    detailEmail: {
        fontSize: 15,
        color: '#394C6D'
    },
    detailPhone: {
        fontSize: 15,
        color: '#394C6D'
    },
    namePhone: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    nameEmail: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    infoPhone: {
        marginHorizontal: 10
    },
    infoEmail: {
        marginHorizontal: 10
    },
    phone: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    email: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoQuality: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20
    },
    iconEdit: {
        width: 100,
        height: 40,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#394C6D"
    },
    info: {
        alignItems: 'center'
    },
    jobProfile: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    nameProfile: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    styleProfile: {
        alignItems: 'center'
    },
    contentProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    profileHeader: {
        flex: 1,
        backgroundColor: '#fffff0'
    },
    infoProfile: {
        marginHorizontal: 20
    },
    avatarProfile: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#394C6D"
    },
    avatarPro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    }
});
