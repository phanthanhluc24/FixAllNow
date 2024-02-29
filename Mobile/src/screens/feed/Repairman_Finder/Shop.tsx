import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Modal, Button, Text } from 'react-native';

const Shop = () => {


    return (
       <View>
          {/* <Modal visible={true} >
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <Text style={styles.title}>Dịch vụ của bạn có người đặt lịch</Text>
                <View style={styles.underline}></View>
                <Image style={styles.image} source={require("../../../assets/role/logo.png")}></Image>
                <View style={styles.viewDetails}>
                  <Text style={styles.textTitle}>Người đặt:<Text style={styles.textSubTitle}>Phan Thanh Lực</Text></Text>
                  <Text style={styles.textTitle}>Ngày:<Text style={styles.textSubTitle}>13-03-2003</Text> </Text>
                  <Text style={styles.textTitle}>Giờ:<Text style={styles.textSubTitle}>15 AM</Text></Text>
                </View>
                <View style={styles.spaceButton}>
                <Button title="Đóng" onPress={hideModal} color={"gray"}/>
                <Button title="Chi tiết" onPress={detailBooking} color={"#FCA234"}/>
                </View>
              </View>
            </View>
          </Modal> */}
        </View>
    )
};
const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 300,
  },
  title:{
    fontSize:17,
    fontWeight:"bold",
    alignSelf:"center",
    color:"#FCA234"
  },
  image:{
    alignSelf:"center",
    width:80,
    height:80
  },
  underline:{
    width:"100%",
    height:1,
    backgroundColor:"#394C6D",
    alignItems:"center"
  },
  spaceButton:{
    flexDirection:'row',
    justifyContent:"space-around",
    paddingTop:20
  },
  viewDetails:{
    marginLeft:10
  },
  textTitle:{
    fontSize:18,
    color:"#FCA234"
  },
  textSubTitle:{
    color:"#394C6D"
  }
});
export default Shop;
