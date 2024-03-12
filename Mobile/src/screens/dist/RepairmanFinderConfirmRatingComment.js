"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var native_1 = require("@react-navigation/native");
var moment_1 = require("moment");
require("moment-duration-format");
var useGetBookingNotYetRated_1 = require("../hooks/useGetBookingNotYetRated");
var RepairmanFinderConfirmRatingComment = function () {
    var navigation = native_1.useNavigation();
    var navigateToRateCommentPage = function (item) { return function () {
        console.log(item);
        navigation.navigate('RatedComment', { service_id: item });
    }; };
    var _a = useGetBookingNotYetRated_1["default"](), bookingNotYetrating = _a.bookingNotYetrating, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (bookingNotYetrating.length === 0) {
        return (react_1["default"].createElement(react_native_1.View, { style: {
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40
            } },
            react_1["default"].createElement(react_native_1.Text, { style: { color: '#FCA234', fontWeight: 'bold' } }, "Ch\u01B0a co\u0301 \u0111\u01A1n na\u0300o?")));
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading categories");
    }
    var formatTimeAgo = function (createdAt) {
        var duration = moment_1["default"].duration(moment_1["default"]().diff(moment_1["default"](createdAt)));
        var days = duration.days();
        var hours = duration.hours();
        var minutes = duration.minutes();
        if (days > 0) {
            return days + " ng\u00E0y tr\u01B0\u1EDBc";
        }
        else if (hours > 0) {
            return hours + " gi\u1EDD tr\u01B0\u1EDBc";
        }
        else {
            return minutes + " ph\u00FAt tr\u01B0\u1EDBc";
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.FlatList, { data: bookingNotYetrating, keyExtractor: function (bookingNotYetrating) { return bookingNotYetrating._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.cartService, onPress: navigateToRateCommentPage(item.service_id._id) },
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.View, { style: styles.content },
                            react_1["default"].createElement(react_native_1.View, { style: styles.image },
                                react_1["default"].createElement(react_native_1.Image, { source: { uri: item.service_id.image }, style: styles.img })),
                            react_1["default"].createElement(react_native_1.View, { style: styles.info },
                                react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, item.service_id.service_name),
                                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.description }, item.desc),
                                    react_1["default"].createElement(react_native_1.View, { style: styles.infoService },
                                        react_1["default"].createElement(react_native_1.View, null,
                                            react_1["default"].createElement(react_native_1.View, { style: styles.timeBook },
                                                react_1["default"].createElement(react_native_1.Text, { style: styles.dateTime }, formatTimeAgo(item.createdAt))))))))),
                    react_1["default"].createElement(react_native_1.View, { style: styles.totalPayment })));
            } })));
};
exports["default"] = RepairmanFinderConfirmRatingComment;
var styles = react_native_1.StyleSheet.create({
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    timeBook: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    dateTime: {
        color: 'blue'
    },
    nameConfirm: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    background: {
        backgroundColor: '#394C6D',
        borderRadius: 5,
        width: '90%',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgrounds: {
        backgroundColor: '#FCA234',
        borderRadius: 5,
        width: '90%',
        height: 40,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonConfirm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    payment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '60%'
    },
    imageTotal: {
        width: 30,
        height: 30
    },
    totalPayment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoService: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#394C6D'
    },
    nameRepairman: {
        fontSize: 18,
        color: '#394C6D',
        fontWeight: 'bold'
    },
    vnd: {
        fontSize: 15,
        color: '#394C6D'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 15,
        color: '#394C6D',
        width: 'auto',
        paddingVertical: 5
    },
    description: {
        width: '100%',
        color: '#394C6D'
    },
    image: {
        width: '15%'
    },
    info: {
        marginHorizontal: 20,
        width: '70%'
    },
    infos: {
        marginHorizontal: 10
    },
    waitPayment: {
        color: '#394C6D',
        fontWeight: 'bold'
    },
    nameService: {
        fontWeight: 'bold',
        color: 'black'
    },
    groundNameApp: {
    // backgroundColor:"#394C6D",
    // borderRadius:5
    },
    nameApp: {
        color: '#FCA234',
        backgroundColor: '#394C6D'
    },
    container: {
        width: '100%',
        height: '100%'
    },
    cartService: {
        padding: 10,
        paddingVertical: 20,
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginHorizontal: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    headerCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameShop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
