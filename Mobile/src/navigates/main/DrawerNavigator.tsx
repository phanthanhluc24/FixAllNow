import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from '../../screens/feed/Repairman_Finder/Home';
import Shop from '../../screens/feed/Repairman_Finder/Shop';
import Notification from '../../screens/feed/Repairman_Finder/Notification';
import Profile from '../../screens/feed/Repairman_Finder/Profile';
import HeaderTitleComponent from '../../screens/HeaderTitleComponent';
import BottomTab from '../../screens/bottomTab/BottomTab';
import HeaderNotification from '../../screens/HeaderNotification/';
interface OptionsScreenProps {
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
  size?: number;
}
const URL_IMAGE = '../../assets/BottomTab';
const DrawerNavigator = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  const headerOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
  };
  const optionsScreen = ({
    drawerIcon,
    headerTitle,
    size = 24,labelColor = 'black'
  }: OptionsScreenProps) => ({
    drawerIcon: ({color}: {color: string}) => (
      <Image
        source={drawerIcon}
        style={{width: size, height: size, tintColor: color}}
      />
    ),
    ...headerOptions,
    headerTitle,
    drawerLabelStyle: { color: labelColor }, 
    activeTintColor: labelColor 
  });
  return (
    <GestureHandlerRootView style={styles.DrawerContainer}>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen
          name="Main"
          component={BottomTab}
          options={() => ({
            headerShown: true,
            headerTitle: () => <HeaderTitleComponent />,
          })}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={optionsScreen({
            drawerIcon: require(`${URL_IMAGE}/iconhome.png`),
            headerTitle: () => <HeaderTitleComponent />,
            backgroundColor: 'white',
            
          })
        }
        >
        </Drawer.Screen>
       
        <Drawer.Screen
          name="Shop"
          component={Shop}
          options={optionsScreen({
            drawerIcon: require(`${URL_IMAGE}/iconshop.png`),
            headerTitle: () => <HeaderTitleComponent />,
            backgroundColor: 'white',
          })}
        />
        <Drawer.Screen
          name="Notification"
          component={Notification}
          options={optionsScreen({
            drawerIcon: require(`${URL_IMAGE}/iconnotification.png`),
            headerTitle: () => <HeaderNotification/>,
            backgroundColor: 'white',
          })}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={optionsScreen({
            drawerIcon: require(`${URL_IMAGE}/iconprofile.png`),
            headerTitle: () => <HeaderTitleComponent />,
            backgroundColor: 'white',
          })}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  DrawerContainer: {
    flex: 1,
  },
});
