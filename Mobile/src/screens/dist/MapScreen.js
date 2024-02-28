"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var MapScreen = function () {
    var mapRef = react_1.useRef(null);
    var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
    var region = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922 * (width / height)
    };
    var latitudes = [-15.806553, -15.8202434];
    var longitudes = [-47.8891454, -47.9045093];
    return (react_1["default"].createElement(react_native_maps_1["default"], { ref: mapRef, zoom: 5, style: {
            flex: 1
        }, region: region, showsUserLocation: true, router: {
            titleA: "The point A",
            titleB: "The point B",
            descriptionA: "Bank",
            descriptionB: "Scholl",
            coordinates: [
                {
                    latitude: latitudes[0],
                    longitude: longitudes[1]
                },
                {
                    latitude: latitudes[1],
                    longitude: longitudes[1]
                }
            ]
        } }));
};
exports["default"] = MapScreen;
var styles = react_native_1.StyleSheet.create({});
