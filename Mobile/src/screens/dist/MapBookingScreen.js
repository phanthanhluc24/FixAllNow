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
var react_native_maps_1 = require("react-native-maps");
var Feather_1 = require("react-native-vector-icons/Feather");
var MapBookingScreen = function (_a) {
    var route = _a.route;
    var serviceInfo = route.params.serviceInfo;
    console.log(serviceInfo);
    var _b = react_1.useState(null), coordinates = _b[0], setCoordinates = _b[1];
    var _c = react_1.useState(null), userLocation = _c[0], setUserLocation = _c[1];
    var _d = react_1.useState(''), userAddress = _d[0], setUserAddress = _d[1];
    react_1.useEffect(function () {
        if (serviceInfo.user_id.address) {
            getCoordinatesFromAddress(serviceInfo.user_id.address, setCoordinates);
        }
    }, [serviceInfo]);
    react_1.useEffect(function () {
        if (userAddress) {
            getCoordinatesFromAddress(userAddress, setUserLocation);
        }
    }, [userAddress]);
    var getCoordinatesFromAddress = function (address, setLocation) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, location, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address) + "&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzld")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (data.results && data.results.length > 0) {
                        location = data.results[0].geometry.location;
                        console.log(location);
                        setLocation(location);
                    }
                    else {
                        throw new Error('Không tìm thấy địa chỉ.');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Lỗi khi lấy tọa độ từ địa chỉ.', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
        react_1["default"].createElement(react_native_1.View, { style: styles.searchInput },
            react_1["default"].createElement(react_native_1.TextInput, { multiline: true, value: userAddress, onChangeText: setUserAddress, placeholder: "Nh\u00E2\u0323p vi\u0323 tri\u0301 cu\u0309a ba\u0323n ta\u0323i \u0111\u00E2y" }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.messageIcon },
                react_1["default"].createElement(Feather_1["default"], { name: "search", color: "black", size: 28 }))),
        (coordinates && userLocation) && (react_1["default"].createElement(react_native_maps_1["default"], { style: { flex: 1 }, region: {
                latitude: (coordinates.lat + userLocation.lat) / 2,
                longitude: (coordinates.lng + userLocation.lng) / 2,
                latitudeDelta: Math.abs(coordinates.lat - userLocation.lat) + 0.1,
                longitudeDelta: Math.abs(coordinates.lng - userLocation.lng) + 0.1
            } },
            react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: { latitude: coordinates.lat, longitude: coordinates.lng }, title: serviceInfo.user_id.address, description: serviceInfo.user_id.address }),
            react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: { latitude: userLocation.lat, longitude: userLocation.lng }, title: "V\u1ECB tr\u00ED c\u1EE7a b\u1EA1n", description: userAddress }),
            react_1["default"].createElement(react_native_maps_1.Polyline, { coordinates: [{ latitude: coordinates.lat, longitude: coordinates.lng },
                    { latitude: userLocation.lat, longitude: userLocation.lng },
                ], strokeColor: "#FCA234", strokeWidth: 2 })))));
};
exports["default"] = MapBookingScreen;
var styles = react_native_1.StyleSheet.create({
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 15
    },
    SearchInputs: {
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
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#394C6D'
    }
});
