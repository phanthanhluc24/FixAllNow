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
var Feather_1 = require("react-native-vector-icons/Feather");
var axios_1 = require("axios");
var url_1 = require("../hooks/apiRequest/url");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var native_1 = require("@react-navigation/native");
var HeaderSearch = function (_a) {
    var onSearch = _a.onSearch;
    var navigation = native_1.useNavigation();
    var _b = useGetCurrentUser_1["default"](), currentUser = _b.currentUser, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading) {
        react_1["default"].createElement(react_native_1.Text, null, "loading...");
    }
    if (isError) {
        react_1["default"].createElement(react_native_1.Text, null, "....");
    }
    var _c = react_1.useState(''), searchValue = _c[0], setSearchValue = _c[1];
    var handleSearchChange = function (text) {
        setSearchValue(text);
    };
    var handleSearch = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accessToken, response, searchData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, async_storage_1["default"].getItem('accessToken')];
                case 1:
                    accessToken = _a.sent();
                    return [4 /*yield*/, axios_1["default"].post(url_1.url + "/service/research", {
                            search: searchValue
                        }, {
                            headers: { Authorization: "Bearer " + accessToken }
                        })];
                case 2:
                    response = _a.sent();
                    searchData = response.data.data;
                    onSearch(searchData);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error searching:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.SearchBarContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.SearchInputs },
            react_1["default"].createElement(react_native_1.View, { style: styles.searchInput },
                react_1["default"].createElement(react_native_1.TextInput, { multiline: true, value: searchValue, onChangeText: handleSearchChange, placeholder: "Ti\u0300m ki\u00EA\u0301m di\u0323ch vu\u0323" }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.messageIcon, onPress: handleSearch },
                    react_1["default"].createElement(Feather_1["default"], { name: "search", color: "black", size: 28 }))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile'); } },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image }, style: styles.images })))));
};
exports["default"] = HeaderSearch;
var styles = react_native_1.StyleSheet.create({
    SearchBarContainer: {
        flex: 1
    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        width: '80%',
        backgroundColor: 'white',
        paddingLeft: 15
    },
    SearchInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    messageIcon: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    images: {
        width: 50, height: 50, borderRadius: 100
    }
});
