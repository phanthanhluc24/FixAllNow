"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var ConfirmInforBooking = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.titleConfirm },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "XA\u0301C NH\u00C2\u0323N TH\u00D4NG TIN")),
        react_1["default"].createElement(react_native_1.View, { style: styles.infoContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo }, "Th\u00F4ng tin di\u0323ch vu\u0323"),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "\u0110\u01A1n s\u01B0\u0309a:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "S\u01B0\u0309a \u00F4 t\u00F4")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Th\u01A1\u0323:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "Tr\u00E2\u0300n Qu\u00F4\u0301c H\u01B0\u0303u")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Gi\u0301a s\u01B0\u0309a:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "1.500.000")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Phi\u0301 di\u0323ch vu\u0323:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "70.000")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "Phi\u0301 di chuy\u00EA\u0309n:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "10.000")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "\u0110i\u0323a \u0111i\u00EA\u0309m:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "B\u00EA\u0301n xe trung t\u00E2m")),
                react_1["default"].createElement(react_native_1.View, { style: styles.styleInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infor }, "T\u00F4\u0309ng:"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.infors }, "12.000.000"))),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titleInfo }, "Cho\u0323n ph\u01B0\u01A1ng th\u01B0\u0301c thanh toa\u0301n"),
                react_1["default"].createElement(react_native_1.View, { style: styles.method },
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonMethod },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/ConfirmBooking/iconMomo.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleMethod }, "TT ti\u00EA\u0300n m\u0103\u0323t")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonMethod },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/ConfirmBooking/iconPrice.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titleMethod }, "TT qua momo")))),
            react_1["default"].createElement(react_native_1.View, { style: styles.reConfirm },
                react_1["default"].createElement(react_native_1.Text, { style: styles.quesConfirm }, "Ba\u0323n co\u0301 \u0111\u00F4\u0300ng y\u0301 xa\u0301c th\u01B0\u0323c kh\u00F4ng?"))),
        react_1["default"].createElement(react_native_1.View, { style: styles.event },
            react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                    react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                        react_1["default"].createElement(react_native_1.View, { style: styles.bookNow },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t ngay"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button1, onPress: function () { return navigation.navigate('FormBookSchedule'); } },
                        react_1["default"].createElement(react_native_1.View, { style: styles.book },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t li\u0323ch"))))))));
};
exports["default"] = ConfirmInforBooking;
var styles = react_native_1.StyleSheet.create({
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
        marginHorizontal: 20,
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
        fontWeight: "bold",
        color: "#394C6D"
    },
    reConfirm: {
        alignItems: "center",
        justifyContent: "center"
    },
    titleMethod: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FCA234"
    },
    method: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    buttonMethod: {
        width: 140,
        height: 70,
        borderWidth: 3,
        borderColor: '#394C6D',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
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
    styleInfo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 10
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
        justifyContent: 'center',
        flex: 1
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
        flex: 1
    },
    infoService: {
        marginHorizontal: 20
    }
});
