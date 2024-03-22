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
var useBookingService_1 = require("../hooks/useBookingService");
var stripe_react_native_1 = require("@stripe/stripe-react-native");
var stripe_react_native_2 = require("@stripe/stripe-react-native");
var url_1 = require("../hooks/apiRequest/url");
var ConfirmInforBooking = function (_a) {
    var route = _a.route;
    var _b = stripe_react_native_2.useStripe(), initPaymentSheet = _b.initPaymentSheet, presentPaymentSheet = _b.presentPaymentSheet;
    var STRIPE = 'pk_test_51Osxt0P3QsmcFffhQjfeuh4vZIeAQFzM7R4Lpk2lGRRZIKcB9J1MOBiGl2UWMb3HAaEqww6p4P8g63LnexqIpEiU00CjHmli5n';
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var infoBooking = route.params.infoBooking;
    var serviceBooking = infoBooking.infoServiceBooking.service_name;
    var repairman = infoBooking.infoServiceBooking.user_id.full_name;
    var priceRepair = infoBooking.infoServiceBooking.price;
    var addressRepair = infoBooking.address;
    var desc = infoBooking.bugService;
    var priceService;
    if (priceRepair <= 100000) {
        priceService = 0;
    }
    else if (priceRepair > 100000 && priceRepair <= 300000) {
        priceService = (5 / 100) * priceRepair;
    }
    else if (priceRepair > 300000 && priceRepair <= 500000) {
        priceService = (10 / 100) * priceRepair;
    }
    else if (priceRepair > 500000 && priceRepair <= 1000000) {
        priceService = (15 / 100) * priceRepair;
    }
    else {
        priceService = (20 / 100) * priceRepair;
    }
    var priceTransport = 10000;
    var totalPrice = priceRepair + priceService + priceTransport;
    var _d = react_1.useState(''), payment = _d[0], setPayment = _d[1];
    var navigation = native_1.useNavigation();
    var _e = react_1.useState(2), selectedMethod = _e[0], setSelectedMethod = _e[1];
    var _f = react_1.useState(null), errorPayment = _f[0], setErrorPayment = _f[1];
    var _g = useBookingService_1["default"](), bookingService = _g.bookingService, isLoading = _g.isLoading;
    var data = {
        dayRepair: infoBooking.date,
        timeRepair: infoBooking.time,
        priceTransport: priceTransport,
        priceService: priceService,
        address: addressRepair,
        desc: desc,
        payment: payment
    };
    var handleMethodSelect = function () {
        setSelectedMethod(1);
        setPayment('Thanh toán khi sửa xong');
        setErrorPayment('OK');
    };
    var handleStripeSelect = function () {
        setSelectedMethod(2);
        setPayment('Đã thanh toán online qua Stripe');
        setErrorPayment('OK');
    };
    var handleConfirm = function () {
        if (selectedMethod === null) {
            setErrorPayment('Vui lòng chọn phương thức thanh toán');
            setLoading(false);
        }
        else {
            bookingService(data, infoBooking.infoServiceBooking._id, infoBooking.infoServiceBooking.user_id._id);
        }
    };
    var handleConfirmStripe = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url_1.url + "/stripe/intents", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ amount: totalPrice })
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var error;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(res);
                                    return [4 /*yield*/, initPaymentSheet({
                                            merchantDisplayName: "notJust.dev",
                                            paymentIntentClientSecret: res.paymentIntent
                                        })];
                                case 1:
                                    error = (_a.sent()).error;
                                    if (error) {
                                        console.log(error.message);
                                    }
                                    return [4 /*yield*/, presentPaymentSheet()];
                                case 2:
                                    _a.sent();
                                    bookingService(data, infoBooking.infoServiceBooking._id, infoBooking.infoServiceBooking.user_id._id);
                                    return [2 /*return*/];
                            }
                        });
                    }); })["catch"](function (error) {
                        console.log(error);
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCancel = function () {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Root' }]
        });
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: isLoading },
            react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                    react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: 40, color: "#FCA234" }))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.infoContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.titleConfirm },
                react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "XA\u0301C NH\u00C2\u0323N TH\u00D4NG TIN")),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo }, "Th\u00F4ng tin di\u0323ch vu\u0323"),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "\u0110\u01A1n s\u01B0\u0309a:"),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infors }, serviceBooking)),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Th\u01A1\u0323:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, repairman)),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Gia\u0301 s\u01B0\u0309a:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, priceRepair.toLocaleString('vi-VN')),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.inforss }, "VN\u0110")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Phi\u0301 di\u0323ch vu\u0323:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, priceService.toLocaleString('vi-VN')),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.inforss }, "VN\u0110")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Phi\u0301 di chuy\u00EA\u0309n:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, priceTransport.toLocaleString('vi-VN')),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.inforss }, "VN\u0110")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "\u0110i\u0323a \u0111i\u00EA\u0309m:"),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3, style: styles.infors }, addressRepair)),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "T\u00F4\u0309ng:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, totalPrice.toLocaleString('vi-VN')),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.inforss }, "VN\u0110"))),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo }, "Cho\u0323n ph\u01B0\u01A1ng th\u01B0\u0301c thanh toa\u0301n"),
                react_1["default"].createElement(react_native_1.View, { style: { height: 20 } }, errorPayment !== 'OK' && (react_1["default"].createElement(react_native_1.Text, { style: { color: 'red', fontWeight: 'bold' } }, errorPayment))),
                react_1["default"].createElement(react_native_1.View, { style: styles.method },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles.buttonMethod,
                            selectedMethod === 1 && styles.selectedMethod,
                        ], onPress: handleMethodSelect },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.image1, source: require('../assets/ConfirmBooking/iconMomo.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleMethod }, "Ti\u00EA\u0300n m\u0103\u0323t")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles.buttonMethod,
                            selectedMethod === 2 && styles.selectedMethod,
                        ], onPress: function () { return handleStripeSelect(); } },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.image2, source: require('../assets/ConfirmBooking/stripe.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleMethod }, "Stripe Online")))),
            react_1["default"].createElement(react_native_1.View, { style: styles.reConfirm },
                react_1["default"].createElement(react_native_1.Text, { style: styles.quesConfirm }, "Ba\u0323n co\u0301 \u0111\u00F4\u0300ng y\u0301 xa\u0301c th\u01B0\u0323c kh\u00F4ng?"))),
        react_1["default"].createElement(react_native_1.View, { style: styles.event },
            react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: handleCancel },
                        react_1["default"].createElement(react_native_1.View, { style: styles.bookNow },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "Hu\u0309y"))),
                    selectedMethod == 1 ? (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: handleConfirm },
                        react_1["default"].createElement(react_native_1.View, { style: styles.book },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u00F4\u0300ng y\u0301")))) : (react_1["default"].createElement(stripe_react_native_1.StripeProvider, { publishableKey: STRIPE },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: handleConfirmStripe },
                            react_1["default"].createElement(react_native_1.View, { style: styles.book },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u00F4\u0300ng y\u0301"))))))))));
};
exports["default"] = ConfirmInforBooking;
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
    image1: {
        width: 20,
        height: 20
    },
    image2: {
        width: 20,
        height: 20
    },
    buttonMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    selectedMethod: {
        borderColor: 'green',
        borderWidth: 3
    },
    titleMethod: {
        marginLeft: 10
    },
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
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
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    books: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    oneLine: {
        width: '100%',
        backgroundColor: '#FCA234',
        height: 1,
        marginTop: 15
    },
    quesConfirm: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    reConfirm: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    // titleMethod: {
    //   fontSize: 15,
    //   fontWeight: 'bold',
    //   color: '#FCA234',
    // },
    method: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    // buttonMethod: {
    //   width: 140,
    //   height: 70,
    //   borderWidth: 3,
    //   borderColor: '#394C6D',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderRadius: 10,
    // },
    infor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D',
        width: '50%'
    },
    infors: {
        fontSize: 18,
        color: '#FCA234',
        width: '50%'
    },
    inforss: {
        fontSize: 18,
        color: '#FCA234',
        width: '50%',
        fontWeight: 'bold'
    },
    styleInfo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 5,
        width: '80%'
    },
    titleInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    container: {
        flex: 1
    },
    titleConfirm: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#394C6D',
        marginVertical: 20
    },
    infoContainer: {
        flex: 8.8
    },
    event: {
        flex: 1.2
    },
    infoService: {
        marginHorizontal: 20
    }
});
