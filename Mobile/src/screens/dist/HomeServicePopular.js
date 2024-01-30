"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var HomeServicePopular = function () {
    //   const {data, isLoading, isError}= useGetService();
    // if (isLoading) {
    //     return <Text>Loading...</Text>;
    //   }
    //   if (isError) {
    //     return <Text>Error loading categories</Text>;
    //   }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerRepairman },
        react_1["default"].createElement(react_native_1.View, { style: styles.repairman },
            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/avartarss.png'), style: styles.img }),
                react_1["default"].createElement(react_native_1.View, { style: styles.info },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameRepairman }, "Phan Thanh L\u01B0\u0323c"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.price }, "120.000\u0111"),
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.description }, "(\u1ED4 c\u1EAFm \u0111i\u1EC7n b\u1ECB n\u00F3ng v\u00E0 n\u1EDF ra khi c\u1EAFm v\u00E0o l\u1ECFng...)"))))));
};
exports["default"] = HomeServicePopular;
var styles = react_native_1.StyleSheet.create({
    repairman: {
        marginTop: 10,
        backgroundColor: '#394C6D',
        width: '100%',
        height: 132,
        borderRadius: 10
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
        height: 100
    },
    nameRepairman: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    price: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '50%',
        paddingVertical: 5
    },
    description: {
        width: '60%',
        color: '#FFFFFF'
    },
    info: {
        marginHorizontal: 20
    }
});
