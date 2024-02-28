import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { requestUserPermission } from '../../../utils/notificationHelper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Notification = () => {
  const [token,setToken]=useState("")
  useEffect(()=>{
    const getToken=async()=>{
     await requestUserPermission()
     await getFcmToken()
    }
    getToken()
  },[])

  const getFcmToken=async()=>{
    const token=await AsyncStorage.getItem("fcmToken")
    console.log('fcmToken (notif)',token);
    if (token) {
      setToken(token) 
    }
  }
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Text>{token}</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})