import {StyleSheet, Text, View, Dimensions, TextInput , TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
const MapBookingScreen = () => {
  const [coordinates, setCoordinates] = useState(null);
  return (
    <View style={{flex: 1}}>
      <View style={styles.searchInput}>
          <TextInput
            multiline={true}
            // value={searchValue}
            // onChangeText={handleSearchChange}
            placeholder="Tìm kiếm dịch vụ"
          />
          <TouchableOpacity style={styles.messageIcon} >
            <Feather name="search" color="black" size={28} />
          </TouchableOpacity>
        </View>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 16.054407,
          longitude: 108.202164,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <Marker
          coordinate={{latitude: 16.054407, longitude: 108.202164}}
          title="Đà Nẵng"
          description="Thành phố Đà Nẵng, Việt Nam"
        />
      </MapView>
    </View>
  );
};

export default MapBookingScreen;
const styles = StyleSheet.create({
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
  SearchInputs: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  messageIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#394C6D',
  },

});
