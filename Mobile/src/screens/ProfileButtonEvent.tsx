import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const ProfileButtonEvent = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.containerEvent}>
      <View style={styles.styleEvent}>
        <TouchableOpacity
          style={styles.addService}
          onPress={() => navigation.navigate('FormAddNewService')}>
          <Text style={styles.nameAddService}>Thêm mới dịch vụ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewHistory}>
          <Text
            style={styles.nameViewHistory}
            onPress={() => navigation.navigate('HistoryStore')}>
            Lịch sử cửa hàng
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={() => navigation.navigate('HistoryRepairmanBookSchedule')}>
        <View style={styles.viewHistorys}>
          <Text
            style={styles.nameViewHistory}>
            Lịch sử đặt lịch
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButtonEvent;

const styles = StyleSheet.create({
  nameAddService: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FCA234',
  },
  nameViewHistory: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FCA234',
  },
  viewHistory: {
    backgroundColor: '#394C6D',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    // marginBottom:10,
    // marginHorizontal:20
    marginBottom: 10,
  },
  viewHistorys: {
    backgroundColor: '#394C6D',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    // marginBottom:10,
    // marginHorizontal:20
    marginBottom: 10,
    width: '100%',
  },
  addService: {
    backgroundColor: '#394C6D',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  containerEvent: {
    flex: 1,
  },
  styleEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
});
