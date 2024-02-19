"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetDetailRepairman_1 = require("../hooks/useGetDetailRepairman");
var useGetServiceOfRepairman_1 = require("../hooks/useGetServiceOfRepairman");
var native_1 = require("@react-navigation/native");
var DetailRepairman = function (_a) {
    var route = _a.route;
    var id = route.params.id;
    // console.log(id);
    var _b = useGetDetailRepairman_1["default"](id), repairman = _b.repairman, isLoading = _b.isLoading, isError = _b.isError;
    var serviceOfRepairman = useGetServiceOfRepairman_1["default"](id).serviceOfRepairman;
    console.log(serviceOfRepairman);
    var navigation = native_1.useNavigation();
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.loadingText }, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading repairman");
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.inforRepairman },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.View, { style: styles.info },
                    react_1["default"].createElement(react_native_1.Image, { style: styles.imgRp, source: { uri: repairman === null || repairman === void 0 ? void 0 : repairman.image } })),
                react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u00F4ng tin ca\u0301 nh\u00E2n"),
                react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Ho\u0323 va\u0300 t\u00EAn: "),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.full_name)),
                react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Ngh\u1EC1 nghi\u1EC7p: "),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.category_id.name)),
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
                    react_1["default"].createElement(react_native_1.View, { style: { marginHorizontal: 20 } },
                        react_1["default"].createElement(react_native_1.FlatList, { data: serviceOfRepairman, keyExtractor: function (services) { return services._id; }, renderItem: function (_a) {
                                var item = _a.item;
                                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                                        return navigation.navigate('DetailService', { id: item._id, title: item.service_name });
                                    } },
                                    react_1["default"].createElement(react_native_1.View, { style: styles.contents },
                                        react_1["default"].createElement(react_native_1.View, { style: styles.imgSer },
                                            react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                                        react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, item.service_name),
                                            react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                                                react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price.toLocaleString("vi-VN")),
                                                react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VND")),
                                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc)))));
                            } }))),
                react_1["default"].createElement(react_native_1.View, { style: styles.rateComment },
                    react_1["default"].createElement(react_native_1.View, { style: styles.containerTitle },
                        react_1["default"].createElement(react_native_1.View, { style: styles.rating },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titless }, "\u0110a\u0301nh gia\u0301:(30)"),
                            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RatedComment'); } },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.titlesss }, "\u0110a\u0301nh gia\u0301 ngay!"))),
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RatedComment'); } },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.suggest }, "Xem \u0111a\u0301nh gia\u0301 ngay na\u0300o!")))),
                react_1["default"].createElement(react_native_1.View, { style: styles.buttonChoose },
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonNow },
                        react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                            react_1["default"].createElement(react_native_1.View, { style: styles.bookNow },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t ngay"))),
                        react_1["default"].createElement(react_native_1.View, { style: styles.button1 },
                            react_1["default"].createElement(react_native_1.View, { style: styles.book },
                                react_1["default"].createElement(react_native_1.Text, { style: styles.books }, "\u0110\u0103\u0323t li\u0323ch"))))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.listService })));
};
exports["default"] = DetailRepairman;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    inforRepairman: {
        flex: 2
    },
    listService: {
        flex: 2
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
    containerTitle: {
        marginHorizontal: 20
    },
    rateComment: {
        marginTop: 20
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    suggest: {
        color: '#FCA234'
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    }
});
