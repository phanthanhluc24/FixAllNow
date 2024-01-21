"use strict";
exports.__esModule = true;
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var AuthContext = react_1.createContext();
exports.AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(null), userData = _b[0], setUserData = _b[1];
    var signUp = function (data) {
        setUserData(data);
    };
    return (react_1["default"].createElement(AuthContext.Provider, { value: { userData: userData, signUp: signUp } }, children));
};
exports.useAuth = function () {
    return react_1.useContext(AuthContext);
};
