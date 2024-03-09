"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useGetCurrentUser_1 = require("../hooks/useGetCurrentUser");
var native_1 = require("@react-navigation/native");
var HeaderTitleComponent = function () {
    var navigation = native_1.useNavigation();
    var _a = useGetCurrentUser_1["default"](), currentUser = _a.currentUser, isLoading = _a.isLoading, isError = _a.isError;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.header },
            react_1["default"].createElement(react_native_1.Image, { style: styles.title, source: require('../assets/Headers/headerFAN.png') }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile'); } },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image }, style: styles.images })))));
};
var styles = react_native_1.StyleSheet.create({
    images: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#394C6D'
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    title: {
        height: 40,
        width: 220
    }
});
exports["default"] = HeaderTitleComponent;
