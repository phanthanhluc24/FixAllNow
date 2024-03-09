"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var MapBookingScreen = function () {
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, null, "MapBookingScreen")));
};
exports["default"] = MapBookingScreen;
var styles = react_native_1.StyleSheet.create({});
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import MapboxGL from '@rnmapbox/maps';
// MapboxGL.setAccessToken(
//   'sk.eyJ1IjoidHJhbi1xdW9jLWh1dS0wMyIsImEiOiJjbHRmbXdueDIwb3VxMmtvZGt6cmJweW1rIn0.__FOWoel2rfqnhyspBxNnA',
// );
// MapboxGL.setConnected(true);
// MapboxGL.setTelemetryEnabled(false);
// MapboxGL.setWellKnownTileServer('Mapbox');
// const MapBookingScreen = () => {
//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView
//         style={styles.map}
//         zoomEnabled={true}
//         styleURL="mapbox://styles/mapbox/streets-v12"
//         rotateEnabled={true}>
//         <MapboxGL.Camera
//           zoomLevel={15}
//           centerCoordinate={[10.181667, 36.806389]}
//           pitch={60}
//           animationMode={'flyTo'}
//           animationDuration={6000}></MapboxGL.Camera>
//         <MapboxGL.PointAnnotation
//           id="marker"
//           coordinate={[10.181667, 36.806389]}>
//           <View />
//         </MapboxGL.PointAnnotation>
//       </MapboxGL.MapView>
//       <Text>fdff</Text>
//     </View>
//   );
// };
// export default MapBookingScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useRef, useState, useEffect} from 'react';
// import MapView, {Marker, Polyline} from 'react-native-maps';
// import Feather from 'react-native-vector-icons/Feather';
// const MapBookingScreen = ({route}: any) => {
//   const {serviceInfo} = route.params;
//   console.log(serviceInfo);
//   const [coordinates, setCoordinates]: any = useState(null);
//   console.log(coordinates);
//   const [userLocation, setUserLocation]:any = useState(null);
//   console.log(userLocation);
//   const [userAddress, setUserAddress]:any = useState('');
//   console.log(userAddress);
//   useEffect(() => {
//     if (serviceInfo.user_id.address) {
//       console.log(serviceInfo.user_id.address);
//       getCoordinatesFromAddress(serviceInfo.user_id.address, setCoordinates);
//     }
//   }, [serviceInfo]);
//   useEffect(() => {
//     if (userAddress) {
//       getCoordinatesFromAddress(userAddress, setUserLocation);
//     }
//   }, [userAddress]);
//   const getCoordinatesFromAddress = async (
//     address: string,
//     setLocation: Function,
//   ) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//           address,
//         )}&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM`,
//       );
//       const data = await response.json();
//       if (data.results && data.results.length > 0) {
//         const location = data.results[0].geometry.location;
//         console.log(location);
//         setLocation(location);
//       } else {
//         throw new Error('Không tìm thấy địa chỉ.');
//       }
//     } catch (error) {
//       console.error('Lỗi khi lấy tọa độ từ địa chỉ.', error);
//     }
//   };
//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.searchInput}>
//         <TextInput
//           multiline={true}
//           value={userAddress}
//           onChangeText={setUserAddress}
//           placeholder="Nhập vị trí của bạn tại đây"
//         />
//         <TouchableOpacity style={styles.messageIcon}>
//           <Feather name="search" color="black" size={28} />
//         </TouchableOpacity>
//       </View>
//       {(coordinates && userLocation) && (
//             <MapView
//             style={{ flex: 1 }}
//             region={{
//               latitude: (coordinates.lat + userLocation.lat) / 2,
//               longitude: (coordinates.lng + userLocation.lng) / 2,
//               latitudeDelta: Math.abs(coordinates.lat - userLocation.lat) + 0.1,
//               longitudeDelta: Math.abs(coordinates.lng - userLocation.lng) + 0.1,
//             }}>
//             <Marker
//               coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}
//               title={serviceInfo.user_id.address}
//               description={serviceInfo.user_id.address}
//             />
//             <Marker
//               coordinate={{ latitude: userLocation.lat, longitude: userLocation.lng }}
//               title="Vị trí của bạn"
//               description={userAddress}
//             />
//             <Polyline
//               coordinates={[{ latitude: coordinates.lat, longitude: coordinates.lng },
//                 { latitude: userLocation.lat, longitude: userLocation.lng },
//               ]}
//               strokeColor="#FCA234"
//               strokeWidth={2}
//             />
//           </MapView>
//         )
//         }
//     </View>
//   );
// };
// export default MapBookingScreen;
// const styles = StyleSheet.create({
//   searchInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: '100%',
//     backgroundColor: 'white',
//     paddingLeft: 15,
//   },
//   SearchInputs: {
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginVertical: 5,
//     justifyContent: 'space-between',
//   },
//   messageIcon: {
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   images: {
//     width: 50,
//     height: 50,
//     borderRadius: 100,
//     borderWidth: 3,
//     borderColor: '#394C6D',
//   },
// });
