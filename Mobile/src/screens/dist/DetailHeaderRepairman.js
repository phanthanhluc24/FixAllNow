"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetDetailRepairman_1 = require("../hooks/useGetDetailRepairman");
var useGetServiceOfRepairman_1 = require("../hooks/useGetServiceOfRepairman");
var native_1 = require("@react-navigation/native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var useGetRateComment_1 = require("../hooks/useGetRateComment");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var moment_1 = require("moment");
require("moment-duration-format");
var DetailHeaderRepairman = function (_a) {
    var repairman_id = _a.repairman_id;
    var rateComment = useGetRateComment_1["default"](repairman_id).rateComment;
    var route = native_1.useRoute();
    var id = route.params.id;
    var repairman = useGetDetailRepairman_1["default"](id).repairman;
    var _b = useGetServiceOfRepairman_1["default"](id), serviceOfRepairman = _b.serviceOfRepairman, isLoadings = _b.isLoadings, isErrors = _b.isErrors;
    var _c = react_1.useState(false), showMoreComments = _c[0], setShowMoreComments = _c[1];
    var _d = react_1.useState(3), commentsToShow = _d[0], setCommentsToShow = _d[1];
    var toggleShowMoreComments = function () {
        var remainingComments = rateComment.length - commentsToShow;
        if (remainingComments > 0 && remainingComments <= 3) {
            setCommentsToShow(commentsToShow + remainingComments);
        }
        else if (remainingComments > 0) {
            setCommentsToShow(commentsToShow + 3);
        }
        else {
            setShowMoreComments(false);
        }
    };
    var navigation = native_1.useNavigation();
    if (isLoadings) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', flex: 1, justifyContent: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (isErrors) {
        return react_1["default"].createElement(react_native_1.Text, null, "L\u00F4\u0303i khi l\u00E2\u0301y d\u01B0\u0303 li\u00EA\u0323u chu\u0301ng t\u00F4i \u0111ang x\u01B0\u0309 ly\u0301! Xin l\u00F4\u0303i quy\u0301 kha\u0301ch nhi\u00EA\u0300u!");
    }
    var renderStars = function (star) {
        var stars = [];
        for (var i = 1; i <= 5; i++) {
            stars.push(react_1["default"].createElement(FontAwesome_1["default"], { key: i, name: star >= i ? 'star' : 'star-o', size: 20, color: star >= i ? '#FFD700' : '#394C6D' }));
        }
        return stars;
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerHeaderRepairman },
        react_1["default"].createElement(react_native_1.View, { style: styles.info },
            react_1["default"].createElement(react_native_1.Image, { style: styles.imgRp, source: { uri: repairman === null || repairman === void 0 ? void 0 : repairman.image } })),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u00F4ng tin ca\u0301 nh\u00E2n"),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "Ho\u0323 va\u0300 t\u00EAn: "),
            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.full_name)),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "S\u0110T: "),
            react_1["default"].createElement(react_native_1.Text, { style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.number_phone)),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailInfo },
            react_1["default"].createElement(react_native_1.Text, { style: styles.titles }, "\u0110\u1ECBa ch\u1EC9:"),
            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.content }, repairman === null || repairman === void 0 ? void 0 : repairman.address)),
        react_1["default"].createElement(react_native_1.View, { style: styles.containerService },
            react_1["default"].createElement(react_native_1.Text, { style: styles.service }, "Di\u0323ch vu\u0323"),
            react_1["default"].createElement(react_native_1.View, { style: { marginHorizontal: 20 } }, serviceOfRepairman.length > 0 ? (react_1["default"].createElement(react_native_1.FlatList, { data: serviceOfRepairman, keyExtractor: function (services) { return services._id; }, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
                            return navigation.navigate('DetailService', {
                                id: item._id,
                                title: item.service_name
                            });
                        } },
                        react_1["default"].createElement(react_native_1.View, { style: styles.contents },
                            react_1["default"].createElement(react_native_1.View, { style: styles.imgSer },
                                react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img })),
                            react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, item.service_name),
                                react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.price }, item.price.toLocaleString('vi-VN')),
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VND")),
                                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, item.desc)))));
                } })) : (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                react_1["default"].createElement(react_native_1.Text, { style: styles.noService }, "(Ch\u01B0a c\u00F3 d\u1ECBch v\u1EE5 n\u00E0o!)"))))),
        react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 10 } },
            react_1["default"].createElement(react_native_1.View, { style: styles.rateComment },
                react_1["default"].createElement(react_native_1.View, { style: styles.containerTitle },
                    react_1["default"].createElement(react_native_1.View, { style: styles.rating },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.titlessss },
                            "\u0110a\u0301nh gia\u0301:(",
                            rateComment ? rateComment.length : 0,
                            ")")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.title },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.suggest }, "Ha\u0303y xem ho\u0323 no\u0301i gi\u0300 v\u00EA\u0300 t\u00F4i ba\u0323n nhe\u0301!")),
                    rateComment && rateComment.length > 0 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        rateComment
                            .slice(0, commentsToShow)
                            .map(function (comment, index) {
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
                            var timeAgo = formatTimeAgo(comment.createdAt);
                            return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: index, style: styles.containerRatedComment },
                                react_1["default"].createElement(react_native_1.View, { style: styles.comment },
                                    react_1["default"].createElement(react_native_1.View, { style: styles.avatar },
                                        react_1["default"].createElement(react_native_1.Image, { style: styles.avatarComment, source: { uri: comment === null || comment === void 0 ? void 0 : comment.commenter_id.image } })),
                                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameCommenter }, comment.commenter_id.full_name),
                                        react_1["default"].createElement(react_native_1.View, { style: styles.star }, renderStars(comment.star)),
                                        react_1["default"].createElement(react_native_1.Text, { style: styles.time }, timeAgo))),
                                react_1["default"].createElement(react_native_1.View, null,
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.comments }, comment.content))));
                        }),
                        !showMoreComments && rateComment.length > commentsToShow && (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: toggleShowMoreComments, style: { alignItems: "center", justifyContent: "center", marginBottom: 20 } },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.noService }, "Xem th\u00EAm"))))))))));
};
exports["default"] = DetailHeaderRepairman;
var styles = react_native_1.StyleSheet.create({
    time: {
        color: 'blue'
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
        alignItems: 'center'
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
    comments: {
        fontSize: 16,
        color: '#394C6D',
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
        fontWeight: 'bold'
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
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
    titlessss: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    noService: {
        fontSize: 15,
        color: '#FCA234',
        fontWeight: 'bold'
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    },
    containerHeaderRepairman: {
        flex: 1
    },
    info: {
        alignItems: 'center',
        paddingTop: 10
    },
    imgRp: {
        borderWidth: 4,
        borderColor: '#394C6D',
        borderRadius: 100,
        width: 150,
        height: 150
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#394C6D',
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center'
    },
    detailInfo: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        alignItems: 'center',
        paddingTop: 10,
        width: '100%'
    },
    titles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D',
        width: '40%'
    },
    titless: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    content: {
        fontSize: 18,
        width: '60%',
        color: '#394C6D',
        marginHorizontal: 10
    },
    containerService: {
        marginTop: 20
    },
    service: {
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    repairman: {
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#394C6D',
        width: '100%',
        height: 132,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    contents: {
        flexDirection: 'row'
    },
    imgSer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#394C6D'
    },
    infos: {
        width: '60%',
        justifyContent: 'center'
    },
    nameRepairman: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    price: {
        color: '#FCA234',
        fontSize: 18,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    vnd: {
        fontSize: 18,
        color: '#FCA234'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        color: '#394C6D'
    }
});
