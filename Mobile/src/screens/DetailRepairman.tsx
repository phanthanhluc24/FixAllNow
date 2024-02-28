import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DetailHeaderRepairman from './DetailHeaderRepairman';
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const DetailRepairman = ({route}: any) => {
  const data = [{ key: 'DetailHeaderRepairman' }];
  const renderHeader= ()=>{
    return (
      <View>
        <DetailHeaderRepairman />
      </View>
    );
  }
  
  return (
    <View style={styles.containerServiceSpecific}>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderHeader}
      />
    </View>
  );
};
export default DetailRepairman;
const styles = StyleSheet.create({
  containerServiceSpecific:{
    flex:1
  },
 
});
