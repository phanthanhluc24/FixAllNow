"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var HomeCategories_1 = require("../../HomeCategories");
var HeaderSearch_1 = require("../../HeaderSearch");
var HomeRepairmanPopular_1 = require("../../HomeRepairmanPopular");
var HomeServicePopular_1 = require("../../HomeServicePopular");
var ListServiceSearch_1 = require("../../ListServiceSearch");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var native_1 = require("@react-navigation/native");
var Home = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState([]), searchData = _a[0], setSearchData = _a[1];
    var _b = react_1.useState(false), isSearching = _b[0], setIsSearching = _b[1];
    var _c = react_1.useState(''), searchQuery = _c[0], setSearchQuery = _c[1];
    var handleSearch = function (data) {
        setSearchData(data);
        setIsSearching(true);
    };
    var handleChangeSearch = function (query) {
        setSearchQuery(query);
        setIsSearching(false);
    };
    var data = [{ key: 'HomeServicePopular' }];
    var handleResetMain = function () {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Root' }]
        });
    };
    var renderHeader = function () { return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(HeaderSearch_1["default"], { onSearch: handleSearch, onChangeText: handleChangeSearch, value: searchQuery }),
        !isSearching && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(HomeCategories_1["default"], null),
            react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopular },
                react_1["default"].createElement(react_native_1.View, { style: styles.containers },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u01A1\u0323 n\u00F4\u0309i b\u00E2\u0323t:"),
                    react_1["default"].createElement(HomeRepairmanPopular_1["default"], null))))))); };
    var renderService = function () { return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopulars },
            react_1["default"].createElement(react_native_1.View, { style: styles.containerss },
                react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Di\u0323ch vu\u0323 n\u00F4\u0309i b\u00E2\u0323t:"),
                react_1["default"].createElement(HomeServicePopular_1["default"], null))))); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container }, isSearching ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.search },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.iconExit, onPress: handleResetMain },
                react_1["default"].createElement(AntDesign_1["default"], { name: "arrowleft", size: 30, color: "#FCA234" })),
            react_1["default"].createElement(react_native_1.View, { style: { width: '90%' } },
                react_1["default"].createElement(HeaderSearch_1["default"], { onSearch: handleSearch, onChangeText: handleChangeSearch, value: searchQuery }))),
        react_1["default"].createElement(ListServiceSearch_1["default"], { data: searchData }))) : (react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item.key; }, renderItem: renderService, ListHeaderComponent: renderHeader }))));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    iconExit: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    repairmanPopular: {
        flex: 1,
        marginTop: 20
    },
    containers: {
        marginHorizontal: 20
    },
    title: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    repairmanPopulars: {
        flex: 1,
        marginTop: 20
    },
    containerss: {
        marginHorizontal: 20
    },
    titles: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold'
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
