"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var useGetRateComment_1 = require("../hooks/useGetRateComment");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var DetailCommentRepairman = function () {
    var navigation = native_1.useNavigation();
    var _a = useGetRateComment_1["default"](), rateComment = _a.rateComment, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (rateComment.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "Services not available!");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading categories");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 10 } },
        react_1["default"].createElement(react_native_1.View, { style: styles.rateComment },
            react_1["default"].createElement(react_native_1.View, { style: styles.containerTitle },
                react_1["default"].createElement(react_native_1.View, { style: styles.rating },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titless }, "\u0110a\u0301nh gia\u0301:(30)"),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RatedComment'); } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titlesss }, "\u0110a\u0301nh gia\u0301 ngay!"))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('RatedComment'); } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.suggest }, "Ha\u0303y xem ho\u0323 no\u0301i gi\u0300 v\u00EA\u0300 t\u00F4i ba\u0323n nhe\u0301!")),
                react_1["default"].createElement(react_native_1.FlatList, { data: rateComment, keyExtractor: function (rateComment) { return rateComment._id; }, renderItem: function (_a) {
                        var item = _a.item;
                        return (react_1["default"].createElement(react_native_1.View, { style: styles.containerRatedComment },
                            react_1["default"].createElement(react_native_1.View, { style: styles.comment },
                                react_1["default"].createElement(react_native_1.View, { style: styles.avatar },
                                    react_1["default"].createElement(react_native_1.Image, { style: styles.avatarComment, source: require('../assets/Homes/avatars.png') })),
                                react_1["default"].createElement(react_native_1.View, { style: styles.content },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.comments }, "Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2m Th\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2mTh\u1EE3 r\u1EA5t t\u1EADn t\u00E2m"),
                                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/star.png') })))));
                    } })))));
};
exports["default"] = DetailCommentRepairman;
var styles = react_native_1.StyleSheet.create({
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    rateComment: {
        marginTop: 20
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    suggest: {
        color: '#FCA234'
    },
    containerTitle: {
        marginHorizontal: 20
    },
    titless: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    titlesss: {
        fontSize: 18,
        color: '#FCA234',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FCA234',
        padding: 3
    },
    containerRatedComment: {
        flex: 9
    },
    bottom: {
        flex: 1,
        marginHorizontal: 20
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    writeComment: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#394C6D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarComment: {
        width: 50,
        height: 50
    },
    content: {
        width: '80%'
    },
    comments: {
        fontSize: 16,
        color: '#394C6D',
        marginVertical: 10
    }
});
