"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useHandleClickNotification = function () {
    var _a = react_1.useState([]), clicked = _a[0], setClicked = _a[1];
    var handlePress = function () {
        setClicked(!clicked);
    };
    return { clicked: clicked, handlePress: handlePress };
};
exports["default"] = useHandleClickNotification;
