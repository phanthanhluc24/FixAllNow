/**
 * @format
 */

import {AppRegistry,Image} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from "@react-native-firebase/messaging"
import Toast from "react-native-toast-message"
import Sound from "react-native-sound"
import AsyncStorage from '@react-native-async-storage/async-storage'
messaging().setBackgroundMessageHandler(async message =>{
    console.log(message);
})
const sound=new Sound(require("../Mobile/src/assets/mussic/mussic_booking.mp3"),Sound.MAIN_BUNDLE,(error)=>{
    if (error) {
        console.log('Error loading sound file:', error);
      }
})
messaging().onMessage(async message =>{
 const role= await AsyncStorage.getItem("roleCurrentUser")
  if (message.data.role==role) {
    Toast.show({
        type:"info",
        text1:`${message.notification.title}`,
        text2:`${message.notification.body}`,
        autoHide:true,
        visibilityTime:7000,
        topOffset: 10,
        position:"top"
    })
    sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Error playing sound');
        }
      });
  }
      
})
AppRegistry.registerComponent(appName, () => App);
