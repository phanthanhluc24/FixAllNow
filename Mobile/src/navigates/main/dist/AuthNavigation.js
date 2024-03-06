"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var stack_1 = require("@react-navigation/stack");
var Landing_1 = require("../../screens/Landing");
var Welcome_1 = require("../../screens/Welcome");
var SignIn_1 = require("../../screens/accounts.tsx/SignIn");
var queryClient = new react_query_1.QueryClient();
var AuthNavigation = function () {
    var Stack = stack_1.createStackNavigator();
    return (react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1["default"].createElement(Stack.Navigator, null,
            react_1["default"].createElement(Stack.Screen, { name: "Welcome", component: Welcome_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "Landing", component: Landing_1["default"], options: { headerShown: false } }),
            react_1["default"].createElement(Stack.Screen, { name: "SignIn", component: SignIn_1["default"], options: { headerShown: false } }))));
};
exports["default"] = AuthNavigation;
