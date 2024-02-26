"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var StarRating = function (_a) {
    var rating = _a.rating, onRatingPress = _a.onRatingPress;
    var _b = react_1.useState(rating), selectedStar = _b[0], setSelectedStar = _b[1];
    var handleStarPress = function (star) {
        setSelectedStar(star);
        onRatingPress(star);
    };
    var renderStars = function () {
        var stars = [];
        var _loop_1 = function (i) {
            stars.push(react_1["default"].createElement(react_native_1.TouchableOpacity, { key: i, onPress: function () { return handleStarPress(i); }, activeOpacity: 0.7 },
                react_1["default"].createElement(FontAwesome_1["default"], { name: selectedStar >= i ? 'star' : 'star-o', size: 40, color: selectedStar >= i ? '#FFD700' : '#FFFFFF' })));
        };
        for (var i = 1; i <= 5; i++) {
            _loop_1(i);
        }
        return stars;
    };
    return react_1["default"].createElement(react_native_1.View, { style: styles.star }, renderStars());
};
exports["default"] = StarRating;
var styles = react_native_1.StyleSheet.create({
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    }
});
