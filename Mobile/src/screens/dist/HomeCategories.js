"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_snap_carousel_1 = require("react-native-snap-carousel");
var useAutoPlay_1 = require("../hooks/useAutoPlay");
var useGetServicePopular_1 = require("../hooks/useGetServicePopular");
var useGetCategoryService_1 = require("../hooks/useGetCategoryService");
var native_1 = require("@react-navigation/native");
var react_native_loader_kit_1 = require("react-native-loader-kit");
var width = react_native_1.Dimensions.get('window').width;
var HomeCategories = function () {
    var navigation = native_1.useNavigation();
    var services = useGetServicePopular_1["default"]().services;
    var carouselRef = react_1.useRef(null);
    var _a = react_1.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    useAutoPlay_1["default"]((services === null || services === void 0 ? void 0 : services.length) || 0, currentIndex, setCurrentIndex);
    var _b = useGetCategoryService_1["default"](), categories = _b.categories, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading) {
        return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, null,
                react_1["default"].createElement(react_native_loader_kit_1["default"], { style: styles.loadingText, name: 'BallPulse', color: '#FCA234' }))));
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.error }, "Error loading categories");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerCategory },
        react_1["default"].createElement(react_native_snap_carousel_1["default"], { data: services || [], renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.View, { style: styles.imgTitle },
                    react_1["default"].createElement(react_native_1.ImageBackground, { source: { uri: item.image }, style: styles.imgs },
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.container, onPress: function () {
                                return navigation.navigate('DetailService', {
                                    id: item._id,
                                    title: item.service_name
                                });
                            } },
                            react_1["default"].createElement(react_native_1.View, { style: styles.content },
                                react_1["default"].createElement(react_native_1.View, { style: { width: '70%' } },
                                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.hello }, item.service_name),
                                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3, style: styles.detaildemo }, item.desc)),
                                react_1["default"].createElement(react_native_1.View, { style: { width: '30%' } },
                                    react_1["default"].createElement(react_native_1.Image, { style: styles.logoSetting, source: require('../assets/Homes/logo_setting.png') })))))));
            }, ref: carouselRef, sliderWidth: width, itemWidth: width - 30, loop: true, autoplayInterval: 3000, enableSnap: true, onSnapToItem: function (index) { return setCurrentIndex(index); }, autoplay: true }),
        react_1["default"].createElement(react_native_1.View, { style: styles.detailCategory },
            react_1["default"].createElement(react_native_1.FlatList, { data: categories, keyExtractor: function (categories) { return categories._id; }, numColumns: 3, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.category, onPress: function () {
                            return navigation.navigate('ListOfElectrician', {
                                id: item._id,
                                title: item.name
                            });
                        } },
                        react_1["default"].createElement(react_native_1.View, { style: styles.imgCategory },
                            react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.img, blurRadius: 0 })),
                        react_1["default"].createElement(react_native_1.View, { style: styles.nameCategory },
                            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 1, style: styles.titleCategory }, item.name))));
                } }))));
};
exports["default"] = HomeCategories;
var styles = react_native_1.StyleSheet.create({
    titles: {
        color: '#394C6D',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    logoSetting: {
        width: 100,
        height: 100
    },
    imgs: {
        width: 345,
        height: 250,
        borderRadius: 20
    },
    contents: {
        color: '#394C6D',
        fontWeight: 'bold',
        fontSize: 22
    },
    imgContent: {
        marginHorizontal: 24,
        borderRadius: 10,
        marginTop: '55%',
        backgroundColor: '#FCA234',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentdescription: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FCA234',
        height: 80,
        backgroundColor: '#394C6D'
    },
    imgTitle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    load: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerCategory: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#394C6D',
        width: '90%',
        height: 120,
        marginTop: '35%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24
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
        color: '#FCA234',
        width: '90%'
    },
    detaildemo: {
        fontSize: 13,
        color: '#FFFFFF',
        width: '90%'
    },
    detailCategory: {
        marginHorizontal: 20,
        paddingTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingTop: 20
    },
    category: {
        alignItems: 'center',
        width: 110,
        justifyContent: 'center',
        height: 'auto',
        padding: 5
    },
    titleCategory: {
        color: '#394C6D',
        fontSize: 15,
        padding: 5
    },
    img: {
        width: 35,
        height: 35,
        // resizeMode: 'cover',
        borderRadius: 40
    },
    nameCategory: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgCategory: {
        width: 63,
        height: 63,
        borderRadius: 50,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        marginHorizontal: 20
    },
    loadingText: {
        fontSize: 20,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        width: 50,
        height: 50
    }
});
