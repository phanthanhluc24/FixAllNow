import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MapView, {Marker, Polyline} from 'react-native-maps';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
// import { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';

import { useNavigation } from '@react-navigation/native';
interface LocationData {
  latitude: number | null;
  longitude: number | null;
  address: string;
}
interface BookingInfo {
  infoServiceBooking: any; 
  address: string | null;
  bugService: string;
  date: string;
  time: string;
  locationData: LocationData; 
}

const apiKey = 'pk.bbfa78a3eef8b8c32c413f59248bcf97';
const MapBookingScreen = ({route}: any) => {
  const {serviceInfo} = route.params;
  // console.log(serviceInfo);
  const navigation:any= useNavigation();
  const userInfo = serviceInfo;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState({
    date: '',
    time: '',
  });
  const [inputValue, setInputValue] = useState('');
  const {currentUser}: any = useGetCurrentUser();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [currentLocation, setCurrentLocation] = useState<{ latitude: number, longitude: number, address: string | null, description: string | null } | null>(null);
  const [destination, setDestination] = useState('');
  const [destinationLocation, setDestinationLocation] = useState<LocationData | null>(null);
  const [polylineCoords, setPolylineCoords] = useState([]);
  const [shouldShowMapView, setShouldShowMapView] = useState(false);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  // lấy địa chỉ của repairman
  const fetchLocation = async () => {
    try {
      const address = userInfo.user_id.address;
      // console.log('address', address);
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${address}&format=json`,
      );
      const data = response.data[0];
      setLocation({
        latitude: parseFloat(data.lat),
        longitude: parseFloat(data.lon),
        address: data.display_name,
      });
      setShouldShowMapView(true);
    } catch (error) {
      // console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchLocation();
  }, []);

  // Hàm yêu cầu quyền truy cập vị trí từ người dùng
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Ứng dụng cần truy cập vị trí',
          message:
            'Cho phép ứng dụng truy cập vị trí để sử dụng tính năng này.',
          buttonPositive: 'Đồng ý',
          buttonNeutral: 'Hỏi lại tôi sau',
          buttonNegative: 'Hủy',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Quyền truy cập vị trí đã được cấp phép!',
        });
        getCurrentLocation();
      } else {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'Cảnh báo',
          textBody: 'Quyền truy cập vị trí bị từ chối!',
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getReverseGeocoding = async (latitude:any, longitude:any) => {
    console.log('huu lấy tên địa chỉ', latitude, longitude);

    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.bbfa78a3eef8b8c32c413f59248bcf97&lat=${latitude}&lon=${longitude}&format=json`,
      );
      const { display_name } = response.data;
      console.log('display', display_name);

      return display_name;
    } catch (error) {
      console.log(error.message);

      return null;
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      async (position:any) => {
        const { latitude, longitude }:any = position.coords;
        setLatitude(latitude)
        setLongitude(longitude)
        console.log('Latitude hiện tại:', latitude);
        console.log('Longitude hiện tại:', longitude);
        const address = await getReverseGeocoding(latitude, longitude);
        setAddress(address)
        console.log('Địa chỉ hiện tại:', address);
        setCurrentLocation({ latitude, longitude, address });
      },
      (error:any) => console.error('Lỗi khi lấy vị trí hiện tại:', error),
      { enableHighAccuracy: false, timeout: 10000},
    );
  };

  useEffect(() => {
    requestLocationPermission();
    Geolocation.getCurrentPosition(latitude, longitude, address);
  }, []);

  const handleGetCurrentLocation = () => {
    getCurrentLocation();
  };

  //Lấy địa chỉ của người tìm thợ
  const fetchDestinationLocation = async () => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${destination}&format=json`,
      );
      const data = response.data[0];
      setDestinationLocation({
        latitude: parseFloat(data.lat),
        longitude: parseFloat(data.lon),
        address: data.display_name,
      });
      setShouldShowMapView(true);
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  //hàm xử lý search
  const handleDestinationChange = (text:any) => {
    setDestination(text);
    // Gọi hàm cập nhật polyline khi có sự thay đổi
    updatePolyline();
  };
  // nút bấm tìm kiếm

  const handleSearch = () => {
    if (!destination.trim()) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Cảnh báo',
        textBody: 'Vui lòng nhập địa chỉ cụ thể!',
      });
    } else {
      fetchDestinationLocation();
      updatePolyline();
    }
  };

  useEffect(() => {
    if (location && destinationLocation) {
      fetchDirection(); // fetch địa điểm sau khi cả hai điểm đã được xác định
      updatePolyline();
    }
  }, [location, destinationLocation]);
  // xử lý gọi địa chỉ của cả repairman và repairman finder
  const fetchDirection = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destinationLocation.latitude},${destinationLocation.longitude}&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM`,
      );
      const routes = response.data.routes;
      if (routes.length > 0) {
        const points = routes[0].overview_polyline.points;
        const decodedPoints:any = decodePolyline(points);
        setPolylineCoords(decodedPoints);
      }
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  //cập nhật lại đường polyline
  const updatePolyline = async () => {
    if (location && destinationLocation) {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destinationLocation.latitude},${destinationLocation.longitude}&key=AIzaSyBRGhLTzmea8tZ2VoAYQ0Hck4mATOBzldM`,
        );
        const routes = response.data.routes;
        if (routes.length > 0) {
          const points = routes[0].overview_polyline.points;
          const decodedPoints:any = decodePolyline(points);
          setPolylineCoords(decodedPoints);
        }
      } catch (error) {
        // console.error('Error:', error);
      }
    }
  };
  //dùng decodePolyline để phân tích tuyến đường
  const decodePolyline = (encoded: string): { latitude: number; longitude: number }[] => {
    let index = 0;
    let len = encoded.length;
    let lat = 0;
    let lng = 0;
    const polylineCoords = [];
    while (index < len) {
      let b;
      let shift = 0;
      let result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;
      const latitude = lat / 1e5;
      const longitude = lng / 1e5;
      polylineCoords.push({latitude, longitude});
    }
    return polylineCoords;
  };
  // modal xác nhận booking
  const getCurrentDateTime = () => {
    const currentDate = moment().format('DD/MM/YYYY');
    const currentTime = moment().format('hh:mm:ss A');
    setCurrentDateTime({date: currentDate, time: currentTime});
  };
  const handleConfirmBooking = () => {
    if (!destination) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Cảnh báo',
        textBody: 'Vui lòng nhập địa chỉ cần sửa!',
      });
    } else {
      getCurrentDateTime();
      setSelectedDestination(destination);
      setModalVisible(true);
    }
  };
  const [error, setError]= useState(false)
  const handleInputChange = (text:any) => {
    setInputValue(text);
  };
  // hàm truyền dữ liệu đã xác nhận qua component Confirm 1 lần nữa
  const handleConfirmAndNavigate = () => {
    if (!inputValue.trim()) {
      // Nếu ô input không được điền, hiển thị thông báo lỗi
     setError('Vui lòng nhập thông tin mô tả đầy đủ')
    }
    else{
    setModalVisible(false);
    const {date, time} = currentDateTime;
    const infoBooking = {
      infoServiceBooking: serviceInfo,
      address: destinationLocation?.address,
      bugService:inputValue,
      date,
      time,
    };
    // console.log("infoBooking map",infoBooking);
    navigation.navigate('ConfirmInforBooking', {infoBooking: infoBooking});
  }
  };
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
          {/* vị trí hiện tại trên bản đồ */}
          {currentLocation  && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Vị trí hiện tại của bạn"
              description={currentLocation.address}>
              <View style={styles.imageMarkerContainers}>
                <View style={styles.address}></View>
              </View>
            </Marker>
          )}

          {/* vị trí thợ */}
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Địa chỉ thợ sửa"
              description={location.address}>
              <View style={styles.imageMarkerContainer}>
                <View style={styles.imageMarkerBorder}>
                  <Image
                    source={{uri: userInfo.user_id.image}}
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
                latitude: destinationLocation.latitude,
                longitude: destinationLocation.longitude,
              }}
              title="Địa chỉ hiện tại của bạn"
              description={destinationLocation.address}
              >
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
          {polylineCoords.length > 0 && (
            <Polyline
              coordinates={polylineCoords}
              strokeColor="green"
              strokeWidth={5}
            />
          )}
        </MapView>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập địa chỉ thợ sẽ đến?"
          value={destination}
          onChangeText={handleDestinationChange}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.messageIcon} onPress={handleSearch}>
          <Feather name="search" color="#394C6D" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainers}>
        <TouchableOpacity
          onPress={handleGetCurrentLocation}
          style={styles.event}>
          <Text>Chọn vị trí hiện tại</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetCurrentLocation}>
          <Image
            style={styles.iconMap}
            source={require('../assets/Homes/iconMap.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainerss}>
        <TouchableOpacity style={styles.events} onPress={handleConfirmBooking}>
          <Text style={styles.nameConfirm}>Xác nhận đặt lịch</Text>
        </TouchableOpacity>
      </View>
      {/* Modal hiển thị địa chỉ */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.titleInfo}>
              Giờ hiện tại:{'  '}
              {currentDateTime.time}{' '}
            </Text>

            <Text style={styles.titleInfo}>
              Ngày hiện tại:{'  '}
              {currentDateTime.date}
            </Text>

            <Text style={styles.titleInfo}>
              Địa chỉ đã chọn:{'  '}
              {destinationLocation && destinationLocation.address}
            </Text>
            <TextInput
              multiline={true}
              style={styles.inputs}
              placeholder="Mô tả thiết bị hư hỏng?"
              value={inputValue}
              onChangeText={handleInputChange}
            />
            <View style={{height:30}}>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
            
            <TouchableOpacity style={styles.iconConfirm}>
              <AntDesign
                name="closecircleo"
                color="#394C6D"
                size={40}
                onPress={() => setModalVisible(false)}
              />
              <AntDesign
                name="checkcircleo"
                color="green"
                size={40}
                onPress={handleConfirmAndNavigate}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default MapBookingScreen;
const styles = StyleSheet.create({
  errorText:{
    color:"red"
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
