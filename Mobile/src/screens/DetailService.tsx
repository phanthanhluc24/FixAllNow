import {StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import useGetDetailService from '../hooks/useGetDetailService';
import {useNavigation} from '@react-navigation/native';
const DetailService = ({route}: any) => {
  const navigation: any = useNavigation();
  const {id} = route.params;
  const {service, isLoading, isError} = useGetDetailService(id);
  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error loading repairman</Text>;
  }
  return (
    <View style={styles.containerServiceSpecific}>
      <View style={styles.infoServices}>
        <Image source={{uri: service?.image}} style={styles.imageSer}></Image>
        <View style={styles.infoStyle}>
          <Text numberOfLines={1} style={styles.nameStyle}>
            {service?.service_name}
          </Text>
          <Text style={styles.priceStyle}>
            {service?.price.toLocaleString('vi-VN')}
            {' VND'}
          </Text>
          <Text style={styles.description}>{service?.desc}</Text>
        </View>
        <View style={styles.oneLine}></View>
        <View style={styles.infoUser}>
          <View style={styles.containerInfoUser}>
          <Image source={{uri:service?.user_id.image}} style={styles.imageStyle}></Image>
          <Text style={styles.fullName}>{service?.user_id.full_name}</Text>
          </View>
          
          <TouchableOpacity style={styles.buttonView}onPress={() =>
              navigation.navigate('DetailRepairman', {id: service?.user_id._id,title:service?.user_id.full_name})
            }><Text style={styles.detailRepairman}>Xem thợ!</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.belowInfoService}>
        <View style={styles.buttonChoose}>
          <View style={styles.buttonNow}>
            <View style={styles.button1}>
              <View style={styles.bookNow}>
                <Text style={styles.books}>Đặt ngay</Text>
              </View>
            </View>
            <View style={styles.button1}>
              <View style={styles.book}>
                <Text style={styles.books}>Đặt lịch</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailService;
const styles = StyleSheet.create({
  detailRepairman:{
    fontSize:15,
    fontWeight:"bold",
    color:"#394C6D",
  },
  buttonView:{
    backgroundColor:"#ffffff",
    borderRadius:5,
    borderColor:"#FCA234",
    borderWidth:2,
    height:30,
    width:90,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:40,
   
  },
  fullName:{
    fontSize:20,
    marginHorizontal:10,
    fontWeight:"bold",
    color:"#394C6D",
  },
  imageStyle:{
    width:60,
    height:60,
    borderRadius:50,
    borderColor:"#FCA234",
    borderWidth:2
  },
  infoUser:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    marginVertical:15,
    justifyContent:"space-between"
  },
  containerInfoUser:{
    flexDirection:"row",
    alignItems:"center",
  },
  containerServiceSpecific: {
    flex: 1,
  },
  infoServices: {
    flex: 3,
  },
  belowInfoService: {
    flex: 1,
  },
  imageSer: {
    width: '100%',
    height: 300,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  priceStyle: {
    color: '#FCA234',
    fontWeight: 'bold',
    fontSize: 20,
    width: '40%',
  },
  infoStyle: {
    marginHorizontal: 15,
    marginTop: 13,
  },
  nameStyle: {
    color: '#394C6D',
    fontSize: 25,
    fontWeight: 'bold',
    width: '90%',
  },
  description: {
    color: '#394C6D',
    fontSize: 15,
  },
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  button1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookNow: {
    width: '80%',
    height: 50,
    backgroundColor: '#394C6D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCA234',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  books: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  oneLine:{
    width:"100%",
    backgroundColor:"#FCA234",
    height:1,
    marginTop:15
  }
});
