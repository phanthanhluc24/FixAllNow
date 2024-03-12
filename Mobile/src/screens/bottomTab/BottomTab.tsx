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
          let title = '';
          if (rn === 'Home') {
            imageSource = require(`${URL_IMAGE}/iconhome.png`);
            title = 'Trang chủ';
          } else if (rn === 'Shop') {
            imageSource = require(`${URL_IMAGE}/iconshop.png`);
            title = 'Cửa hàng';
          } else if (rn === 'Scan') {
            imageSource = require(`${URL_IMAGE}/AI.png`);
            title = 'Hỏi đáp';
          } else if (rn === 'Notification') {
            imageSource = require(`${URL_IMAGE}/iconnotification.png`);
            title = 'Thông báo';
          } else if (rn === 'Profile') {
            imageSource = require(`${URL_IMAGE}/iconprofile.png`);
            title = 'Hồ sơ';
          }
          return (
            <View style={focused ? styles.focusedStyle : styles.tabItem}>
              <Image
                source={imageSource}
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? '#ffffff' : '#394C6D',
                  },
                ]}
              />
              <Text
                style={focused ? styles.focusedLabelStyle : styles.labelStyle}>
                {title}
              </Text>
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
      })}>
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
    width: 35,
    height: 35,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedStyle: {
    backgroundColor: '#394C6D',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    width: '100%',
  },
  labelStyle: {
    fontSize: 12,
    color: '#394C6D',
    textAlign: 'center',
  },
  focusedLabelStyle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight:"bold"
  },
});
