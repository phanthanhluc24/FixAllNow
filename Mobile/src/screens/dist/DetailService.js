"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetDetailService_1 = require("../hooks/useGetDetailService");
var native_1 = require("@react-navigation/native");
var DetailService = function (_a) {
    var route = _a.route;
    var navigation = native_1.useNavigation();
    var id = route.params.id;
    var _b = useGetDetailService_1["default"](id), service = _b.service, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.loadingText }, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading repairman");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerServiceSpecific },
        react_1["default"].createElement(react_native_1.View, { style: styles.infoServices },
            react_1["default"].createElement(react_native_1.Image, { source: { uri: service === null || service === void 0 ? void 0 : service.image }, style: styles.imageSer }),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoStyle },
                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameStyle }, service === null || service === void 0 ? void 0 : service.service_name),
                react_1["default"].createElement(react_native_1.Text, { style: styles.priceStyle }, service === null || service === void 0 ? void 0 :
                    service.price.toLocaleString('vi-VN'),
                    ' VND'),
                react_1["default"].createElement(react_native_1.Text, { style: styles.description }, service === null || service === void 0 ? void 0 : service.desc)),
            react_1["default"].createElement(react_native_1.View, { style: styles.oneLine }),
            react_1["default"].createElement(react_native_1.View, { style: styles.infoUser },
                react_1["default"].createElement(react_native_1.View, { style: styles.containerInfoUser },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: service === null || service === void 0 ? void 0 : service.user_id.image }, style: styles.imageStyle }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.fullName }, service === null || service === void 0 ? void 0 : service.user_id.full_name)),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonView, onPress: function () {
                        return navigation.navigate('DetailRepairman', { id: service === null || service === void 0 ? void 0 : service.user_id._id, title: service === null || service === void 0 ? void 0 : service.user_id.full_name });
                    } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detailRepairman }, "Xem th\u01A1\u0323!")))),
        react_1["default"].createElement(react_native_1.View, { style: styles.belowInfoService },
            react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                    react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                        react_1["default"].createElement(react_native_1.View, { style: styles.bookNow },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t ngay"))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                        react_1["default"].createElement(react_native_1.View, { style: styles.book },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t li\u0323ch"))))))));
};
exports["default"] = DetailService;
var styles = react_native_1.StyleSheet.create({
    detailRepairman: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#394C6D"
    },
    buttonView: {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderColor: "#FCA234",
        borderWidth: 2,
        height: 30,
        width: 90,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 40
    },
    fullName: {
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: "bold",
        color: "#394C6D"
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: "#FCA234",
        borderWidth: 2
    },
    infoUser: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: "space-between"
    },
    containerInfoUser: {
        flexDirection: "row",
        alignItems: "center"
    },
    containerServiceSpecific: {
        flex: 1
    },
    infoServices: {
        flex: 3
    },
    belowInfoService: {
        flex: 1
    },
    imageSer: {
        width: '100%',
        height: 300
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    },
    priceStyle: {
        color: '#FCA234',
        fontWeight: 'bold',
        fontSize: 20,
        width: '40%'
    },
    infoStyle: {
        marginHorizontal: 15,
        marginTop: 13
    },
    nameStyle: {
        color: '#394C6D',
        fontSize: 25,
        fontWeight: 'bold',
        width: '90%'
    },
    description: {
        color: '#394C6D',
        fontSize: 15
    },
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
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
        width: "100%",
        backgroundColor: "#FCA234",
        height: 1,
        marginTop: 15
    }
});
