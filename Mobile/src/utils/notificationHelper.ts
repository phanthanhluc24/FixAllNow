import { StyleSheet, Text, View } from 'react-native'
import messaging from "@react-native-firebase/messaging"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async() => {
  const authStatus= await messaging().requestPermission()
  console.log(authStatus);
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

export const getFcmToken=async()=>{
    let fcmToken=await AsyncStorage.getItem("fcmToken")
    if (!fcmToken) {
        try {
            const token=await messaging().getToken()
            if (token) {
                await AsyncStorage.setItem("fcmToken",token)
            }
        } catch (error:any) {
            console.log("can't get fcmToken",error.message);
            
        }
    }
}

