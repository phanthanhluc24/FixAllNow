"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetRepairmansPopular_1 = require("../hooks/useGetRepairmansPopular");
var HomeRepairmanPopular = function () {
    var _a = useGetRepairmansPopular_1["default"](), repairmans = _a.repairmans, isLoading = _a.isLoading, isError = _a.isError, fetchMore = _a.fetchMore;
    // console.log(data);
    var handleLoadMore = function () {
        if (!isLoading) {
            fetchMore();
        }
    };
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, null, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading categories");
    }
    if (repairmans.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "No repairmen available");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerRepairman },
        react_1["default"].createElement(react_native_1.FlatList, { data: repairmans, keyExtractor: function (repairmans) { return repairmans._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.View, { style: styles.repairman },
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img }),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman }, item.full_name),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.distance }, item.number_phone),
                            react_1["default"].createElement(react_native_1.Text, null, item.averageStar)))));
            }, onEndReached: handleLoadMore, onEndReachedThreshold: 0.1 })));
};
exports["default"] = HomeRepairmanPopular;
var styles = react_native_1.StyleSheet.create({
    repairman: {
        marginTop: 10,
        backgroundColor: '#FCA234',
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
    distance: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    }
});
