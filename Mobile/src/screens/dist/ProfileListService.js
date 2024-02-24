"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var native_1 = require("@react-navigation/native");
var Entypo_1 = require("react-native-vector-icons/Entypo");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var ProfileListService = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState([
        {
            id: '1',
            Image: '',
            service_name: 'hhhhaha',
            price: 123000,
            desc: 'sdhsdhsds'
        },
        {
            id: '2',
            Image: 'Item 1',
            service_name: 'hhhhaha',
            price: 123000,
            desc: 'sdhsdhsds'
        },
        {
            id: '3',
            Image: 'Item 1',
            service_name: 'hhhhaha',
            price: 123000,
            desc: 'sdhsdhsds'
        },
        {
            id: '4',
            Image: 'Item 1',
            service_name: 'hhhhaha',
            price: 123000,
            desc: 'sdhsdhsds'
        },
        {
            id: '5',
            Image: 'Item 1',
            service_name: 'hhhhaha',
            price: 123000,
            desc: 'sdhsdhsds'
        },
    ]), data = _a[0], setData = _a[1];
    var renderItem = function (data) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
            return navigation.navigate('DetailService', {
                id: data.item._id,
                title: data.item.service_name
            });
        } },
        react_1["default"].createElement(react_native_1.View, { style: styles.content },
            react_1["default"].createElement(react_native_1.View, { style: styles.image },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: data.item.image }, style: styles.img })),
            react_1["default"].createElement(react_native_1.View, { style: styles.info },
                react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, data.item.service_name),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, data.item.price.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VND")),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, data.item.desc)))))); };
    var renderHiddenItem = function (data, rowMap) { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowBack },
        react_1["default"].createElement(react_native_1.Text, { style: styles.deleteService },
            react_1["default"].createElement(AntDesign_1["default"], { name: "delete", color: "#FFFFFF", size: 25 })),
        react_1["default"].createElement(react_native_1.Text, { style: styles.editService },
            react_1["default"].createElement(Entypo_1["default"], { name: "edit", size: 25, color: "#FFFFFF" })))); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { data: data, renderItem: renderItem, renderHiddenItem: renderHiddenItem, leftOpenValue: 75, rightOpenValue: -75 })));
};
exports["default"] = ProfileListService;
var styles = react_native_1.StyleSheet.create({
    deleteService: {
        marginHorizontal: 20
    },
    editService: {
        marginHorizontal: 20
    },
    containerListService: {
        flex: 1,
        backgroundColor: '#394C6D'
    },
    container: {
        flex: 1,
        backgroundColor: '#394C6D'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#394C6D',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#394C6D',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "#FCA234"
    },
    repairman: {
        backgroundColor: '#FCA234',
        flex: 1,
        height: 132,
        marginHorizontal: 15,
        borderBottomWidth: 1
    },
    containerRepairman: {
        flex: 1
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    img: {
        width: 100,
        height: 100
    },
    nameRepairman: {
        fontSize: 18,
        color: '#FFFFFF',
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
        fontSize: 18,
        color: '#394C6D',
        fontWeight: 'bold',
        width: 'auto',
        paddingVertical: 5
    },
    description: {
        width: '100%',
        color: '#FFFFFF'
    },
    image: {
        width: '30%'
    },
    info: {
        marginHorizontal: 20,
        width: '70%'
    },
    infos: {
        marginHorizontal: 10
    }
});
