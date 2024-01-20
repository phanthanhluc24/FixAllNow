"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var SelectRole = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(''), selectedRole = _a[0], setSelectedRole = _a[1];
    var handleRoleChange = function (role) {
        setSelectedRole(role);
    };
    var handleRadioPress = function (role) {
        handleRoleChange(role);
    };
    var handleContinuePress = function () {
        if (selectedRole === 'Thợ sửa chữa') {
            navigation.navigate('ConfirmTypeRepairman');
        }
        else if (selectedRole === 'Tìm thợ') {
            navigation.navigate('SignUp');
        }
        else {
            react_native_1.Alert.alert('Please select a role before continuing.');
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.imageContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.logoContainer },
                react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/role/logo.png'), style: styles.logo }))),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title_1 }, "\u0110\u0102NG K\u00DD"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title_2 }, "B\u1EA1n mu\u1ED1n tr\u1EDF th\u00E0nh"),
        react_1["default"].createElement(react_native_1.View, { style: styles.radioContainer },
            react_1["default"].createElement(RadioButton, { label: "Th\u1EE3 s\u1EEDa ch\u1EEFa", onPress: function () { return handleRadioPress('Thợ sửa chữa'); }, isSelected: selectedRole === 'Thợ sửa chữa' }),
            react_1["default"].createElement(RadioButton, { label: "T\u00ECm th\u1EE3", onPress: function () { return handleRadioPress('Tìm thợ'); }, isSelected: selectedRole === 'Tìm thợ' })),
        react_1["default"].createElement(react_native_1.View, { style: styles.buttonDiv },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: handleContinuePress },
                react_1["default"].createElement(react_native_1.Text, { style: styles.buttonText }, "TI\u1EBEP T\u1EE4C")))));
};
// Thành phần RadioButton
var RadioButton = function (_a) {
    var label = _a.label, onPress = _a.onPress, isSelected = _a.isSelected;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.radioButton },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles.radioButtonCircle, isSelected && styles.radioButtonCircleSelected], onPress: onPress }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.radioButtonLabel }, label)));
};
// Styles cho thành phần SelectRole
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fca234',
        padding: 16
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    logoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain'
    },
    title_1: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20
    },
    title_2: {
        fontSize: 25,
        marginTop: 40,
        marginLeft: 10,
        color: 'black'
    },
    radioContainer: {
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: 40
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },
    radioButtonCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        marginRight: 10
    },
    radioButtonCircleSelected: {
        backgroundColor: '#394C6D'
    },
    radioButtonLabel: {
        fontSize: 25,
        color: 'black'
    },
    button: {
        backgroundColor: '#394C6D',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'flex-start',
        alignContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    },
    buttonDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
exports["default"] = SelectRole;
