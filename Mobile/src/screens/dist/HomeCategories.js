"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetCategoryService_1 = require("../hooks/useGetCategoryService");
var native_1 = require("@react-navigation/native");
var HomeCategories = function () {
    var navigation = native_1.useNavigation();
    var _a = useGetCategoryService_1["default"](), categories = _a.categories, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, { style: { marginHorizontal: 20 } }, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.error }, "Error loading categories");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerCategory },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.hello }, "ALO TH\u01A0\u0323"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detaildemo }, "T\u00ECm ki\u1EBFm th\u1EE3 s\u1EEDa ch\u1EEFa d\u1EC5 d\u00E0ng h\u01A1n ch\u1EC9 v\u1EDBi v\u00E0i ph\u00FAt m\u00E0 kh\u00F4ng t\u1ED1n nhi\u1EC1u th\u1EDDi gian")),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/demo.png') })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailCategory },
            react_1["default"].createElement(react_native_1.FlatList, { data: categories, keyExtractor: function (category) { return category._id; }, numColumns: 3, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.category, onPress: function () { return navigation.navigate('ListOfElectrician'); } },
                        react_1["default"].createElement(react_native_1.View, { style: styles.imgCategory },
                            react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.nameCategory },
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.titleCategory }, item.name))));
                } }))));
};
exports["default"] = HomeCategories;
var styles = react_native_1.StyleSheet.create({
    containerCategory: {
        flex: 1
    },
    container: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#394C6D',
        width: '90%',
        height: 139
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    hello: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    detaildemo: {
        fontSize: 13,
        color: '#FFFFFF',
        width: 150
    },
    detailCategory: {
        marginHorizontal: 20,
        paddingTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingTop: 20
    },
    category: {
        alignItems: 'center',
        width: 110,
        justifyContent: "center",
        height: "auto",
        padding: 5
    },
    titleCategory: {
        color: '#394C6D',
        fontSize: 15,
        padding: 5
    },
    img: {
        width: 80,
        height: 80,
        // resizeMode: 'cover',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "black"
    },
    nameCategory: {
        alignItems: "center",
        justifyContent: "center"
    },
    imgCategory: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    error: {
        marginHorizontal: 20
    }
});
