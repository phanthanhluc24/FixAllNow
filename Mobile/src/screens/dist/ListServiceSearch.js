"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var ListServiceSearch = function (_a) {
    var data = _a.data;
    var navigation = native_1.useNavigation();
    var renderItemSearch = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () { return navigation.navigate('DetailService', { id: item._id }); } },
            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageService },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                    react_1["default"].createElement(react_native_1.View, { style: styles.info },
                        react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, item.service_name),
                        react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, "vn\u0111")),
                        react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc))))));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopulars },
        react_1["default"].createElement(react_native_1.View, { style: styles.containerss },
            react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item._id; }, renderItem: renderItemSearch }))));
};
exports["default"] = ListServiceSearch;
var styles = react_native_1.StyleSheet.create({
    repairmanPopulars: {
        flex: 1,
        marginTop: 10
    },
    containerss: {
        marginHorizontal: 10
    },
    repairman: {
        marginTop: 10,
        backgroundColor: '#394C6D',
        width: '100%',
        height: 132,
        borderRadius: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    imageService: {
        width: '30%'
    },
    img: {
        width: 100,
        height: 100
    },
    infoService: {
        width: '70%'
    },
    nameRepairman: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    description: {
        width: '100%',
        color: '#FFFFFF'
    },
    info: {
        marginHorizontal: 20
    },
    vnd: {
        fontSize: 18,
        color: '#FCA234'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 18,
        color: '#FCA234',
        fontWeight: 'bold',
        width: 'auto',
        paddingVertical: 5
    }
});
