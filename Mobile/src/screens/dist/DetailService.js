"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useGetDetailService_1 = require("../hooks/useGetDetailService");
var DetailService = function (_a) {
    var route = _a.route;
    var id = route.params.id;
    var _b = useGetDetailService_1["default"](id), service = _b.service, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, null, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading repairman");
    }
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Image, { source: { uri: service === null || service === void 0 ? void 0 : service.image }, style: styles.imageSer }),
        react_1["default"].createElement(react_native_1.Text, null, service === null || service === void 0 ? void 0 : service.service_name),
        react_1["default"].createElement(react_native_1.Text, null, service === null || service === void 0 ? void 0 : service.price),
        react_1["default"].createElement(react_native_1.Text, null, service === null || service === void 0 ? void 0 : service.desc)));
};
exports["default"] = DetailService;
var styles = react_native_1.StyleSheet.create({
    imageSer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#394C6D"
    }
});
