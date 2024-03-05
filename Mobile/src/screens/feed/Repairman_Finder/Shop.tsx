import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Modal, Button, Text } from 'react-native';
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification';
const Shop = () => {
    return (
       <View>
          <Button
      title={'dialog box'}
      onPress={() =>
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is dialog box success',
          button: 'close',
        })
      }
    />
     <Button
      title={'toast notification'}
      onPress={() =>
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is toast notification success',
        })
      }
    />
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
