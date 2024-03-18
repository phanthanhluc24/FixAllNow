"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var react_query_1 = require("@tanstack/react-query");
var stack_1 = require("@react-navigation/stack");
var Landing_1 = require("../../screens/Landing");
var Welcome_1 = require("../../screens/Welcome");
var SignIn_1 = require("../../screens/accounts.tsx/SignIn");
var ForgotPassword_1 = require("../../screens/accounts.tsx/ForgotPassword");
var queryClient = new react_query_1.QueryClient();
var AuthNavigation = function () {
    var navigation = native_1.useNavigation();
    var Stack = stack_1.createStackNavigator();
    //   useEffect(() => {
    //     const checkAccessToken = async () => {
    //       try {
    //         const accessToken = await AsyncStorage.getItem('accessToken');
    //         if (accessToken) {
    //           navigation.navigate('Root');
    //         } else {
    //           navigation.navigate('SignIn');
    //         }
    //       } catch (error) {
    //         console.error('Lỗi khi kiểm tra accessToken:', error);
    //       }
    //     };
    //     checkAccessToken();
    //   }, []);
    return (react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1["default"].createElement(Stack.Navigator, null,
            react_1["default"].createElement(Stack.Screen, { name: "Welcome", component: Welcome_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "Landing", component: Landing_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "SignIn", component: SignIn_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "ForgotPassword", component: ForgotPassword_1["default"], options: { headerShown: false } }))));
};
exports["default"] = AuthNavigation;
