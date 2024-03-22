import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MapView, {Marker, Polyline} from 'react-native-maps';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import Geolocation from '@react-native-community/geolocation';
const apiKey = 'pk.bbfa78a3eef8b8c32c413f59248bcf97';
interface LocationData {
  latitude: number | null;
  longitude: number | null;
  address: string;
}
const RepairmanViewAddressRepair = ({route}: any) => {
  const {detailBooking} = route.params;
  const repairmanFinderAddress = detailBooking;

  const {currentUser}: any = useGetCurrentUser();


  const [location, setLocation] = useState<LocationData | null>({
    latitude: null,
    longitude: null,
    address: '',
  });
  const [destinationLocation, setDestinationLocation] =
    useState<LocationData | null>({
      latitude: null,
      longitude: null,
      address: '',
    });
  const [shouldShowMapView, setShouldShowMapView] = useState(false);
  const [polylineCoordinates, setPolylineCoordinates] = useState([]);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const address = currentUser.address;
        const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${address}&format=json`);
        const data = response.data[0];
        setLocation({
          latitude: parseFloat(data.lat),
          longitude: parseFloat(data.lon),
          address: data.display_name,
        });
        setShouldShowMapView(true);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };
    fetchLocation();
  }, [currentUser]);

  useEffect(() => {
    const fetchDestinationLocation = async () => {
      try {
        const addressRepairman = repairmanFinderAddress.address;
        const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${addressRepairman}&format=json`);
        const data = response.data[0];
        setDestinationLocation({
          latitude: parseFloat(data.lat),
          longitude: parseFloat(data.lon),
          address: data.display_name,
        });
        setShouldShowMapView(true);
      } catch (error) {
        console.error('Error fetching destination location:', error);
      }
    };
    fetchDestinationLocation();
  }, [detailBooking]);
  useEffect(() => {
    if (location.latitude && destinationLocation.latitude) {
      fetchDirections(location, destinationLocation);
    }
  }, [location, destinationLocation]);

  const fetchDirections = async (origin, destination) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM`);
      const { routes } = response.data;
      if (routes.length > 0) {
        const points = routes[0].overview_polyline.points;
        const polylineCoords = decodePolyline(points);
        setPolylineCoordinates(polylineCoords);
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

  const decodePolyline = (encoded:any) => {
    let points = [];
    let index = 0;
    let lat = 0;
    let lng = 0;

    while (index < encoded.length) {
      let b;
      let shift = 0;
      let result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
      lng += dlng;

      points.push({ latitude: lat / 1E5, longitude: lng / 1E5 });
    }
    return points;
  };
  // useEffect(() => {
  //   if (location.latitude && destinationLocation.latitude) {
  //     // Tính toán và vẽ Polyline ở đây
  //     const coordinates = [
  //       { latitude: location.latitude, longitude: location.longitude },
  //       { latitude: destinationLocation.latitude, longitude: destinationLocation.longitude },
  //     ];
  //     setPolylineCoordinates(coordinates);
  //   }
  // }, [location, destinationLocation]);
  return (
    <View style={styles.container}>
      {shouldShowMapView && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location?.latitude || destinationLocation?.latitude || 0,
            longitude:
              location?.longitude || destinationLocation?.longitude || 0,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          {/* vị trí thợ */}
          {location && (
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
              }}
              title="Địa chỉ của bạn"
              description={location.address}>
              <View style={styles.imageMarkerContainer}>
                <View style={styles.imageMarkerBorder}>
                  <Image
                    source={{uri: currentUser?.image}}
                    style={styles.imageMarker}
                  />
                </View>
              </View>
            </Marker>
          )}
          {/* vị trí bạn nhập vào */}
          {destinationLocation && (
            <Marker
              coordinate={{
                latitude: destinationLocation?.latitude,
                longitude: destinationLocation?.longitude,
              }}
              title="Địa chỉ bạn sẽ đến sửa"
              description={destinationLocation.address}>
              <View style={styles.imageMarkerContainer}>
                <View style={styles.imageMarkerBorder}>
                  <Image
                    source={{uri: repairmanFinderAddress.service_id.image}}
                    style={styles.imageMarker}
                  />
                </View>
              </View>
            </Marker>
          )}
        {polylineCoordinates.length > 0 && (
            <Polyline
              coordinates={polylineCoordinates}
              strokeColor="green"
              strokeWidth={5}
            />
          )}
        </MapView>
      )}
    </View>
  );
};
export default RepairmanViewAddressRepair;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
  iconConfirm: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 70,
    marginVertical: 20,
  },
  titles: {
    fontSize: 17,
    color: '#394C6D',
  },
  titleInfo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#394C6D',
    paddingVertical: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
  },
  nameConfirm: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageMarkerContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMarkerContainers: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  imageMarkerBorder: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FCA234',
    overflow: 'hidden',
  },
  imageMarker: {
    width: '100%',
    height: '100%',
  },
  iconMap: {
    width: 40,
    height: 40,
  },
  addressPrevent: {
    alignItems: 'center',
  },
  messageIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCA234',
    borderRadius: 50,
  },
  // imageMaker: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 50,
  //   borderWidth: 5,
  //   borderColor: '#FCA234',
  //   position: "relative"
  // },
  map: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
  },
  inputContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    marginTop: 45,
  },
  inputContainerss: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#FCA234',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  inputs: {
    height: 100,
    borderColor: '#FCA234',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  event: {
    flex: 1,
    height: 40,
    borderColor: '#FCA234',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    backgroundColor: '#FCA234',
    borderRadius: 10,

    paddingVertical: 10,
    color: '#394C6D',
  },
  events: {
    borderColor: '#394C6D',
    borderWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#394C6D',
    borderRadius: 10,
    width: '90%',
    paddingVertical: 10,
    color: '#394C6D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
