"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetRepairmansPopular_1 = require("../hooks/useGetRepairmansPopular");
var native_1 = require("@react-navigation/native");
var HomeRepairmanPopular = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = useGetRepairmansPopular_1["default"](currentPage), repairmans = _b.repairmans, totalRepairman = _b.totalRepairman, isLoading = _b.isLoading, isError = _b.isError, fetchMore = _b.fetchMore;
    var handleLoadMore = function () {
        if (!isLoading) {
            fetchMore();
        }
    };
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.loadingText }, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading categories");
    }
    if (repairmans.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "No repairmen available");
    }
    //pagination repairman
    var pageSize = 10;
    var totalPages = Math.ceil(totalRepairman / pageSize);
    var handelChangePage = function (page) {
        setCurrentPage(page);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerRepairman },
        react_1["default"].createElement(react_native_1.FlatList, { data: repairmans, keyExtractor: function (repairmans) { return repairmans._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                        return navigation.navigate('DetailRepairman', { id: item._id, title: item.full_name });
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: item.avatar }, style: styles.img }),
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
            }, onEndReached: handleLoadMore, onEndReachedThreshold: 0.1 }),
        react_1["default"].createElement(react_native_1.View, { style: styles.paginationContainer }, Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: page, onPress: function () { return handelChangePage(page); }, style: [styles.paginationButton, currentPage === page && styles.currentPageButton] },
            react_1["default"].createElement(react_native_1.Text, { style: [styles.paginationButtonText, currentPage === page && styles.currentPageButtonText] }, page))); }))));
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
        padding: 15
    },
    infoRepairman: {
        marginHorizontal: 20
    },
    img: {
        width: 100,
        height: 100,
        borderWidth: 4,
        borderColor: '#394C6D',
        borderRadius: 100
    },
    nameRepairman: {
        fontSize: 18,
        color: '#394C6D',
        fontWeight: 'bold',
        height: '50%',
        justifyContent: 'center'
    },
    averageStar: {
        color: '#394C6D',
        fontSize: 15,
        height: '50%',
        justifyContent: 'center'
    },
    distance: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
    iconStar: {
        width: 30,
        height: 30
    },
    divInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
        height: 36
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    paginationButton: {
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#DDDDDD',
        borderRadius: 5
    },
    paginationButtonText: {
        fontSize: 16
    },
    currentPageButton: {
        backgroundColor: 'orange'
    },
    currentPageButtonText: {
        color: 'white'
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    }
});
