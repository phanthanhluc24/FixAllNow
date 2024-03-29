"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var DrawerNavigator_1 = require("./DrawerNavigator");
var stack_1 = require("@react-navigation/stack");
var Landing_1 = require("../../screens/Landing");
var Welcome_1 = require("../../screens/Welcome");
var SignIn_1 = require("../../screens/accounts.tsx/SignIn");
var SignUp_1 = require("../../screens/accounts.tsx/SignUp");
var SelectRole_1 = require("../../screens/accounts.tsx/SelectRole");
var ConfirmCode_1 = require("../../screens/accounts.tsx/ConfirmCode");
var ConfirmTypeRepairman_1 = require("../../screens/accounts.tsx/ConfirmTypeRepairman");
var ForgotPassword_1 = require("../../screens/accounts.tsx/ForgotPassword");
var NewPassword_1 = require("../../screens/accounts.tsx/NewPassword");
var ListOfElectrician_1 = require("../../screens/ListOfElectrician");
var DetailRepairman_1 = require("../../screens/DetailRepairman");
var DetailService_1 = require("../../screens/DetailService");
var RatedComment_1 = require("../../screens/RatedComment");
var EditInfoCurrentUser_1 = require("../../screens/forms/EditInfoCurrentUser");
var FormBookSchedule_1 = require("../../screens/forms/FormBookSchedule");
var ConfirmInforBooking_1 = require("../../screens/ConfirmInforBooking");
var FormAddNewService_1 = require("../../screens/forms/FormAddNewService");
var EditInfoService_1 = require("../../screens/forms/EditInfoService");
var EditAvatarCurrentUser_1 = require("../../screens/forms/EditAvatarCurrentUser");
var MapBookingScreen_1 = require("../../screens/MapBookingScreen");
var HistoryStore_1 = require("../../screens/HistoryStore");
var ResultSearch_1 = require("../../screens/ResultSearch");
var HistoryRepairmanBookSchedule_1 = require("../../screens/HistoryRepairmanBookSchedule");
var DetailRepairmanConfirmBooking_1 = require("../../screens/DetailRepairmanConfirmBooking");
var DetailViewBookSchedule_1 = require("../../screens/DetailViewBookSchedule");
var DetailNotification_1 = require("../../screens/DetailNotification");
var Conversation_1 = require("../../screens/chats/Conversation");
var react_native_2 = require("react-native");
var RepairmanViewAddressRepair_1 = require("../../screens/RepairmanViewAddressRepair");
var queryClient = new react_query_1.QueryClient();
var Main = function () {
    var Stack = stack_1.createStackNavigator();
    return (react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1["default"].createElement(Stack.Navigator, null,
            react_1["default"].createElement(Stack.Screen, { name: "Welcome", component: Welcome_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "Landing", component: Landing_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "SignIn", component: SignIn_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "Root", component: DrawerNavigator_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "SignUp", component: SignUp_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "SelectRole", component: SelectRole_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "ConfirmCode", component: ConfirmCode_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "ConfirmTypeRepairman", component: ConfirmTypeRepairman_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "ForgotPassword", component: ForgotPassword_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "NewPassword", component: NewPassword_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "ListOfElectrician", component: ListOfElectrician_1["default"], options: function (_a) {
                    var _b;
                    var route = _a.route;
                    return ({
                        headerShown: true,
                        headerTitle: "Danh S\u00E1ch Th\u1EE3 " + ((_b = route.params) === null || _b === void 0 ? void 0 : _b.title)
                    });
                } }),
            react_1["default"].createElement(Stack.Screen, { name: "DetailRepairman", component: DetailRepairman_1["default"], options: function (_a) {
                    var _b;
                    var route = _a.route;
                    return ({
                        headerShown: true,
                        headerTitle: "" + ((_b = route.params) === null || _b === void 0 ? void 0 : _b.title)
                    });
                } }),
            react_1["default"].createElement(Stack.Screen, { name: "DetailService", component: DetailService_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: "Chi ti\u00EA\u0301t di\u0323ch vu\u0323"
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "RatedComment", component: RatedComment_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: "\u0110a\u0301nh gia\u0301"
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "EditInfoCurrentUser", component: EditInfoCurrentUser_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: "S\u01B0\u0309a th\u00F4ng tin"
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "FormBookSchedule", component: FormBookSchedule_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Đặt lịch'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "ConfirmInforBooking", component: ConfirmInforBooking_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Xác nhận đặt lịch'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "FormAddNewService", component: FormAddNewService_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Thêm mới dịch vụ'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "EditInfoService", component: EditInfoService_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Chỉnh sửa dịch vụ'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "EditAvatarCurrentUser", component: EditAvatarCurrentUser_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Chỉnh sửa ảnh đại diện'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "MapBookingScreen", component: MapBookingScreen_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Tìm vị trí thợ'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "HistoryStore", component: HistoryStore_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Lịch sử cửa hàng'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "HistoryRepairmanBookSchedule", component: HistoryRepairmanBookSchedule_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Lịch sử đặt lịch'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "DetailRepairmanConfirmBooking", component: DetailRepairmanConfirmBooking_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Chi tiết lịch hẹn'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "DetailViewBookSchedule", component: DetailViewBookSchedule_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Chi tiết lịch hẹn'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "ResultSearch", component: ResultSearch_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Kết quả tìm kiếm'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "DetailNotification", component: DetailNotification_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Chi tiết thông báo'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "RepairmanViewAddressRepair", component: RepairmanViewAddressRepair_1["default"], options: function () { return ({
                    headerShown: true,
                    headerTitle: 'Xem địa chỉ sửa chữa'
                }); } }),
            react_1["default"].createElement(Stack.Screen, { name: "Conversation", component: Conversation_1["default"], options: function (_a) {
                    var route = _a.route;
                    return ({
                        headerShown: true,
                        headerTitle: function () { return (react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", gap: 40 } },
                            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", justifyContent: "center", alignItems: "center" } },
                                react_1["default"].createElement(react_native_2.Image, { style: { width: 40, height: 40, borderRadius: 50 }, source: { uri: route.params.image } }),
                                react_1["default"].createElement(react_native_1.Text, { style: { fontWeight: "bold" } }, route.params.name)))); }
                    });
                } }))));
};
exports["default"] = Main;
