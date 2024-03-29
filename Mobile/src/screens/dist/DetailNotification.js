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
var useBookingDetail_1 = require("../hooks/useBookingDetail");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var useRepairmanChangeStatusBooking_1 = require("../hooks/useRepairmanChangeStatusBooking");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var native_2 = require("@react-navigation/native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var DetailNotification = function () {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var currentUser = useGetCurrentUser_1["default"]().currentUser;
    var route = native_1.useRoute();
    var booking_id = route.params.booking_id;
    var navigation = native_2.useNavigation();
    var _b = react_1.useState(''), token = _b[0], setToken = _b[1];
    react_1.useEffect(function () {
        var getAccessToken = function () { return __awaiter(void 0, void 0, void 0, function () {
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
        getAccessToken();
    }, []);
    var _c = useBookingDetail_1["default"](booking_id), detailBookings = _c.detailBookings, isError = _c.isError, isLoading = _c.isLoading;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    var totalPayment = (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.service_id.price) + (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.fee_service) + (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.fee_transport);
    var handleChangeStatusBooking = function (booking_id, option) {
        setLoading(true);
        useRepairmanChangeStatusBooking_1["default"](booking_id, option, token, function () {
            setLoading(false);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }]
            });
        });
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles.cartService },
            react_1["default"].createElement(react_native_1.View, { style: { borderBottomWidth: 2, borderBottomColor: '#394C6D' } },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.service_id.image }, style: styles.img })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.info },
                        react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.nameRepairman }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.service_id.service_name))),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "M\u00F4 ta\u0309 h\u01B0 ho\u0309ng:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.desc, numberOfLines: 10 }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.desc)),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u00F4ng tin kha\u0301ch ha\u0300ng:"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.infoUser },
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUsers }, "Ho\u0323 va\u0300 t\u00EAn:"),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoUserss }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.user_id.full_name)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUsers }, "Email:"),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoUserss }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.user_id.email)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUsers }, "\u0110i\u0323a chi\u0309:"),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUserss, numberOfLines: 3 }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.address)))),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.infoUser },
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUserssss }, "Gi\u01A1\u0300 s\u01B0\u0309a ch\u01B0\u0303a:"),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoUsersss }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.time_repair)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUserssss }, "Nga\u0300y s\u01B0\u0309a ch\u01B0\u0303a:"),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoUsersss }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.day_repair))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoPayment },
                react_1["default"].createElement(react_native_1.View, { style: styles.stylePrice },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlePrice }, "Gia\u0301 di\u0323ch vu\u0323:"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.service_id.price.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110"))),
                react_1["default"].createElement(react_native_1.View, { style: styles.stylePrice },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlePrice }, "Phi\u0301 di\u0323ch vu\u0323:"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.fee_service.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110"))),
                react_1["default"].createElement(react_native_1.View, { style: styles.stylePrice },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlePrice }, "Phi\u0301 di chuy\u00EA\u0309n"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.fee_transport.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110")))),
            react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '50%' } }),
                react_1["default"].createElement(react_native_1.View, { style: styles.paymentContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.payment },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, "T\u00F4\u0309ng:"),
                        react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.price }, totalPayment.toLocaleString('vi-VN')),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110")))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.buttonEven },
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'RPM' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Chờ xác nhận' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { width: '80%' }, onPress: function () {
                        return handleChangeStatusBooking(detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings._id, 1);
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.background },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "Xa\u0301c nh\u00E2\u0323n"))),
                react_1["default"].createElement(react_native_1.View, { style: styles.iconChat },
                    react_1["default"].createElement(AntDesign_1["default"], { name: "message1", color: "#394C6D", size: 25 })))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'RPM' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Đã hủy đơn' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.background },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110a\u0303 hu\u0309y \u0111\u01A1n"))))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'RPM' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Đã sửa hoàn thành' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.background },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110a\u0303 s\u01B0\u0309a hoa\u0300n tha\u0300nh"))))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'RPM' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Đã nhận đơn sửa' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.background },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110\u00E3 nh\u1EADn \u0111\u01A1n s\u1EEDa"))))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'USR' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Đã hủy đơn' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.background, onPress: function () {
                            return navigation.navigate('DetailService', {
                                id: detailBookings.service_id._id,
                                title: detailBookings.service_id.service_name
                            });
                        } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110\u0103\u0323t la\u0323i"))))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'USR' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Đã sửa hoàn thành' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.background, onPress: function () {
                            return navigation.navigate('DetailService', {
                                id: detailBookings.service_id._id,
                                title: detailBookings.service_id.service_name
                            });
                        } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110\u0103\u0323t la\u0323i"))))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'USR' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Đã nhận đơn sửa' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.background },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110\u00E3 nh\u1EADn \u0111\u01A1n s\u1EEDa"))))),
            currentUser &&
                (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'USR' &&
                detailBookings &&
                (detailBookings === null || detailBookings === void 0 ? void 0 : detailBookings.status) === 'Chờ xác nhận' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '100%' } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.background },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "Ch\u1EDD x\u00E1c nh\u1EADn"))))))));
};
exports["default"] = DetailNotification;
var styles = react_native_1.StyleSheet.create({
    iconChat: {
        alignItems: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeBook: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    content: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 30
    },
    titlePrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    stylePrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoPayment: {
        marginVertical: 10
    },
    infoUsers: {
        fontSize: 16,
        color: '#394C6D',
        fontWeight: 'bold',
        width: '30%'
    },
    infoUserssss: {
        fontSize: 16,
        color: '#394C6D',
        fontWeight: 'bold',
        width: '40%'
    },
    infoUserss: {
        fontSize: 16,
        color: '#394C6D',
        width: '70%'
    },
    infoUsersss: {
        fontSize: 16,
        color: 'blue',
        width: '60%'
    },
    desc: {
        fontSize: 15,
        color: '#394C6D',
        marginVertical: 5
    },
    styleInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoUser: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    buttonEven: {
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        fontSize: 18,
        color: '#394C6D',
        fontWeight: 'bold'
    },
    dateTime: {
        color: 'blue'
    },
    nameConfirm: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    background: {
        backgroundColor: '#394C6D',
        borderRadius: 5,
        width: '100%',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgrounds: {
        backgroundColor: '#FCA234',
        borderRadius: 5,
        width: '90%',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonConfirm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    payment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageTotal: {
        width: 30,
        height: 30
    },
    totalPayment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
        width: '80%'
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        shadowColor: '#394C6D',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
    nameRepairman: {
        fontSize: 25,
        color: '#394C6D',
        fontWeight: 'bold'
    },
    vnd: {
        fontSize: 15,
        color: '#FCA234',
        fontWeight: 'bold'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 15,
        color: '#FCA234',
        width: 'auto',
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    description: {
        width: '100%',
        color: '#394C6D'
    },
    info: {
        marginVertical: 20,
        width: '70%'
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    waitPayment: {
        color: '#394C6D'
    },
    nameService: {
        fontWeight: 'bold',
        color: 'black'
    },
    groundNameApp: {
    // backgroundColor:"#394C6D",
    // borderRadius:5
    },
    nameApp: {
        color: '#FCA234',
        backgroundColor: '#394C6D'
    },
    container: {
        width: '100%',
        height: '100%'
    },
    cartService: {
        flex: 9,
        padding: 10,
        marginBottom: 10
    },
    headerCart: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    nameShop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
