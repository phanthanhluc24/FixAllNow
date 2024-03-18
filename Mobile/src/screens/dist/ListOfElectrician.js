"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var useGetListRepairmanOfCategorySpecific_1 = require("../hooks/useGetListRepairmanOfCategorySpecific");
var ListOfElectrician = function (_a) {
    var route = _a.route;
    var id = route.params.id;
    var navigation = native_1.useNavigation();
    var _b = useGetListRepairmanOfCategorySpecific_1["default"](id), listRepairmanOfCategory = _b.listRepairmanOfCategory, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', flex: 1, justifyContent: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading repairman");
    }
    if (listRepairmanOfCategory.length <= 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "Ch\u01B0a co\u0301 danh mu\u0323c na\u0300o!");
    }
    //show star rating
    var renderStars = function (averageStar) {
        var stars = [];
        for (var i = 1; i <= 5; i++) {
            stars.push(react_1["default"].createElement(FontAwesome_1["default"], { key: i, name: averageStar >= i ? 'star' : 'star-o', size: 20, color: averageStar >= i ? '#FFD700' : '#FFFFFF' }));
        }
        return stars;
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopular },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u01A1\u0323 n\u00F4\u0309i b\u00E2\u0323t"),
            react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 70 } },
                react_1["default"].createElement(react_native_1.FlatList, { data: listRepairmanOfCategory, keyExtractor: function (repairman) { return repairman._id; }, renderItem: function (_a) {
                        var item = _a.item;
                        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                                return navigation.navigate('DetailRepairman', {
                                    id: item._id,
                                    title: item.full_name
                                });
                            } },
                            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                                react_1["default"].createElement(react_native_1.View, { style: styles.imgRepairman },
                                    react_1["default"].createElement(react_native_1.Image, { source: { uri: item.avatar }, style: styles.img })),
                                react_1["default"].createElement(react_native_1.View, { style: styles.infoRepairman },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman },
                                        item.full_name,
                                        " "),
                                    react_1["default"].createElement(react_native_1.View, { style: styles.divInfo }, renderStars(item.averageStar))))));
                    } })))));
};
exports["default"] = ListOfElectrician;
var styles = react_native_1.StyleSheet.create({
    imgRepairman: {
        width: '30%'
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
        width: '70%'
    },
    repairmanPopular: {
        flex: 1,
        marginTop: 10
    },
    container: {
    // marginBottom:60,
    },
    title: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    repairman: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#FCA234',
        width: '90%',
        height: 132,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
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
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#394C6D"
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
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    }
});
