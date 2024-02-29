import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { requestUserPermission } from '../../../utils/notificationHelper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ALERT_TYPE, Dialog, AlertNotificationRoot,Toast } from 'react-native-alert-notification';
const Notification = () => {
  // const [token,setToken]=useState("")
  // useEffect(()=>{
  //   const getToken=async()=>{
  //    await requestUserPermission()
  //    await getFcmToken()
  //   }
  //   getToken()
  // },[])

  // const getFcmToken=async()=>{
  //   const token=await AsyncStorage.getItem("fcmToken")
  //   console.log('fcmToken (notif)',token);
  //   if (token) {
  //     setToken(token) 
  //   }
  // }



  return (
    // <View style={styles.container}>
      <AlertNotificationRoot>
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
      </AlertNotificationRoot>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})