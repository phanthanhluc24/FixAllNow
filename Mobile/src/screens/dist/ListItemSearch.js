"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ListItemSearch = function (_a) {
    var data = _a.data;
    var renderItemSearch = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.View, { style: styles.repairman },
            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img }),
                react_1["default"].createElement(react_native_1.View, { style: styles.info },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman }, item.service_name),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc)))));
    };
    return (react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item._id; }, renderItem: renderItemSearch }));
};
exports["default"] = ListItemSearch;
var styles = react_native_1.StyleSheet.create({
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
    img: {
        width: 100,
        height: 100
    },
    nameRepairman: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    price: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '50%',
        paddingVertical: 5
    },
    description: {
        width: '60%',
        color: '#FFFFFF'
    },
    info: {
        marginHorizontal: 20
    }
});
