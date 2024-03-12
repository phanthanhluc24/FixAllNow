/**
 * @format
 */
import {AppRegistry, Image} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
const sound = new Sound(
  require('../Mobile/src/assets/mussic/mussic_booking.mp3'),
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('Error loading sound file:', error);
    }
  },
);
messaging().setBackgroundMessageHandler(async message => {
  sound.play(success => {
    if (success) {
      console.log('Sound played successfully');
    } else {
      console.log('Error playing sound');
    }
  });
});
messaging().onMessage(async message => {
  Toast.show({
    type: ALERT_TYPE.INFO,
    title: `${message.notification.title}`,
    textBody: `${message.notification.body}`,
  });
  sound.play(success => {
    if (success) {
      console.log('Sound played successfully');
    } else {
      console.log('Error playing sound');
    }
  });
});
AppRegistry.registerComponent(appName, () => App);
