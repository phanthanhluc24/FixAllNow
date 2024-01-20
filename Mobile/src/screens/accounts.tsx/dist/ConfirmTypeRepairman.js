"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var formik_1 = require("formik");
var native_1 = require("@react-navigation/native");
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
var ConfirmTypeRepairman = function () {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(null), value = _a[0], setValue = _a[1];
    var renderItem = function (item) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.item },
            react_1["default"].createElement(react_native_1.Text, { style: styles.textItem }, item.label)));
    };
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: { job: '', address: '' }, onSubmit: function (values) { return console.log(values); } }, function (_a) {
        var handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values;
        return (react_1["default"].createElement(react_native_1.KeyboardAvoidingView, { behavior: react_native_1.Platform.OS === 'ios' ? 'padding' : 'height', style: styles.confirmTypeContainer },
            react_1["default"].createElement(react_native_1.ScrollView, { contentContainerStyle: { flexGrow: 1 } },
                react_1["default"].createElement(react_native_1.View, { style: styles.header },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/Confirm/confirmType.png') })),
                react_1["default"].createElement(react_native_1.View, { style: styles.body },
                    react_1["default"].createElement(react_native_1.View, { style: styles.container },
                        react_1["default"].createElement(react_native_1.View, { style: styles.titleContainer },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "\u0110\u0102NG KY\u0301")),
                        react_1["default"].createElement(react_native_1.View, { style: styles.form },
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titleJob }, "Ba\u0323n la\u0300 th\u01A1\u0323 gi\u0300?"),
                            react_1["default"].createElement(react_native_element_dropdown_1.Dropdown, { style: styles.dropdown, placeholderStyle: styles.placeholderStyle, selectedTextStyle: styles.selectedTextStyle, inputSearchStyle: styles.inputSearchStyle, iconStyle: styles.iconStyle, data: data, search: true, maxHeight: 300, labelField: "label", valueField: "value", placeholder: "Select item", searchPlaceholder: "Search...", value: value, onChange: function (item) {
                                    setValue(item.value);
                                }, renderItem: renderItem }),
                            react_1["default"].createElement(react_native_1.Text, { style: styles.titleJob }, "\u0110i\u0323a chi\u0309"),
                            react_1["default"].createElement(react_native_1.View, { style: styles.spaceContainer },
                                react_1["default"].createElement(react_native_1.TextInput, { style: styles.inputCode, onChangeText: handleChange('address'), onBlur: handleBlur('address'), value: values.address })),
                            react_1["default"].createElement(react_native_1.View, { style: styles.buttonOnpress },
                                react_1["default"].createElement(react_native_1.View, { style: styles.buttonConfirms }),
                                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonConfirm, onPress: function () { return navigation.navigate('SignUp'); } },
                                    react_1["default"].createElement(react_native_1.Text, { style: styles.textConfirm }, "TI\u00CA\u0301P TU\u0323C")))))),
                react_1["default"].createElement(react_native_1.View, { style: styles.footer },
                    react_1["default"].createElement(react_native_1.View, { style: styles.bgImg },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/Confirm/demo.png'), style: styles.imgDemo }),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/Confirm/demo1.png'), style: styles.imgDemo1 }))))));
    }));
};
exports["default"] = ConfirmTypeRepairman;
var styles = react_native_1.StyleSheet.create({
    confirmTypeContainer: {
        flex: 1,
        backgroundColor: '#FCA234'
    },
    header: {
        flex: 1
    },
    body: {
        flex: 2,
        position: 'absolute',
        zIndex: 2,
        justifyContent: 'center',
        width: '100%',
        marginTop: '10%'
    },
    footer: {
        flex: 1
    },
    bgImg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#394C6D',
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleCode: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputCode: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        width: '80%'
    },
    spaceContainer: {
        alignItems: 'center'
    },
    container: {
        marginTop: 40
    },
    buttonConfirms: {
        width: '50%'
    },
    buttonConfirm: {
        width: '50%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        height: 60,
        marginHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    textConfirm: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imgDemo: {
        marginRight: 65
    },
    imgDemo1: {
        marginTop: 100
    },
    titleJob: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 40
    },
    form: {
        marginTop: 30
    },
    buttonOnpress: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 40
    },
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 37,
        shadowColor: '#000',
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    icon: {
        marginRight: 5
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textItem: {
        flex: 1,
        fontSize: 16
    },
    placeholderStyle: {
        fontSize: 16
    },
    selectedTextStyle: {
        fontSize: 16
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16
    },
    spaceContainers: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 36,
        borderWidth: 1,
        width: '80%'
    }
});
