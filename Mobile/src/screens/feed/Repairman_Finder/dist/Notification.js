"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var react_native_2 = require("react-native");
var useGetNotificationBooking_1 = require("../../../hooks/useGetNotificationBooking");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var Notification = function () {
    var _a = react_1.useState({}), clicked = _a[0], setClicked = _a[1];
    var _b = useGetNotificationBooking_1["default"](), notifications = _b.notifications, isLoading = _b.isLoading, isError = _b.isError;
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
                        { backgroundColor: clicked ? '#A3C5FF' : '#BCD4E6' },
                    ] },
                    react_1["default"].createElement(react_native_1.View, { style: styles.notificationContainer },
                        react_1["default"].createElement(react_native_1.View, { style: styles.avatarShop },
                            react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: require('../../../assets/Homes/avatar.png') })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.contentNotification },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, item === null || item === void 0 ? void 0 : item.titleRepairmanFinder),
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3 },
                                " ", item === null || item === void 0 ? void 0 :
                                item.bodyRepairmanFinder),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.time }, "16 nga\u0300y tr\u01B0\u01A1\u0301c")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.openView },
                            react_1["default"].createElement(AntDesign_1["default"], { name: "ellipsis1", color: "#394C6D", size: 30 })))));
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
        height: 50
    },
    container: {
        flex: 1
    },
    layout: {
        borderBottomWidth: 1,
        borderBottomColor: '#394C6D'
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
