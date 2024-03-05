"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var useGetDetailService_1 = require("../hooks/useGetDetailService");
var native_2 = require("@react-navigation/native");
var useGetServiceRevolve_1 = require("../hooks/useGetServiceRevolve");
var DetailServiceButton_1 = require("./DetailServiceButton");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var DetailInfoService = function () {
    var route = native_1.useRoute();
    var id = route.params.id;
    var navigation = native_2.useNavigation();
    var serviceRevolve = useGetServiceRevolve_1["default"](id).serviceRevolve;
    var _a = useGetDetailService_1["default"](id), service = _a.service, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading info service");
    }
    return (react_1["default"].createElement(react_native_1.View, null,
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
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                        return navigation.navigate('DetailRepairman', {
                            id: service === null || service === void 0 ? void 0 : service.user_id._id,
                            title: service === null || service === void 0 ? void 0 : service.user_id.full_name
                        });
                    }, style: styles.containerInfoUser },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: service === null || service === void 0 ? void 0 : service.user_id.image }, style: styles.imageStyle }),
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonEvent },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.fullName }, service === null || service === void 0 ? void 0 : service.user_id.full_name)))),
            react_1["default"].createElement(react_native_1.View, { style: styles.listServiceRevolve },
                react_1["default"].createElement(react_native_1.Text, { style: styles.serviceRevolve }, "Di\u0323ch vu\u0323 li\u00EAn quan"),
                react_1["default"].createElement(react_native_1.View, { style: { marginHorizontal: 10 } }, serviceRevolve.length > 0 ? (react_1["default"].createElement(react_native_1.FlatList, { data: serviceRevolve, keyExtractor: function (services) { return services._id; }, renderItem: function (_a) {
                        var item = _a.item;
                        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                                return navigation.navigate('DetailService', {
                                    id: item._id,
                                    title: item.service_name
                                });
                            } },
                            react_1["default"].createElement(react_native_1.View, { style: styles.contents },
                                react_1["default"].createElement(react_native_1.View, { style: styles.imgSer },
                                    react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                                react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, item.service_name),
                                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price.toLocaleString('vi-VN')),
                                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VND")),
                                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc)))));
                    } })) : (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.noService }, "(Kh\u00F4ng c\u00F3 d\u1ECBch v\u1EE5 li\u00EAn quan!)")))))),
        react_1["default"].createElement(DetailServiceButton_1["default"], { serviceInfo: service })));
};
exports["default"] = DetailInfoService;
var styles = react_native_1.StyleSheet.create({
    noService: {
        fontSize: 15,
        color: '#FCA234'
    },
    serviceRevolve: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D',
        marginHorizontal: 10
    },
    buttonEvent: {},
    detailRepairman: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    buttonView: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderColor: '#FCA234',
        borderWidth: 2,
        height: 30,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
    fullName: {
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: '#FCA234',
        borderWidth: 2
    },
    containerInfoUser: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoUser: {
        width: '100%',
        marginHorizontal: 20,
        marginVertical: 15
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    infoServices: {
        flex: 9
    },
    belowInfoService: {
        flex: 1
    },
    imageSer: {
        width: '100%',
        height: 300
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
    priceStyle: {
        color: '#FCA234',
        fontWeight: 'bold',
        fontSize: 20,
        width: '40%'
    },
    oneLine: {
        width: '100%',
        backgroundColor: '#FCA234',
        height: 1,
        marginTop: 15
    },
    repairman: {
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FCA234',
        width: '100%',
        height: 132,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listServiceRevolve: {
        flex: 1,
        width: '100%'
    },
    contents: {
        flexDirection: 'row'
    },
    imgSer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100
    },
    infos: {
        width: '60%',
        justifyContent: 'center'
    },
    nameRepairman: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    price: {
        color: '#FCA234',
        fontSize: 18,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    vnd: {
        fontSize: 18,
        color: '#FCA234'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
