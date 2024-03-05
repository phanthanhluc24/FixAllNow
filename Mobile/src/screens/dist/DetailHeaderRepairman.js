"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetDetailRepairman_1 = require("../hooks/useGetDetailRepairman");
var useGetServiceOfRepairman_1 = require("../hooks/useGetServiceOfRepairman");
var native_1 = require("@react-navigation/native");
var DetailCommentRepairman_1 = require("./DetailCommentRepairman");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var DetailHeaderRepairman = function () {
    var route = native_1.useRoute();
    var id = route.params.id;
    var repairman = useGetDetailRepairman_1["default"](id).repairman;
    var _a = useGetServiceOfRepairman_1["default"](id), serviceOfRepairman = _a.serviceOfRepairman, isLoading = _a.isLoading, isError = _a.isError;
    var navigation = native_1.useNavigation();
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', flex: 1, justifyContent: "center" } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading repairman");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerHeaderRepairman },
        react_1["default"].createElement(react_native_1.View, { style: styles.info },
            react_1["default"].createElement(react_native_1.Image, { style: styles.imgRp, source: { uri: repairman === null || repairman === void 0 ? void 0 : repairman.image } })),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u00F4ng tin ca\u0301 nh\u00E2n"),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Ho\u0323 va\u0300 t\u00EAn: "),
            react_1["default"].createElement(react_native_1.Text, { style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.full_name)),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: "),
            react_1["default"].createElement(react_native_1.Text, { style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.number_phone)),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "\u0110\u1ECBa ch\u1EC9:"),
            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.content },
                ' ', repairman === null || repairman === void 0 ? void 0 :
                repairman.address)),
        react_1["default"].createElement(react_native_1.View, { style: styles.containerService },
            react_1["default"].createElement(react_native_1.Text, { style: styles.service }, "Di\u0323ch vu\u0323"),
            react_1["default"].createElement(react_native_1.View, { style: { marginHorizontal: 20 } }, serviceOfRepairman.length > 0 ? (react_1["default"].createElement(react_native_1.FlatList, { data: serviceOfRepairman, keyExtractor: function (services) { return services._id; }, renderItem: function (_a) {
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
                react_1["default"].createElement(react_native_1.Text, { style: styles.noService }, "(Ch\u01B0a c\u00F3 d\u1ECBch v\u1EE5 n\u00E0o!)"))))),
        react_1["default"].createElement(DetailCommentRepairman_1["default"], null)));
};
exports["default"] = DetailHeaderRepairman;
var styles = react_native_1.StyleSheet.create({
    noService: {
        fontSize: 15,
        color: 'black'
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    containerHeaderRepairman: {
        flex: 1
    },
    info: {
        alignItems: 'center',
        paddingTop: 10
    },
    imgRp: {
        borderWidth: 4,
        borderColor: '#394C6D',
        borderRadius: 100,
        width: 150,
        height: 150
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#394C6D',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    detailInfo: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        alignItems: 'center',
        paddingTop: 10
    },
    titles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    titless: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    titlesss: {
        fontSize: 18,
        color: '#FCA234',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FCA234',
        padding: 3
    },
    content: {
        fontSize: 18
    },
    containerService: {
        marginTop: 20
    },
    service: {
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    repairman: {
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#394C6D',
        width: '100%',
        height: 132,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    description: {
        color: '#394C6D'
    }
});
