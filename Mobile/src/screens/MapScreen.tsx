import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const MapScreen = () => {
  return (
    <View style={{...StyleSheet.absoluteFillObject,flex: 1, alignItems: 'center', justifyContent:"flex-end"}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{...StyleSheet.absoluteFillObject}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});

