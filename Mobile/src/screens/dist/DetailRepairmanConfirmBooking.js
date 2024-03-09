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
var moment_1 = require("moment");
var native_1 = require("@react-navigation/native");
var useBookingDetail_1 = require("../hooks/useBookingDetail");
var useRepairmanChangeStatusBooking_1 = require("../hooks/useRepairmanChangeStatusBooking");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var DetailRepairmanConfirmBooking = function () {
    var route = native_1.useRoute();
    var booking_id = route.params.booking_id;
    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];
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
    var detailBookings = useBookingDetail_1["default"](booking_id);
    var detailBooking = detailBookings.detailBookings;
    console.log(detailBooking);
    var totalPayment = (detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.service_id.price) + (detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.fee_service) + (detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.fee_transport);
    var handleChangeStatusBooking = function (booking_id, option) {
        // console.log(booking_id, option);
        useRepairmanChangeStatusBooking_1["default"](booking_id, option, token);
        // console.log(changeStatusBooking);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.ScrollView, { style: styles.cartService },
            react_1["default"].createElement(react_native_1.View, { style: { borderBottomWidth: 2, borderBottomColor: '#394C6D' } },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.service_id.image }, style: styles.img })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.info },
                        react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.nameRepairman }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.service_id.service_name))),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "M\u00F4 ta\u0309 h\u01B0 ho\u0309ng:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.desc, numberOfLines: 10 }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.desc)),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u00F4ng tin kha\u0301ch ha\u0300ng:"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.infoUser },
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUsers }, "Ho\u0323 va\u0300 t\u00EAn:"),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoUserss }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.user_id.full_name)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUsers }, "Email:"),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoUserss }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.user_id.email)),
                        react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUsers }, "\u0110i\u0323a chi\u0309:"),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.infoUserss, numberOfLines: 3 }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.address))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoPayment },
                react_1["default"].createElement(react_native_1.View, { style: styles.stylePrice },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlePrice }, "Gia\u0301 di\u0323ch vu\u0323:"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.service_id.price.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110"))),
                react_1["default"].createElement(react_native_1.View, { style: styles.stylePrice },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlePrice }, "Phi\u0301 di\u0323ch vu\u0323:"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.fee_service.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110"))),
                react_1["default"].createElement(react_native_1.View, { style: styles.stylePrice },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titlePrice }, "Phi\u0301 di chuy\u00EA\u0309n"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.fee_transport.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110")))),
            react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.dateTime }, moment_1["default"](detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.updatedAt).format('DD/MM/YYYY HH:mm'))),
                react_1["default"].createElement(react_native_1.View, { style: styles.paymentContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.payment },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, "T\u00F4\u0309ng:"),
                        react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.price }, totalPayment.toLocaleString('vi-VN')),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VN\u0110"))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, null),
                react_1["default"].createElement(react_native_1.View, { style: styles.paymentContainer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.payment },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.pricess }, (detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.payment) === 'No' ? (react_1["default"].createElement(react_native_1.Text, null, "Ch\u01B0a thanh toa\u0301n")) : (react_1["default"].createElement(react_native_1.Text, null, "Ch\u01B0a thanh toa\u0301n"))))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.buttonEven },
            (detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.status) === 'Chờ xác nhận' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '40%' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.background, onPress: function () {
                            return handleChangeStatusBooking(detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking._id, 1);
                        } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "Xa\u0301c nh\u00E2\u0323n"))),
                react_1["default"].createElement(react_native_1.View, { style: { width: '40%' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.backgrounds, onPress: function () {
                            return handleChangeStatusBooking(detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking._id, 2);
                        } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "Hu\u0309y y\u00EAu c\u00E2\u0300u"))))),
            (detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking.status) === 'Đã nhận đơn sửa' && (react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                react_1["default"].createElement(react_native_1.View, { style: { width: '40%' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.background, onPress: function () {
                            return handleChangeStatusBooking(detailBooking === null || detailBooking === void 0 ? void 0 : detailBooking._id, 3);
                        } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "Hoa\u0300n tha\u0300nh"))))))));
};
exports["default"] = DetailRepairmanConfirmBooking;
var styles = react_native_1.StyleSheet.create({
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
    infoUserss: {
        fontSize: 16,
        color: '#394C6D',
        width: '70%'
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
        width: '90%',
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
        paddingVertical: 5
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
    pricess: {
        fontSize: 15,
        color: '#394C6D',
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
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
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
