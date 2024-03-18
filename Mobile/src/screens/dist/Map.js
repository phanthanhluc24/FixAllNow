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
var react_native_alert_notification_1 = require("react-native-alert-notification");
var Feather_1 = require("react-native-vector-icons/Feather");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var geolocation_1 = require("@react-native-community/geolocation");
var moment_1 = require("moment");
// import { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';
var native_1 = require("@react-navigation/native");
var apiKey = 'pk.bbfa78a3eef8b8c32c413f59248bcf97';
var MapBookingScreen = function (_a) {
    var route = _a.route;
    var serviceInfo = route.params.serviceInfo;
    // console.log(serviceInfo);
    var navigation = native_1.useNavigation();
    var userInfo = serviceInfo;
    var _b = react_1.useState(false), modalVisible = _b[0], setModalVisible = _b[1];
    var _c = react_1.useState(''), selectedDestination = _c[0], setSelectedDestination = _c[1];
    var _d = react_1.useState({
        date: '',
        time: ''
    }), currentDateTime = _d[0], setCurrentDateTime = _d[1];
    var _e = react_1.useState(''), inputValue = _e[0], setInputValue = _e[1];
    var currentUser = useGetCurrentUser_1["default"]().currentUser;
    var _f = react_1.useState(null), location = _f[0], setLocation = _f[1];
    var _g = react_1.useState(null), currentLocation = _g[0], setCurrentLocation = _g[1];
    var _h = react_1.useState(''), destination = _h[0], setDestination = _h[1];
    var _j = react_1.useState(null), destinationLocation = _j[0], setDestinationLocation = _j[1];
    var _k = react_1.useState([]), polylineCoords = _k[0], setPolylineCoords = _k[1];
    var _l = react_1.useState(false), shouldShowMapView = _l[0], setShouldShowMapView = _l[1];
    // lấy địa chỉ của repairman
    var fetchLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    address = userInfo.user_id.address;
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
    // Hàm yêu cầu quyền truy cập vị trí từ người dùng
    var requestLocationPermission = function () { return __awaiter(void 0, void 0, void 0, function () {
        var granted, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_1.PermissionsAndroid.request(react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                            title: 'Ứng dụng cần truy cập vị trí',
                            message: 'Cho phép ứng dụng truy cập vị trí để sử dụng tính năng này.',
                            buttonPositive: 'Đồng ý',
                            buttonNeutral: 'Hỏi lại tôi sau',
                            buttonNegative: 'Hủy'
                        })];
                case 1:
                    granted = _a.sent();
                    if (granted === react_native_1.PermissionsAndroid.RESULTS.GRANTED) {
                        react_native_alert_notification_1.Toast.show({
                            type: react_native_alert_notification_1.ALERT_TYPE.SUCCESS,
                            title: 'Thành công',
                            textBody: 'Quyền truy cập vị trí đã được cấp phép!'
                        });
                        getCurrentLocation();
                    }
                    else {
                        react_native_alert_notification_1.Toast.show({
                            type: react_native_alert_notification_1.ALERT_TYPE.WARNING,
                            title: 'Cảnh báo',
                            textBody: 'Quyền truy cập vị trí bị từ chối!'
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    ////lấy vị trí hiện tại 101B lê hữu trác đà nẵng 100 ngô quyền đà nẵng
    var getReverseGeocoding = function (latitude, longitude) { return __awaiter(void 0, void 0, void 0, function () {
        var apiKey_1, response, display_name, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    apiKey_1 = 'pk.bbfa78a3eef8b8c32c413f59248bcf97';
                    return [4 /*yield*/, axios_1["default"].get("https://us1.locationiq.com/v1/reverse.php?key=" + apiKey_1 + "&lat=" + latitude + "&lon=" + longitude + "&format=json")];
                case 1:
                    response = _a.sent();
                    display_name = response.data.display_name;
                    // console.log('display', display_name);
                    return [2 /*return*/, display_name];
                case 2:
                    error_2 = _a.sent();
                    // console.error('Lỗi khi lấy địa chỉ từ tọa độ:', error);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getCurrentLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            geolocation_1["default"].getCurrentPosition(function (position) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, latitude, longitude, address;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = position.coords, latitude = _a.latitude, longitude = _a.longitude;
                            return [4 /*yield*/, getReverseGeocoding(latitude, longitude)];
                        case 1:
                            address = _b.sent();
                            // console.log('Địa chỉ hiện tại:', address);
                            setCurrentLocation({ latitude: latitude, longitude: longitude, address: address });
                            return [2 /*return*/];
                    }
                });
            }); }, function (error) { return console.error('Lỗi khi lấy vị trí hiện tại:', error); }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        requestLocationPermission();
        geolocation_1["default"].getCurrentPosition(function (info) {
            setCurrentLocation(info.coords);
        });
    }, []);
    // console.log('currentLocation: ', currentLocation);
    var handleGetCurrentLocation = function () {
        getCurrentLocation();
    };
    //Lấy địa chỉ của người tìm thợ
    var fetchDestinationLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://us1.locationiq.com/v1/search.php?key=" + apiKey + "&q=" + destination + "&format=json")];
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
                    error_3 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //hàm xử lý search
    var handleDestinationChange = function (text) {
        setDestination(text);
        // Gọi hàm cập nhật polyline khi có sự thay đổi
        updatePolyline();
    };
    // nút bấm tìm kiếm
    var handleSearch = function () {
        if (!destination.trim()) {
            react_native_alert_notification_1.Toast.show({
                type: react_native_alert_notification_1.ALERT_TYPE.WARNING,
                title: 'Cảnh báo',
                textBody: 'Vui lòng nhập địa chỉ cụ thể!'
            });
        }
        else {
            fetchDestinationLocation();
            updatePolyline();
        }
    };
    react_1.useEffect(function () {
        if (location && destinationLocation) {
            fetchDirection(); // fetch địa điểm sau khi cả hai điểm đã được xác định
            updatePolyline();
        }
    }, [location, destinationLocation]);
    // xử lý gọi địa chỉ của cả repairman và repairman finder
    var fetchDirection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, routes, points, decodedPoints, error_4;
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
                    error_4 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //cập nhật lại đường polyline
    var updatePolyline = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, routes, points, decodedPoints, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(location && destinationLocation)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get("https://maps.googleapis.com/maps/api/directions/json?origin=" + location.latitude + "," + location.longitude + "&destination=" + destinationLocation.latitude + "," + destinationLocation.longitude + "&key=YOUR_API_KEY")];
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
                    error_5 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    //dùng decodePolyline để phân tích tuyến đường
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
    // modal xác nhận booking
    var getCurrentDateTime = function () {
        var currentDate = moment_1["default"]().format('DD/MM/YYYY');
        var currentTime = moment_1["default"]().format('hh:mm:ss A');
        setCurrentDateTime({ date: currentDate, time: currentTime });
    };
    var handleConfirmBooking = function () {
        if (!destination) {
            react_native_alert_notification_1.Toast.show({
                type: react_native_alert_notification_1.ALERT_TYPE.WARNING,
                title: 'Cảnh báo',
                textBody: 'Vui lòng nhập địa chỉ cần sửa!'
            });
        }
        else {
            getCurrentDateTime();
            setSelectedDestination(destination);
            setModalVisible(true);
        }
    };
    var _m = react_1.useState(false), error = _m[0], setError = _m[1];
    var handleInputChange = function (text) {
        setInputValue(text);
    };
    // hàm truyền dữ liệu đã xác nhận qua component Confirm 1 lần nữa
    var handleConfirmAndNavigate = function () {
        if (!inputValue.trim()) {
            // Nếu ô input không được điền, hiển thị thông báo lỗi
            setError('Vui lòng nhập thông tin mô tả đầy đủ');
        }
        else {
            setModalVisible(false);
            var date = currentDateTime.date, time = currentDateTime.time;
            var infoBooking = {
                infoServiceBooking: serviceInfo,
                address: destinationLocation === null || destinationLocation === void 0 ? void 0 : destinationLocation.address,
                bugService: inputValue,
                date: date,
                time: time
            };
            // console.log("infoBooking map",infoBooking);
            navigation.navigate('ConfirmInforBooking', { infoBooking: infoBooking });
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        shouldShowMapView && (react_1["default"].createElement(react_native_maps_1["default"], { style: styles.map, initialRegion: {
                latitude: (location === null || location === void 0 ? void 0 : location.latitude) || (destinationLocation === null || destinationLocation === void 0 ? void 0 : destinationLocation.latitude) || 0,
                longitude: (location === null || location === void 0 ? void 0 : location.longitude) || (destinationLocation === null || destinationLocation === void 0 ? void 0 : destinationLocation.longitude) || 0,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            } },
            currentLocation && (react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: {
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude
                }, title: "V\u1ECB tr\u00ED hi\u00EA\u0323n ta\u0323i c\u1EE7a b\u1EA1n", description: currentLocation.address },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerContainers },
                    react_1["default"].createElement(react_native_1.View, { style: styles.address })))),
            location && (react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: {
                    latitude: location.latitude,
                    longitude: location.longitude
                }, title: "\u0110i\u0323a chi\u0309 th\u01A1\u0323 s\u01B0\u0309a", description: location.address },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerBorder },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: userInfo.user_id.image }, style: styles.imageMarker }))))),
            destinationLocation && (react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: {
                    latitude: destinationLocation.latitude,
                    longitude: destinationLocation.longitude
                }, title: "\u0110i\u0323a chi\u0309 hi\u00EA\u0323n ta\u0323i cu\u0309a ba\u0323n", description: destinationLocation.address },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.imageMarkerBorder },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image }, style: styles.imageMarker }))))),
            polylineCoords.length > 0 && (react_1["default"].createElement(react_native_maps_1.Polyline, { coordinates: polylineCoords, strokeColor: "green", strokeWidth: 5 })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.inputContainer },
            react_1["default"].createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Nh\u00E2\u0323p \u0111i\u0323a chi\u0309 th\u01A1\u0323 se\u0303 \u0111\u00EA\u0301n?", value: destination, onChangeText: handleDestinationChange, onSubmitEditing: handleSearch }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.messageIcon, onPress: handleSearch },
                react_1["default"].createElement(Feather_1["default"], { name: "search", color: "#394C6D", size: 25 }))),
        react_1["default"].createElement(react_native_1.View, { style: styles.inputContainers },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleGetCurrentLocation, style: styles.event },
                react_1["default"].createElement(react_native_1.Text, null, "Cho\u0323n vi\u0323 tri\u0301 hi\u00EA\u0323n ta\u0323i")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleGetCurrentLocation },
                react_1["default"].createElement(react_native_1.Image, { style: styles.iconMap, source: require('../assets/Homes/iconMap.png') }))),
        react_1["default"].createElement(react_native_1.View, { style: styles.inputContainerss },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.events, onPress: handleConfirmBooking },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "Xa\u0301c nh\u00E2\u0323n \u0111\u0103\u0323t li\u0323ch"))),
        react_1["default"].createElement(react_native_1.Modal, { animationType: "slide", transparent: true, visible: modalVisible, onRequestClose: function () {
                setModalVisible(false);
            } },
            react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo },
                        "Gi\u1EDD hi\u1EC7n t\u1EA1i:",
                        '  ',
                        currentDateTime.time,
                        ' '),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo },
                        "Ng\u00E0y hi\u1EC7n t\u1EA1i:",
                        '  ',
                        currentDateTime.date),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo },
                        "\u0110\u1ECBa ch\u1EC9 \u0111\u00E3 ch\u1ECDn:",
                        '  ',
                        destinationLocation && destinationLocation.address),
                    react_1["default"].createElement(react_native_1.TextInput, { multiline: true, style: styles.inputs, placeholder: "M\u00F4 ta\u0309 thi\u00EA\u0301t bi\u0323 h\u01B0 ho\u0309ng?", value: inputValue, onChangeText: handleInputChange }),
                    react_1["default"].createElement(react_native_1.View, { style: { height: 30 } }, error ? react_1["default"].createElement(react_native_1.Text, { style: styles.errorText }, error) : null),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.iconConfirm },
                        react_1["default"].createElement(AntDesign_1["default"], { name: "closecircleo", color: "#394C6D", size: 40, onPress: function () { return setModalVisible(false); } }),
                        react_1["default"].createElement(AntDesign_1["default"], { name: "checkcircleo", color: "green", size: 40, onPress: handleConfirmAndNavigate })))))));
};
exports["default"] = MapBookingScreen;
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
