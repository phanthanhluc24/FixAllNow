"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_2 = require("react-native");
var useGetNotificationBooking_1 = require("../../../hooks/useGetNotificationBooking");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var moment_1 = require("moment");
require("moment-duration-format");
var Notification = function () {
    var _a = react_1.useState({}), clicked = _a[0], setClicked = _a[1];
    var _b = useGetNotificationBooking_1["default"](), notifications = _b.notifications, isLoading = _b.isLoading, isError = _b.isError;
    console.log(notifications);
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
            react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' })));
    }
    if (notifications.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "Services not available!");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading categories");
    }
    // const handlePress = () => {
    //   setClicked(true);
    // };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.FlatList, { data: notifications, keyExtractor: function (notification) { return notification._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_2.TouchableOpacity, { style: [
                        styles.layout,
                        { backgroundColor: clicked ? '#ffffff' : '#FFC278' },
                    ] },
                    react_1["default"].createElement(react_native_1.View, { style: styles.notificationContainer },
                        react_1["default"].createElement(react_native_1.View, { style: styles.avatarShop },
                            react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: { uri: item === null || item === void 0 ? void 0 : item.service_id.image } })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.contentNotification },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, (item === null || item === void 0 ? void 0 : item.titleRepairmanFinder) || (item === null || item === void 0 ? void 0 : item.titleRepairman)),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3 }, (item === null || item === void 0 ? void 0 : item.bodyRepairmanFinder) || (item === null || item === void 0 ? void 0 : item.bodyRepairman)),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.time }, moment_1["default"]
                                .duration(moment_1["default"]().diff(moment_1["default"](item.updatedAt))).format(' D [ngày] h [giờ]'))))));
            } })));
};
exports["default"] = Notification;
var styles = react_native_1.StyleSheet.create({
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    time: {
        color: 'blue'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#394C6D"
    },
    container: {
        flex: 1
    },
    layout: {
        paddingVertical: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    avatarShop: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentNotification: {
        width: '75%',
        padding: 10
    },
    openView: {
        width: '10%'
    }
});
