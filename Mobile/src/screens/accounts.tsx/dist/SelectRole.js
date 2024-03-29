"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var SelectRole = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    var navigation = native_1.useNavigation();
    var _b = react_1.useState(''), selectedRole = _b[0], setSelectedRole = _b[1];
    var handleRoleChange = function (role) {
        setSelectedRole(role);
    };
    var handleRadioPress = function (role) {
        handleRoleChange(role);
    };
    var handleContinuePress = function () {
        var roleForSignUp = selectedRole;
        if (selectedRole === 'Thợ sửa chữa') {
            roleForSignUp = 'RPM';
            navigation.navigate('ConfirmTypeRepairman', {
                selectedRole: roleForSignUp
            });
        }
        else if (selectedRole === 'Tìm thợ') {
            roleForSignUp = 'USR';
            navigation.navigate('SignUp', {
                selectedRole: roleForSignUp,
                _id: null,
                address: null
            });
        }
        else {
            setError("Vui lòng chọn vai trò của bạn");
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.imageContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles.logoContainer },
                react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/role/logo.png'), style: styles.logo }))),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title_1 }, "\u0110\u0102NG K\u00DD"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.title_2 }, "B\u1EA1n mu\u1ED1n tr\u1EDF th\u00E0nh"),
        react_1["default"].createElement(react_native_1.View, { style: { height: 30 } }, error != null && (react_1["default"].createElement(react_native_1.Text, { style: styles.error }, error))),
        react_1["default"].createElement(react_native_1.View, { style: styles.radioContainer },
            react_1["default"].createElement(RadioButton, { label: "Th\u1EE3 s\u1EEDa ch\u1EEFa", onPress: function () { handleRadioPress('Thợ sửa chữa'); setError(null); }, isSelected: selectedRole === 'Thợ sửa chữa' }),
            react_1["default"].createElement(RadioButton, { label: "T\u00ECm th\u1EE3", onPress: function () { handleRadioPress('Tìm thợ'); setError(null); }, isSelected: selectedRole === 'Tìm thợ' })),
        react_1["default"].createElement(react_native_1.View, { style: styles.buttonDiv },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: handleContinuePress },
                react_1["default"].createElement(react_native_1.Text, { style: styles.buttonText }, "TI\u1EBEP T\u1EE4C")))));
};
// Thành phần RadioButton
var RadioButton = function (_a) {
    var label = _a.label, onPress = _a.onPress, isSelected = _a.isSelected;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.radioButton },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [
                styles.radioButtonCircle,
                isSelected && styles.radioButtonCircleSelected,
            ], onPress: onPress }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.radioButtonLabel }, label)));
};
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
        marginLeft: 40,
        color: 'black'
    },
    radioContainer: {
        flexDirection: 'column',
        marginTop: 0,
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
    },
    error: {
        color: "red",
        fontWeight: 'bold',
        paddingLeft: 40,
        paddingTop: 10
    }
});
exports["default"] = SelectRole;
