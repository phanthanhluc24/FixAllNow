"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetServicePopular_1 = require("../hooks/useGetServicePopular");
var native_1 = require("@react-navigation/native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var HomeServicePopular = function () {
    var navigation = native_1.useNavigation();
    var _a = useGetServicePopular_1["default"](), services = _a.services, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }),
                ";")));
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
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                        return navigation.navigate('DetailService', {
                            id: item._id,
                            title: item.service_name
                        });
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.View, { style: styles.image },
                            react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.info },
                            react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, item.service_name),
                                react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price.toLocaleString('vi-VN')),
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VND")),
                                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc))))));
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
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    }
});
