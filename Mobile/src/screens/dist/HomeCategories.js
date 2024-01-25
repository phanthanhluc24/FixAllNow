"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var HomeCategories = function () {
    var navigation = native_1.useNavigation();
    //   const {data, isLoading, isError}= useGetCategoryService();
    // if (isLoading) {
    //     return <Text>Loading...</Text>;
    //   }
    //   if (isError) {
    //     return <Text>Error loading categories</Text>;
    //   }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerCategory },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.hello }, "ALO TH\u01A0\u0323"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.detaildemo }, "T\u00ECm ki\u1EBFm th\u1EE3 s\u1EEDa ch\u1EEFa d\u1EC5 d\u00E0ng h\u01A1n ch\u1EC9 v\u1EDBi v\u00E0i ph\u00FAt m\u00E0 kh\u00F4ng t\u1ED1n nhi\u1EC1u th\u1EDDi gian")),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/demo.png') })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailCategory },
            react_1["default"].createElement(react_native_1.View, { style: styles.categories },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.category, onPress: function () { return navigation.navigate('ListOfElectrician'); } },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/thodien.png') }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleCategory }, "S\u01B0\u0309a \u0111i\u00EA\u0323n")),
                react_1["default"].createElement(react_native_1.View, { style: styles.category },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/thonuoc.png') }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleCategory }, "S\u01B0\u0309a n\u01B0\u01A1\u0301c")),
                react_1["default"].createElement(react_native_1.View, { style: styles.category },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/cokhi.png') }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleCategory }, "C\u01A1 khi\u0301"))),
            react_1["default"].createElement(react_native_1.View, { style: styles.categories },
                react_1["default"].createElement(react_native_1.View, { style: styles.category },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/xemay.png') }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleCategory }, "Xe ma\u0301y")),
                react_1["default"].createElement(react_native_1.View, { style: styles.category },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/oto.png') }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleCategory }, "\u00D4 t\u00F4")),
                react_1["default"].createElement(react_native_1.View, { style: styles.category },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/Homes/dienthoai.png') }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.titleCategory }, "\u0110i\u00EA\u0323n thoa\u0323i"))))));
};
exports["default"] = HomeCategories;
var styles = react_native_1.StyleSheet.create({
    containerCategory: {
        flex: 1
    },
    container: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#394C6D',
        width: '90%',
        height: 139
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    hello: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FCA234'
    },
    detaildemo: {
        fontSize: 13,
        color: '#FFFFFF',
        width: 150
    },
    detailCategory: {
        marginHorizontal: 20
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingTop: 20
    },
    category: {
        alignItems: 'center'
    },
    titleCategory: {
        color: '#394C6D',
        fontSize: 15,
        padding: 5
    }
});
