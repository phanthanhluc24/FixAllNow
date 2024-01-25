"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ListOfElectrician = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.repairmanPopular },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Th\u01A1\u0323 n\u00F4\u0309i b\u00E2\u0323t"),
            react_1["default"].createElement(react_native_1.View, { style: styles.containerRepairman },
                react_1["default"].createElement(react_native_1.View, { style: styles.repairman },
                    react_1["default"].createElement(react_native_1.View, { style: styles.content },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/avartarss.png'), style: styles.img }),
                        react_1["default"].createElement(react_native_1.View, null,
                            react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman }, "Phan Thanh L\u01B0\u0323c"),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.distance }, "2.5 km"),
                            react_1["default"].createElement(react_native_1.Image, { source: require("../assets/Homes/rate.png") }))))))));
};
exports["default"] = ListOfElectrician;
var styles = react_native_1.StyleSheet.create({
    repairmanPopular: {
        flex: 1,
        marginTop: 20
    },
    container: {
        marginHorizontal: 20
    },
    title: {
        color: "#394C6D",
        fontSize: 20,
        fontWeight: "bold"
    },
    repairman: {
        marginTop: 10,
        backgroundColor: "#FCA234",
        width: "100%",
        height: 132,
        borderRadius: 10
    },
    containerRepairman: {
        flex: 1
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15
    },
    img: {
        width: 100,
        height: 100
    },
    nameRepairman: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    distance: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "bold"
    }
});
