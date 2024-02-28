/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from "@react-native-firebase/messaging"
import Toast from "react-native-toast-message"
import Sound from "react-native-sound"
messaging().setBackgroundMessageHandler(async message =>{
    console.log(message);
})
const sound=new Sound(require("../Mobile/src/assets/mussic/mussic_booking.mp3"),Sound.MAIN_BUNDLE,(error)=>{
    if (error) {
        console.log('Error loading sound file:', error);
      }
})
messaging().onMessage(async message =>{
    console.log(message.notification.id);
    Toast.show({
        type:"info",
        text1:`${message.notification.title}`,
        text2:`${message.notification.id}`,
        autoHide:true,
        visibilityTime:4000
    })
    sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Error playing sound');
        }
      });
      
})
AppRegistry.registerComponent(appName, () => App);
