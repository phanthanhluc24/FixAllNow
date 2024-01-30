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
var Home_1 = require("../../screens/feed/Repairman_Finder/Home");
// import HeaderSearch from '../../screens/HeaderSearch';
// import HomeCategories from '../../screens/HomeCategories';
// import HomeRepairmanPopular from '../../screens/HomeRepairmanPopular';
// import HomeServicePopular from '../../assets/HomeServicePopular';
var ListOfElectrician_1 = require("../../screens/ListOfElectrician");
var DetailRepairman_1 = require("../../screens/DetailRepairman");
var RatedComment_1 = require("../../screens/RatedComment");
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
            react_1["default"].createElement(Stack.Screen, { name: "Home", component: Home_1["default"], options: { headerShown: true } }),
            react_1["default"].createElement(Stack.Screen, { name: "ListOfElectrician", component: ListOfElectrician_1["default"], options: { headerShown: true } }),
            react_1["default"].createElement(Stack.Screen, { name: "DetailRepairman", component: DetailRepairman_1["default"], options: { headerShown: true } }),
            react_1["default"].createElement(Stack.Screen, { name: "RatedComment", component: RatedComment_1["default"], options: { headerShown: true } }))));
};
exports["default"] = Main;
var styles = react_native_1.StyleSheet.create({});
