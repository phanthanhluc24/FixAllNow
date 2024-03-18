"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useAutoplay = function (length, currentIndex, setCurrentIndex) {
    react_1.useEffect(function () {
        var autoplayTimer = setInterval(function () {
            var nextIndex = (currentIndex + 1) % length;
            setCurrentIndex(nextIndex);
        }, 5000);
        return function () { return clearInterval(autoplayTimer); };
    }, [currentIndex, length, setCurrentIndex]);
};
exports["default"] = useAutoplay;
