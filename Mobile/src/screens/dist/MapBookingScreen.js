"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var Feather_1 = require("react-native-vector-icons/Feather");
var MapBookingScreen = function () {
    var _a = react_1.useState(null), coordinates = _a[0], setCoordinates = _a[1];
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
        react_1["default"].createElement(react_native_1.View, { style: styles.searchInput },
            react_1["default"].createElement(react_native_1.TextInput, { multiline: true, 
                // value={searchValue}
                // onChangeText={handleSearchChange}
                placeholder: "Ti\u0300m ki\u00EA\u0301m di\u0323ch vu\u0323" }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.messageIcon },
                react_1["default"].createElement(Feather_1["default"], { name: "search", color: "black", size: 28 }))),
        react_1["default"].createElement(react_native_maps_1["default"], { style: { flex: 1 }, region: {
                latitude: 16.054407,
                longitude: 108.202164,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            } },
            react_1["default"].createElement(react_native_maps_1.Marker, { coordinate: { latitude: 16.054407, longitude: 108.202164 }, title: "\u0110\u00E0 N\u1EB5ng", description: "Th\u00E0nh ph\u1ED1 \u0110\u00E0 N\u1EB5ng, Vi\u1EC7t Nam" }))));
};
exports["default"] = MapBookingScreen;
var styles = react_native_1.StyleSheet.create({
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 15
    },
    SearchInputs: {
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    messageIcon: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    images: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#394C6D'
    }
});
