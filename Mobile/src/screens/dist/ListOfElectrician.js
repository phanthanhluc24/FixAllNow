"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var useGetListRepairmanOfCategorySpecific_1 = require("../hooks/useGetListRepairmanOfCategorySpecific");
var ListOfElectrician = function (_a) {
    var route = _a.route;
    var id = route.params.id;
    var navigation = native_1.useNavigation();
    var _b = useGetListRepairmanOfCategorySpecific_1["default"](id), listRepairmanOfCategory = _b.listRepairmanOfCategory, isLoading = _b.isLoading, isError = _b.isError;
    // console.log(listRepairmanOfCategory);
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.loadingText }, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading repairman");
    }
    if (listRepairmanOfCategory.length <= 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "Ch\u01B0a co\u0301 danh mu\u0323c na\u0300o!");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopular },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u01A1\u0323 n\u00F4\u0309i b\u00E2\u0323t"),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.FlatList, { data: listRepairmanOfCategory, keyExtractor: function (repairman) { return repairman._id; }, renderItem: function (_a) {
                        var item = _a.item;
                        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                                return navigation.navigate('DetailRepairman', { id: item._id });
                            } },
                            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                                react_1["default"].createElement(react_native_1.View, { style: styles.imgRepairman },
                                    react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                                react_1["default"].createElement(react_native_1.View, { style: styles.infoRepairman },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman },
                                        item.full_name,
                                        " "),
                                    react_1["default"].createElement(react_native_1.View, { style: styles.divInfo }, item.averageStar < 1 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement(react_native_1.Text, { style: styles.averageStar },
                                            item.averageStar,
                                            "/5"),
                                        react_1["default"].createElement(react_native_1.Image, { style: styles.iconStar, source: require('../assets/Homes/emptyStar.png') }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement(react_native_1.Text, { style: styles.averageStar },
                                            item.averageStar,
                                            "/5"),
                                        react_1["default"].createElement(react_native_1.Image, { style: styles.iconStar, source: require('../assets/Homes/starIcon.png') }))))))));
                    } })))));
};
exports["default"] = ListOfElectrician;
var styles = react_native_1.StyleSheet.create({
    imgRepairman: {
        width: "30%"
    },
    iconStar: {
        width: 30,
        height: 30
    },
    averageStar: {
        color: '#394C6D',
        fontSize: 15,
        height: '50%',
        justifyContent: 'center'
    },
    divInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
        height: 36
    },
    infoRepairman: {
        marginHorizontal: 20,
        width: "70%"
    },
    repairmanPopular: {
        flex: 1,
        marginTop: 10
    },
    container: {
        marginHorizontal: 20
    },
    title: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    repairman: {
        marginTop: 10,
        backgroundColor: '#FCA234',
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
        height: 100,
        borderRadius: 50
    },
    nameRepairman: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    distance: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    }
});
