"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetRepairmansPopular_1 = require("../hooks/useGetRepairmansPopular");
var native_1 = require("@react-navigation/native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var HomeRepairmanPopular = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = useGetRepairmansPopular_1["default"](currentPage), repairmans = _b.repairmans, totalRepairman = _b.totalRepairman, isLoading = _b.isLoading, isError = _b.isError, fetchMore = _b.fetchMore;
    // console.log(repairmans);
    var handleLoadMore = function () {
        if (!isLoading) {
            fetchMore();
        }
    };
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
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
    //show star rating
    var renderStars = function (averageStar) {
        var stars = [];
        for (var i = 1; i <= 5; i++) {
            stars.push(react_1["default"].createElement(FontAwesome_1["default"], { key: i, name: averageStar >= i ? 'star' : 'star-o', size: 20, color: averageStar >= i ? '#FFD700' : '#FFFFFF' }));
        }
        return stars;
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerRepairman },
        react_1["default"].createElement(react_native_1.FlatList, { data: repairmans, keyExtractor: function (repairmans) { return repairmans._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                        return navigation.navigate('DetailRepairman', {
                            id: item._id,
                            title: item.full_name
                        });
                    } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: item.avatar }, style: styles.img }),
                        react_1["default"].createElement(react_native_1.View, { style: styles.infoRepairman },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman },
                                item.full_name,
                                " "),
                            react_1["default"].createElement(react_native_1.View, { style: styles.divInfo }, renderStars(item.averageStar))))));
            }, onEndReached: handleLoadMore, onEndReachedThreshold: 0.1 }),
        react_1["default"].createElement(react_native_1.View, { style: styles.paginationContainer }, Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: page, onPress: function () { return handelChangePage(page); }, style: [
                styles.paginationButton,
                currentPage === page && styles.currentPageButton,
            ] },
            react_1["default"].createElement(react_native_1.Text, { style: [
                    styles.paginationButtonText,
                    currentPage === page && styles.currentPageButtonText,
                ] }, page))); }))));
};
exports["default"] = HomeRepairmanPopular;
var styles = react_native_1.StyleSheet.create({
    address: {
        flexDirection: "row",
        alignItems: "center"
    },
    repairman: {
        marginTop: 10,
        backgroundColor: '#FCA234',
        width: '100%',
        height: 132,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
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
        height: '40%',
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
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
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
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    }
});
