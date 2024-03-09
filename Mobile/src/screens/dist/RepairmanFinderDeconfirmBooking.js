"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var RepairmanFinderDeconfirmBooking = function (_a) {
    var cancelledBooking = _a.cancelledBooking;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.FlatList, { data: cancelledBooking, keyExtractor: function (cancelledBooking) { return cancelledBooking._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.View, { style: styles.cartService },
                    react_1["default"].createElement(react_native_1.View, { style: styles.headerCart },
                        react_1["default"].createElement(react_native_1.View, { style: styles.nameShop },
                            react_1["default"].createElement(react_native_1.View, { style: styles.groundNameApp },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.nameApp }, "FixAllNow")),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameService }, " Di\u0323ch vu\u0323")),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                                react_1["default"].createElement(react_native_1.Text, { style: styles.waitPayment }, item.status)))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.View, { style: styles.image },
                            react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/avatar.png'), style: styles.img })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.info },
                            react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, "Di\u0323ch vu\u0323 ba\u0309o tri\u0300 \u00F4 t\u00F4"),
                                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.description }, "Qua\u0323t nha\u0300 t\u00F4i m\u01A1\u0301i mua v\u00EA\u0300 nh\u01B0ng cha\u0323y 5 phu\u0301t la\u0300 no\u0301 la\u0323i bay ra mu\u0300i kh\u0103\u0301c"),
                                react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                                    react_1["default"].createElement(react_native_1.View, null,
                                        react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                                            react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, "\u0111"),
                                            react_1["default"].createElement(react_native_1.Text, { style: styles.price }, "100.000"))))))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment },
                        react_1["default"].createElement(react_native_1.View, { style: styles.background },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameConfirm }, "\u0110\u0103\u0323t la\u0323i")))));
            } })));
};
exports["default"] = RepairmanFinderDeconfirmBooking;
var styles = react_native_1.StyleSheet.create({
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
        justifyContent: 'center',
        padding: 10,
        width: '60%'
    },
    imageTotal: {
        width: 30,
        height: 30
    },
    totalPayment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoService: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#394C6D'
    },
    img: {
        width: 60,
        height: 60
    },
    nameRepairman: {
        fontSize: 15,
        color: '#394C6D',
        fontWeight: 'bold'
    },
    vnd: {
        fontSize: 18,
        color: '#394C6D'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 15,
        color: '#394C6D',
        width: 'auto',
        paddingVertical: 5
    },
    description: {
        width: '100%',
        color: '#394C6D'
    },
    image: {
        width: '15%'
    },
    info: {
        marginHorizontal: 20,
        width: '70%'
    },
    infos: {
        marginHorizontal: 10
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
        padding: 10,
        backgroundColor: '#C1CDE2',
        marginTop: 10
    },
    headerCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameShop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
