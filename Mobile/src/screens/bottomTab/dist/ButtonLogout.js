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
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var useLogout_1 = require("../../hooks/useLogout");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var native_1 = require("@react-navigation/native");
var ButtonLogout = function () {
    var logout = useLogout_1["default"]().logout;
    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];
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
    }, []);
    var navigation = native_1.useNavigation();
    var handleLogout = function () {
        logout(token)
            .then(function (res) {
            if (res.status === 201) {
                navigation.navigate('SignIn');
            }
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return (react_1["default"].createElement(react_native_gesture_handler_1.TouchableOpacity, { style: styles.iconEdit, onPress: handleLogout },
        react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "logout", size: 24, color: "#394C6D" })));
};
exports["default"] = ButtonLogout;
var styles = react_native_1.StyleSheet.create({
    iconEdit: {
        marginLeft: 20,
        marginVertical: 5
    }
});
