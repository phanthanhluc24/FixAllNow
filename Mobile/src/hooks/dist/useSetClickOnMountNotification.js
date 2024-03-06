"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useSetClickOnMountNotification = function () {
    var _a = react_1.useState([]), clicked = _a[0], setClicked = _a[1];
    react_1.useEffect(function () {
        setClicked(true);
    }, []);
    return { clicked: clicked };
};
exports["default"] = useSetClickOnMountNotification;
