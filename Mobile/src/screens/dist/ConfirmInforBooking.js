"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var useBookingService_1 = require("../hooks/useBookingService");
var ConfirmInforBooking = function (_a) {
    var route = _a.route;
    var infoBooking = route.params.infoBooking;
    var serviceBooking = infoBooking.infoServiceBooking.service_name;
    var repairman = infoBooking.infoServiceBooking.user_id.full_name;
    var priceRepair = infoBooking.infoServiceBooking.price;
    var addressRepair = infoBooking.address;
    var desc = infoBooking.bugService;
    var priceService = (5 / 100) * priceRepair;
    var priceTransport = 10000;
    var totalPrice = priceRepair + priceService + priceTransport;
    var navigation = native_1.useNavigation();
    var _b = react_1.useState(null), selectedMethod = _b[0], setSelectedMethod = _b[1];
    var _c = react_1.useState(null), errorPayment = _c[0], setErrorPayment = _c[1];
    var bookingService = useBookingService_1["default"]().bookingService;
    var data = {
        dayRepair: infoBooking.date,
        timeRepair: infoBooking.time,
        priceTransport: priceTransport,
        priceService: priceService,
        address: addressRepair,
        desc: desc
    };
    var handleMethodSelect = function () {
        setSelectedMethod(1);
        setErrorPayment("OK");
    };
    var handleConfirm = function () {
        if (errorPayment == null) {
            setErrorPayment("Vui lòng chọn phương thức thanh toán");
        }
        else {
            bookingService(data, infoBooking.infoServiceBooking._id, infoBooking.infoServiceBooking.user_id._id);
        }
    };
    var handleMomoSelect = function () {
        setSelectedMethod(2);
        setErrorPayment("OK");
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
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
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infors }, addressRepair)),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "T\u00F4\u0309ng:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, totalPrice.toLocaleString('vi-VN')),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.inforss }, "VN\u0110"))),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo }, "Cho\u0323n ph\u01B0\u01A1ng th\u01B0\u0301c thanh toa\u0301n"),
                react_1["default"].createElement(react_native_1.View, { style: { height: 20 } }, errorPayment !== "OK" && react_1["default"].createElement(react_native_1.Text, { style: { color: "red", fontWeight: "bold" } }, errorPayment)),
                react_1["default"].createElement(react_native_1.View, { style: styles.method },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles.buttonMethod,
                            selectedMethod === 1 && styles.selectedMethod,
                        ], onPress: handleMethodSelect },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.image1, source: require('../assets/ConfirmBooking/iconMomo.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleMethod }, "TT ti\u00EA\u0300n m\u0103\u0323t")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                            styles.buttonMethod,
                            selectedMethod === 2 && styles.selectedMethod,
                        ], onPress: function () { return handleMomoSelect(); } },
                        react_1["default"].createElement(react_native_1.Image, { style: styles.image2, source: require('../assets/ConfirmBooking/iconPrice.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleMethod }, "TT qua momo")))),
            react_1["default"].createElement(react_native_1.View, { style: styles.reConfirm },
                react_1["default"].createElement(react_native_1.Text, { style: styles.quesConfirm }, "Ba\u0323n co\u0301 \u0111\u00F4\u0300ng y\u0301 xa\u0301c th\u01B0\u0323c kh\u00F4ng?"))),
        react_1["default"].createElement(react_native_1.View, { style: styles.event },
            react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                    react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                        react_1["default"].createElement(react_native_1.View, { style: styles.bookNow },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "Hu\u0309y"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: handleConfirm },
                        react_1["default"].createElement(react_native_1.View, { style: styles.book },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u00F4\u0300ng y\u0301"))))))));
};
exports["default"] = ConfirmInforBooking;
var styles = react_native_1.StyleSheet.create({
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
        backgroundColor: '#394C6D',
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
        flex: 8
    },
    event: {
        flex: 2
    },
    infoService: {
        marginHorizontal: 20
    }
});
