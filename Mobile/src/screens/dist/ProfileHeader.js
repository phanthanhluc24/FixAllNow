"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_swipe_list_view_1 = require("react-native-swipe-list-view");
var Entypo_1 = require("react-native-vector-icons/Entypo");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var react_native_document_picker_1 = require("react-native-document-picker");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var native_1 = require("@react-navigation/native");
var useGetServiceOfRepairman_1 = require("../hooks/useGetServiceOfRepairman");
var ButtonLogout_1 = require("./bottomTab/ButtonLogout");
var useDeleteService_1 = require("../hooks/useDeleteService");
var ProfileHeader = function () {
    var onNavigation = function () {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Root' }]
        });
    };
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    ///render các trạng thái đặt hàng
    ////////////////////////////////
    //lấy ảnh đại diện từ file
    var _b = react_1.useState(null), singleFile = _b[0], setSingleFile = _b[1];
    var selectFile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_document_picker_1["default"].pick({
                            type: [react_native_document_picker_1["default"].types.allFiles]
                        })];
                case 1:
                    res = (_a.sent())[0];
                    setSingleFile(res);
                    if (res) {
                        navigation.navigate('EditAvatarCurrentUser', { image: res });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    setSingleFile(null);
                    if (react_native_document_picker_1["default"].isCancel(err_1)) {
                    }
                    else {
                        throw err_1;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //////////////////////////////////////////////
    var _c = react_1.useState(false), isMenuVisible = _c[0], setIsMenuVisible = _c[1];
    var toggleMenu = function () {
        setIsMenuVisible(!isMenuVisible);
    };
    var handleEventAddNewService = function () {
        navigation.navigate('FormAddNewService');
    };
    var handleEventHistoryStore = function () {
        navigation.navigate('HistoryStore');
    };
    var handleEventHistoryBookSchedule = function () {
        navigation.navigate('HistoryRepairmanBookSchedule');
    };
    var navigation = native_1.useNavigation();
    var _d = useGetCurrentUser_1["default"](), currentUser = _d.currentUser, isLoading = _d.isLoading, isError = _d.isError;
    var _e = react_1.useState(false), hasServices = _e[0], setHasServices = _e[1];
    var _f = useGetServiceOfRepairman_1["default"](currentUser === null || currentUser === void 0 ? void 0 : currentUser._id), serviceOfRepairman = _f.serviceOfRepairman, isLoadings = _f.isLoadings, isErrors = _f.isErrors;
    react_1.useEffect(function () {
        if (serviceOfRepairman.length > 0) {
            setHasServices(true);
        }
        else {
            setHasServices(false);
        }
    }, [serviceOfRepairman]);
    // xóa dịch vụ
    var destroyService = useDeleteService_1["default"]().destroyService;
    var handleDeleteService = function (service_id) { return function () {
        setLoading(true);
        destroyService(service_id);
        setLoading(false);
        navigation.navigate('Profile', { reload: true });
    }; }; ///////////////////////////////////
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
    var renderHiddenItem = function (data) { return (react_1["default"].createElement(react_native_1.View, { style: styles.rowBack },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.deleteService, onPress: handleDeleteService(data.item._id) },
            react_1["default"].createElement(AntDesign_1["default"], { name: "delete", color: "#FFFFFF", size: 25 })),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.editService, onPress: function () {
                return navigation.navigate('EditInfoService', { service: data.item });
            } },
            react_1["default"].createElement(Entypo_1["default"], { name: "edit", size: 25, color: "#FFFFFF" })))); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.profileHeader },
        react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: loading, onRequestClose: function () {
                setLoading(false);
            } },
            react_1["default"].createElement(react_native_1.View, { style: styles.modalContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles.modalContent },
                    react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: 40, color: "#FCA234" }))))),
        react_1["default"].createElement(react_native_1.View, { style: styles.back },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.iconBack, onPress: onNavigation },
                react_1["default"].createElement(AntDesign_1["default"], { name: "arrowleft", color: "#000000", size: 25 })),
            react_1["default"].createElement(react_native_1.View, { style: styles.spaceRight })),
        react_1["default"].createElement(react_native_1.View, { style: styles.infoProfile },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.avatarPro },
                react_1["default"].createElement(react_native_1.Image, { style: styles.avatarProfile, source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image } }),
                react_1["default"].createElement(react_native_1.View, { style: { position: 'absolute' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: selectFile },
                        react_1["default"].createElement(react_native_1.View, { style: styles.imageViews },
                            react_1["default"].createElement(Entypo_1["default"], { name: "camera", size: 20, color: "#394C6D" }))))),
            react_1["default"].createElement(react_native_1.View, { style: styles.contentProfile },
                react_1["default"].createElement(react_native_1.View, { style: styles.styleProfile },
                    react_1["default"].createElement(react_native_1.View, { style: styles.info },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nameProfile }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.full_name)),
                    react_1["default"].createElement(react_native_1.View, { style: styles.buttonEvent },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.iconEdit, onPress: function () {
                                return navigation.navigate('EditInfoCurrentUser', {
                                    user: currentUser
                                });
                            } },
                            react_1["default"].createElement(Entypo_1["default"], { name: "edit", size: 24, color: "#ffffff" })),
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
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detailPhone },
                        "(+84)", currentUser === null || currentUser === void 0 ? void 0 :
                        currentUser.number_phone)))),
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.aboutStore },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameListService }, "Danh sa\u0301ch di\u0323ch vu\u0323"),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: toggleMenu, style: styles.iconContainer },
                    react_1["default"].createElement(AntDesign_1["default"], { name: "menu-fold", size: 25, color: "black" }))),
            react_1["default"].createElement(react_native_1.View, null, isMenuVisible && (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'white', paddingHorizontal: 20 } },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleEventAddNewService, style: styles.viewHistorys },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameViewHistory }, "Th\u00EAm m\u01A1\u0301i di\u0323ch vu\u0323")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleEventHistoryStore, style: styles.viewHistorys },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameViewHistory }, "Li\u0323ch s\u01B0\u0309 c\u01B0\u0309a ha\u0300ng")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleEventHistoryBookSchedule, style: styles.viewHistorys },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameViewHistory }, "Li\u0323ch s\u01B0\u0309 \u0111\u0103\u0323t li\u0323ch"))))),
            isLoading ? (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
                react_1["default"].createElement(react_native_1.Text, null,
                    react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' })))) : hasServices ? (react_1["default"].createElement(react_native_swipe_list_view_1.SwipeListView, { data: serviceOfRepairman, renderItem: renderItem, renderHiddenItem: renderHiddenItem, leftOpenValue: 75, rightOpenValue: -75 })) : (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                react_1["default"].createElement(react_native_1.Text, { style: styles.noService }, "(Ba\u0323n ch\u01B0a \u0111\u0103ng d\u1ECBch v\u1EE5 n\u00E0o!)"))))));
};
exports["default"] = ProfileHeader;
var styles = react_native_1.StyleSheet.create({
    nameViewHistory: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    viewHistorys: {
        backgroundColor: '#394C6D',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        // marginBottom:10,
        // marginHorizontal:20
        marginBottom: 10,
        width: '100%'
    },
    openModal: {
        color: '#394C6D'
    },
    iconContainer: {
        marginRight: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center'
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10
    },
    option: {
        fontSize: 16,
        marginBottom: 10
    },
    aboutStore: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconBack: {
        width: '20%'
    },
    spaceRight: {
        width: '80%'
    },
    back: {
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        width: 50,
        height: 50,
        marginTop: 100
    },
    listHistory: {
        height: 50,
        backgroundColor: '#ffffff'
    },
    eventButton: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#FCA234',
        height: 50,
        width: 140,
        borderWidth: 0.5
    },
    titleButton: {
        color: '#394C6D'
    },
    selectedButton: {
        backgroundColor: '#394C6D'
    },
    selectedText: {
        color: 'white'
    },
    containers: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#394C6D',
        width: '90%',
        height: 120,
        marginTop: 10
    },
    contents: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    hello: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FCA234',
        width: '90%'
    },
    detaildemo: {
        fontSize: 13,
        color: '#FFFFFF',
        width: '90%'
    },
    containerProfileBodyRepairmanFinder: {
        flex: 1
    },
    profileBodyRepairmanFinder: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    nameAccount: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FCA234',
        paddingVertical: 10
    },
    nameSecurity: {
        fontSize: 20,
        color: '#394C6D'
    },
    nameAddress: {
        fontSize: 20,
        color: '#394C6D'
    },
    nameBank: {
        fontSize: 20,
        color: '#394C6D'
    },
    nameLanguage: {
        marginHorizontal: 20,
        fontSize: 15,
        color: '#394C6D'
    },
    noService: {
        fontSize: 15,
        color: '#394C6D'
    },
    imageViews: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#394C6D',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 50
    },
    nameListService: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394C6D',
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
    buttonEvent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginRight: 20
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
        width: 100,
        height: 40,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#394C6D'
    },
    info: {
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contentProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    profileHeader: {
        flex: 1
    },
    infoProfile: {
        marginHorizontal: 10
    },
    avatarProfile: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#394C6D'
    },
    avatarPro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
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
        flex: 1
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
        borderColor: '#FCA234',
        marginTop: 3,
        borderRadius: 10,
        marginBottom: 10
    },
    repairman: {
        backgroundColor: '#FCA234',
        flex: 1,
        height: 132,
        marginHorizontal: 15,
        marginTop: 3,
        borderRadius: 10,
        marginBottom: 10
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
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#394C6D'
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
        color: '#FFFFFF',
        maxWidth: '100%'
    },
    image: {
        width: '30%'
    },
    infos: {
        marginHorizontal: 10
    }
});
