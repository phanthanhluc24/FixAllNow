import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import useGetDetailService from '../hooks/useGetDetailService';
const DetailService = ({route}:any) => {
    const{id}= route.params;
    const {service, isLoading, isError}= useGetDetailService(id)
    if (isLoading ) {
        return <Text style={styles.loadingText}>Loading...</Text>;
      }
      if (isError ) {
        return <Text>Error loading repairman</Text>;
      }
  return (
    <View>
        <Image source={{uri:service?.image}} style={styles.imageSer}/>
      <Text>{service?.service_name}</Text>
      <Text>{service?.price.toLocaleString("vi-VN")}{" VND"}</Text>
      <Text>{service?.desc}</Text>
    </View>
  )
}

export default DetailService

const styles = StyleSheet.create({
    imageSer:{
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:2,
        borderColor:"#394C6D",
    },
    loadingText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'gray',
      textAlign: 'center',
      marginTop: 10,
    }
})