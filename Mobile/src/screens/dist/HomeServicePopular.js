"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetServicePopular_1 = require("../hooks/useGetServicePopular");
var HomeServicePopular = function () {
    var _a = useGetServicePopular_1["default"](), services = _a.services, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, null, "Loading...");
    }
    if (services.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "Services not available!");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading categories");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerRepairman },
        react_1["default"].createElement(react_native_1.FlatList, { data: services, keyExtractor: function (services) { return services._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.View, { style: styles.repairman },
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img }),
                        react_1["default"].createElement(react_native_1.View, { style: styles.info },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman }, item.service_name),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc)))));
            } })));
};
exports["default"] = HomeServicePopular;
var styles = react_native_1.StyleSheet.create({
    repairman: {
        marginTop: 10,
        backgroundColor: '#394C6D',
        width: '100%',
        height: 132,
        borderRadius: 10
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
