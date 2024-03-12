"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var useGetRateComment_1 = require("../hooks/useGetRateComment");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var DetailCommentRepairman = function (_a) {
    var repairman_id = _a.repairman_id;
    var navigation = native_1.useNavigation();
    var _b = useGetRateComment_1["default"](repairman_id), rateComment = _b.rateComment, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    var renderStars = function (star) {
        var stars = [];
        for (var i = 1; i <= 5; i++) {
            stars.push(react_1["default"].createElement(FontAwesome_1["default"], { key: i, name: star >= i ? 'star' : 'star-o', size: 20, color: star >= i ? '#FFD700' : '#394C6D' }));
        }
        return stars;
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.FlatList, { data: rateComment, keyExtractor: function (rateComment) { return rateComment._id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.containerRatedComment },
                    react_1["default"].createElement(react_native_1.View, { style: styles.comment },
                        react_1["default"].createElement(react_native_1.View, { style: styles.avatar },
                            react_1["default"].createElement(react_native_1.Image, { style: styles.avatarComment, source: { uri: item === null || item === void 0 ? void 0 : item.commenter_id.image } })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.content },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameCommenter }, item.commenter_id.full_name),
                            react_1["default"].createElement(react_native_1.View, { style: styles.star }, renderStars(item.star)))),
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, { style: styles.comments }, item.content))));
            } })));
};
exports["default"] = DetailCommentRepairman;
var styles = react_native_1.StyleSheet.create({
    title: {
        marginVertical: 10
    },
    nameCommenter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    noComment: {
        fontSize: 15,
        color: '#FCA234',
        fontWeight: "bold"
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
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
        marginVertical: 10,
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
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarComment: {
        width: 46,
        height: 46,
        borderRadius: 100
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
