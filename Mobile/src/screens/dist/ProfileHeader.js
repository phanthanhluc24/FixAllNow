"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var Entypo_1 = require("react-native-vector-icons/Entypo");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var native_1 = require("@react-navigation/native");
var useGetServiceOfRepairman_1 = require("../hooks/useGetServiceOfRepairman");
var ButtonLogout_1 = require("./bottomTab/ButtonLogout");
var ProfileHeader = function () {
    var navigation = native_1.useNavigation();
    var _a = useGetCurrentUser_1["default"](), currentUser = _a.currentUser, isLoading = _a.isLoading, isError = _a.isError;
    var serviceOfRepairman = useGetServiceOfRepairman_1["default"](currentUser === null || currentUser === void 0 ? void 0 : currentUser._id).serviceOfRepairman;
    var renderItem = function (data) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.repairman, onPress: function () {
            return navigation.navigate('DetailService', {
                id: data.item._id,
                title: data.item.service_name
            });
        } },
        react_1["default"].createElement(react_native_1.View, { style: styles.content },
            react_1["default"].createElement(react_native_1.View, { style: styles.image },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: data.item.image }, style: styles.img })),
            react_1["default"].createElement(react_native_1.View, { style: styles.info },
                react_1["default"].createElement(react_native_1.View, { style: styles.infos },
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.nameRepairman }, data.item.service_name),
                    react_1["default"].createElement(react_native_1.View, { style: styles.prices },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.price }, data.item.price.toLocaleString('vi-VN')),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.vnd }, " VND")),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, data.item.desc)))))); };
    var renderHiddenItem = function () { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowBack },
        react_1["default"].createElement(react_native_1.Text, { style: styles.deleteService },
            react_1["default"].createElement(AntDesign_1["default"], { name: "delete", color: "#FFFFFF", size: 25 })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.editService, onPress: function () { return navigation.navigate('EditInfoService'); } },
            react_1["default"].createElement(Entypo_1["default"], { name: "edit", size: 25, color: "#FFFFFF" })))); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.profileHeader },
        react_1["default"].createElement(react_native_1.View, { style: styles.infoProfile },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.avatarPro, onPress: function () { return navigation.navigate('EditAvatarCurrentUser'); } },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatarProfile, source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image } })),
            react_1["default"].createElement(react_native_1.View, { style: styles.contentProfile },
                react_1["default"].createElement(react_native_1.View, { style: styles.styleProfile },
                    react_1["default"].createElement(react_native_1.View, { style: styles.info },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameProfile }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.full_name)),
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.iconEdit, onPress: function () { return navigation.navigate('EditInfoCurrentUser'); } },
                            react_1["default"].createElement(Entypo_1["default"], { name: "edit", size: 24, color: "#394C6D" })),
                        react_1["default"].createElement(ButtonLogout_1["default"], null))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.infoQuality },
            react_1["default"].createElement(react_native_1.View, { style: styles.email },
                react_1["default"].createElement(react_native_1.Text, null,
                    react_1["default"].createElement(MaterialIcons_1["default"], { name: "email", size: 24, color: "#394C6D" })),
                react_1["default"].createElement(react_native_1.View, { style: styles.infoEmail },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameEmail }, "Email"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detailEmail }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.email))),
            react_1["default"].createElement(react_native_1.View, { style: styles.phone },
                react_1["default"].createElement(react_native_1.Text, null,
                    react_1["default"].createElement(Entypo_1["default"], { name: "phone", size: 24, color: "#394C6D" })),
                react_1["default"].createElement(react_native_1.View, { style: styles.infoPhone },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.namePhone }, "S\u00F4\u0301 \u0111i\u00EA\u0323n thoa\u0323i"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detailPhone }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.number_phone)))),
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, { style: styles.nameListService }, "Danh sa\u0301ch di\u0323ch vu\u0323"),
            react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { data: serviceOfRepairman, renderItem: renderItem, renderHiddenItem: renderHiddenItem, leftOpenValue: 75, rightOpenValue: -75 }))));
};
exports["default"] = ProfileHeader;
var styles = react_native_1.StyleSheet.create({
    nameListService: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCA234',
        padding: 15
    },
    detailEmail: {
        fontSize: 15,
        color: '#394C6D'
    },
    detailPhone: {
        fontSize: 15,
        color: '#394C6D'
    },
    namePhone: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    nameEmail: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    infoPhone: {
        marginHorizontal: 10
    },
    infoEmail: {
        marginHorizontal: 10
    },
    phone: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    email: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoQuality: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20
    },
    iconEdit: {
        marginLeft: 20
    },
    info: {
        alignItems: 'center',
        marginHorizontal: 20,
        width: '70%'
    },
    jobProfile: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    nameProfile: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    styleProfile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contentProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    profileHeader: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    infoProfile: {
        marginHorizontal: 20
    },
    avatarProfile: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    avatarPro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    deleteService: {
        marginHorizontal: 20
    },
    editService: {
        marginHorizontal: 20
    },
    containerListService: {
        flex: 1,
        backgroundColor: '#394C6D'
    },
    container: {
        flex: 1,
        backgroundColor: '#394C6D'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#394C6D',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#394C6D',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#FCA234'
    },
    repairman: {
        backgroundColor: '#FCA234',
        flex: 1,
        height: 132,
        marginHorizontal: 15,
        borderBottomWidth: 1
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
    vnd: {
        fontSize: 18,
        color: '#394C6D'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 18,
        color: '#394C6D',
        fontWeight: 'bold',
        width: 'auto',
        paddingVertical: 5
    },
    description: {
        width: '100%',
        color: '#FFFFFF'
    },
    image: {
        width: '30%'
    },
    infos: {
        marginHorizontal: 10
    }
});
