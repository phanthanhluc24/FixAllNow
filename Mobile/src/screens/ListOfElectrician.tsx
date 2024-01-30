import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ListOfElectrician = () => {
    const navigation:any= useNavigation();
  return (
    <View style={styles.repairmanPopular}>
      <View style={styles.container}>
        <Text style={styles.title}>Thợ nổi bật</Text>
        <View style={styles.containerRepairman}>
          <TouchableOpacity style={styles.repairman} onPress={()=>navigation.navigate('DetailRepairman')}>
            <View style={styles.content}>
              <Image
                source={require('../assets/Homes/avartarss.png')}
                style={styles.img}
              />
              <View>
                <Text style={styles.nameRepairman}>Phan Thanh Lực</Text>
                <Text style={styles.distance}>2.5 km</Text>
                <Image source={require('../assets/Homes/rate.png')} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListOfElectrician;

const styles = StyleSheet.create({
  repairmanPopular: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  repairman: {
    marginTop: 10,
    backgroundColor: '#FCA234',
    width: '100%',
    height: 132,
    borderRadius: 10,
  },
  containerRepairman: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  img: {
    width: 100,
    height: 100,
  },
  nameRepairman: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
