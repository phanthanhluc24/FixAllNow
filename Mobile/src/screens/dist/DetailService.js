"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var DetailInfoService_1 = require("./DetailInfoService");
var DetailServiceButton_1 = require("./DetailServiceButton");
var DetailService = function () {
    var data = [{ key: 'DetailServiceRevolve' }];
    var renderDetailService = function () {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(DetailInfoService_1["default"], null)));
    };
    var renderDetailServiceButton = function () {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(DetailServiceButton_1["default"], null)));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerServiceSpecific },
        react_1["default"].createElement(react_native_1.FlatList, { data: data, keyExtractor: function (item) { return item.key; }, renderItem: renderDetailServiceButton, ListHeaderComponent: renderDetailService })));
};
exports["default"] = DetailService;
var styles = react_native_1.StyleSheet.create({
    buttonEvent: {
    // padding:20,
    // alignItems:"center",
    // justifyContent:"center",
    },
    detailRepairman: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    buttonView: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderColor: '#FCA234',
        borderWidth: 2,
        height: 30,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
    fullName: {
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: '#394C6D'
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: '#FCA234',
        borderWidth: 2
    },
    infoUser: {
        width: '100%',
        marginHorizontal: 20,
        marginVertical: 15
    },
    containerInfoUser: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerServiceSpecific: {
        flex: 1
    },
    infoServices: {
        flex: 9
    },
    belowInfoService: {
        flex: 1
    },
    imageSer: {
        width: '100%',
        height: 300
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    },
    priceStyle: {
        color: '#FCA234',
        fontWeight: 'bold',
        fontSize: 20,
        width: '40%'
    },
    infoStyle: {
        marginHorizontal: 15,
        marginTop: 13
    },
    nameStyle: {
        color: '#394C6D',
        fontSize: 25,
        fontWeight: 'bold',
        width: '90%'
    },
    description: {
        color: '#394C6D',
        fontSize: 15
    },
    buttonChoose: {
        width: '100%'
    },
    buttonNow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    button1: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookNow: {
        width: '80%',
        height: 50,
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    book: {
        width: '80%',
        height: 50,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    books: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    oneLine: {
        width: '100%',
        backgroundColor: '#FCA234',
        height: 1,
        marginTop: 15
    }
});
