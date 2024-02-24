import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Home from '../feed/Repairman_Finder/Home';
import Shop from '../feed/Repairman_Finder/Shop';
import Notification from '../feed/Repairman_Finder/Notification';
import Scan from '../feed/Repairman_Finder/Scan';
import Profile from '../feed/Repairman_Finder/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const URL_IMAGE = '../../assets/BottomTab';
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let rn = route.name;
          let imageSource;
          if (rn === 'Home') {
            imageSource = require(`${URL_IMAGE}/iconhome.png`);
          } else if (rn === 'Shop') {
            imageSource = require(`${URL_IMAGE}/iconshop.png`);
          } else if (rn === 'Scan') {
            imageSource = require(`${URL_IMAGE}/scans.png`);
          } else if (rn === 'Notification') {
            imageSource = require(`${URL_IMAGE}/iconnotification.png`);
          } else if (rn === 'Profile') {
            imageSource = require(`${URL_IMAGE}/iconprofile.png`);
          }
          return (
            <View style={focused ? styles.focusedStyle : null}>
              <Image
                source={imageSource}
                style={[
                  {
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#FCA234' : '#394C6D',
                  },
                ]}
              />
            </View>
          );
        },
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {
          height: 62,
        },
      })
      }>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Shop" component={Shop} options={{headerShown: false}} />
      <Tab.Screen name="Scan" component={Scan} options={{headerShown: false}} />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  tabIcon: {
    borderRadius: 10,
    borderWidth: 2,
    width: '100%',
    height: '100%',
  },
  focusedStyle: {
    backgroundColor: 'rgba(252, 162, 52, 0.46)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 62,
    width: '100%',
  },
});
