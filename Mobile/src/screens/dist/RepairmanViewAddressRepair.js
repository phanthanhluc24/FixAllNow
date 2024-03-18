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
var axios_1 = require("axios");
var react_native_maps_1 = require("react-native-maps");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var apiKey = 'pk.bbfa78a3eef8b8c32c413f59248bcf97';
var RepairmanViewAddressRepair = function (_a) {
    var route = _a.route;
    var detailBooking = route.params.detailBooking;
    console.log("hellohelo", detailBooking);
    var repairmanFinderAddress = detailBooking;
    var currentUser = useGetCurrentUser_1["default"]().currentUser;
    console.log(currentUser);
    var _b = react_1.useState(null), location = _b[0], setLocation = _b[1];
    var _c = react_1.useState(null), currentLocation = _c[0], setCurrentLocation = _c[1];
    var _d = react_1.useState(''), destination = _d[0], setDestination = _d[1];
    var _e = react_1.useState(null), destinationLocation = _e[0], setDestinationLocation = _e[1];
    var _f = react_1.useState([]), polylineCoords = _f[0], setPolylineCoords = _f[1];
    var _g = react_1.useState(false), shouldShowMapView = _g[0], setShouldShowMapView = _g[1];
    var fetchLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    address = repairmanFinderAddress.address;
                    console.log(address);
                    return [4 /*yield*/, axios_1["default"].get("https://us1.locationiq.com/v1/search.php?key=" + apiKey + "&q=" + address + "&format=json")];
                case 1:
                    response = _a.sent();
                    data = response.data[0];
                    setLocation({
                        latitude: parseFloat(data.lat),
                        longitude: parseFloat(data.lon),
                        address: data.display_name
                    });
                    setShouldShowMapView(true);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchLocation();
    }, []);
    var fetchDestinationLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var addressRepairman, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    addressRepairman = currentUser.address;
                    console.log(addressRepairman);
                    return [4 /*yield*/, axios_1["default"].get("https://us1.locationiq.com/v1/search.php?key=" + apiKey + "&q=" + addressRepairman + "&format=json")];
                case 1:
                    response = _a.sent();
                    data = response.data[0];
                    setDestinationLocation({
                        latitude: parseFloat(data.lat),
                        longitude: parseFloat(data.lon),
                        address: data.display_name
                    });
                    setShouldShowMapView(true);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchDestinationLocation();
    }, []);
    react_1.useEffect(function () {
        if (location && destinationLocation) {
            fetchDirection(); // fetch địa điểm sau khi cả hai điểm đã được xác định
            updatePolyline();
        }
    }, [location, destinationLocation]);
    var fetchDirection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, routes, points, decodedPoints, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://maps.googleapis.com/maps/api/directions/json?origin=" + location.latitude + "," + location.longitude + "&destination=" + destinationLocation.latitude + "," + destinationLocation.longitude + "&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM")];
                case 1:
                    response = _a.sent();
                    routes = response.data.routes;
                    if (routes.length > 0) {
                        points = routes[0].overview_polyline.points;
                        decodedPoints = decodePolyline(points);
                        setPolylineCoords(decodedPoints);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //cập nhật lại đường polyline
    var updatePolyline = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, routes, points, decodedPoints, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(location && destinationLocation)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get("https://maps.googleapis.com/maps/api/directions/json?origin=" + location.latitude + "," + location.longitude + "&destination=" + destinationLocation.latitude + "," + destinationLocation.longitude + "&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM")];
                case 2:
                    response = _a.sent();
                    routes = response.data.routes;
                    if (routes.length > 0) {
                        points = routes[0].overview_polyline.points;
                        decodedPoints = decodePolyline(points);
                        setPolylineCoords(decodedPoints);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var decodePolyline = function (encoded) {
        var index = 0;
        var len = encoded.length;
        var lat = 0;
        var lng = 0;
        var polylineCoords = [];
        while (index < len) {
            var b = void 0;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
            lng += dlng;
            var latitude = lat / 1e5;
            var longitude = lng / 1e5;
            polylineCoords.push({ latitude: latitude, longitude: longitude });
        }
        return polylineCoords;
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container }, shouldShowMapView && (react_1["default"].createElement(react_native_maps_1["default"], { style: styles.map, initialRegion: {
            latitude: (location === null || location === void 0 ? void 0 : location.latitude) || (destinationLocation === null || destinationLocation === void 0 ? void 0 : destinationLocation.latitude) || 0,
            longitude: (location === null || location === void 0 ? void 0 : location.longitude) || (destinationLocation === null || destinationLocation === void 0 ? void 0 : destinationLocation.longitude) || 0,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
        } },
        location && (react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: {
                latitude: location.latitude,
                longitude: location.longitude
            }, title: "\u0110i\u0323a chi\u0309 ba\u0323n se\u0303 \u0111\u00EA\u0301n s\u01B0\u0309a", description: location.address },
            react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerBorder },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: repairmanFinderAddress.user_id.image }, style: styles.imageMarker }))))),
        destinationLocation && (react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: {
                latitude: destinationLocation.latitude,
                longitude: destinationLocation.longitude
            }, title: "\u0110i\u0323a chi\u0309 hi\u00EA\u0323n ta\u0323i cu\u0309a ba\u0323n", description: destinationLocation.address },
            react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerBorder },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image }, style: styles.imageMarker }))))),
        polylineCoords.length > 0 && (react_1["default"].createElement(react_native_maps_1.Polyline, { coordinates: polylineCoords, strokeColor: "green", strokeWidth: 5 }))))));
};
exports["default"] = RepairmanViewAddressRepair;
var styles = react_native_1.StyleSheet.create({
    errorText: {
        color: "red"
    },
    iconConfirm: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 70,
        marginVertical: 20
    },
    titles: {
        fontSize: 17,
        color: '#394C6D'
    },
    titleInfo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#394C6D',
        paddingVertical: 10
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        marginHorizontal: 10
    },
    nameConfirm: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    imageMarkerContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMarkerContainers: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    address: {
        width: 20,
        height: 20,
        borderRadius: 30,
        backgroundColor: 'red'
    },
    imageMarkerBorder: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FCA234',
        overflow: 'hidden'
    },
    imageMarker: {
        width: '100%',
        height: '100%'
    },
    iconMap: {
        width: 40,
        height: 40
    },
    addressPrevent: {
        alignItems: 'center'
    },
    messageIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCA234',
        borderRadius: 50
    },
    // imageMaker: {
    //   width: 40,
    //   height: 40,
    //   borderRadius: 50,
    //   borderWidth: 5,
    //   borderColor: '#FCA234',
    //   position: "relative"
    // },
    map: {
        flex: 1
    },
    container: {
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute'
    },
    inputContainers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        marginTop: 45
    },
    inputContainerss: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#FCA234',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10
    },
    inputs: {
        height: 100,
        borderColor: '#FCA234',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10
    },
    event: {
        flex: 1,
        height: 40,
        borderColor: '#FCA234',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        paddingVertical: 10,
        color: '#394C6D'
    },
    events: {
        borderColor: '#394C6D',
        borderWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#394C6D',
        borderRadius: 10,
        width: '90%',
        paddingVertical: 10,
        color: '#394C6D',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
