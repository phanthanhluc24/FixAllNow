import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
const MapBookingScreen = ({route}: any) => {
  const {serviceInfo} = route.params;
  const [coordinates, setCoordinates] = useState<any>(null);
  console.log('huu', serviceInfo);
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const address = serviceInfo.user_id.address;
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address,
          )}&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM`,
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          setCoordinates(location);
        } else {
          throw new Error('Không tìm thấy địa chỉ.');
        }
      } catch (error) {
        console.error('Lỗi khi lấy tọa độ từ địa chỉ.', error);
      }
    };

    fetchCoordinates();
  }, [serviceInfo]);
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <TextInput multiline={true} placeholder="Nhập vị trí của bạn tại đây" />
        <TouchableOpacity style={styles.messageIcon}>
          <Feather name="search" color="black" size={28} />
        </TouchableOpacity>
      </View>
      {coordinates && (
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}>
            <Image
              source={{uri: serviceInfo.user_id.image}}
              style={styles.avatarRepairman}
            />
          </Marker>
        </MapView>
      )}
    </View>
  );
};

export default MapBookingScreen;

const styles = StyleSheet.create({
  avatarRepairman: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FCA234',
  },
  container: {
    flex: 1,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  messageIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
//   console.log("huu",serviceInfo);
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
//       console.log("huu1",data)
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