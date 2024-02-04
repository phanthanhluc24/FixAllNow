import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../../screens/Landing';
import Welcome from '../../screens/Welcome';
import SignIn from '../../screens/accounts.tsx/SignIn';
import SignUp from '../../screens/accounts.tsx/SignUp';
import SelectRole from '../../screens/accounts.tsx/SelectRole';
import ConfirmCode from '../../screens/accounts.tsx/ConfirmCode';
import ConfirmTypeRepairman from '../../screens/accounts.tsx/ConfirmTypeRepairman';
import ForgotPassword from '../../screens/accounts.tsx/ForgotPassword';
import NewPassword from '../../screens/accounts.tsx/NewPassword';
import Home from '../../screens/feed/Repairman_Finder/Home';
// import HeaderSearch from '../../screens/HeaderSearch';
// import HomeCategories from '../../screens/HomeCategories';
// import HomeRepairmanPopular from '../../screens/HomeRepairmanPopular';
// import HomeServicePopular from '../../assets/HomeServicePopular';
import ListOfElectrician from '../../screens/ListOfElectrician';
import DetailRepairman from '../../screens/DetailRepairman';
import DetailService from '../../screens/DetailService';
import RatedComment from '../../screens/RatedComment';
const queryClient = new QueryClient();
const Main = () => {
  const Stack = createStackNavigator();
  return (
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
          <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
           <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
          <Stack.Screen name="Root" component={DrawerNavigator} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name="SelectRole" component={SelectRole} options={{ headerShown: false }} />
          <Stack.Screen name="ConfirmCode" component={ConfirmCode} options={{headerShown:false}}/>
          <Stack.Screen name="ConfirmTypeRepairman" component={ConfirmTypeRepairman} options={{headerShown:false}}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
          <Stack.Screen name="NewPassword" component={NewPassword} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:true}}/>
          <Stack.Screen name="ListOfElectrician" component={ListOfElectrician} options={{headerShown:true}}/>
          <Stack.Screen name="DetailRepairman" component={DetailRepairman} options={{headerShown:true}}/>
          <Stack.Screen name="DetailService" component={DetailService} options={{headerShown:true}}/>
          <Stack.Screen name="RatedComment" component={RatedComment} options={{headerShown:true}}/>
          {/* <Stack.Screen name="Roots" component={DrawerNavigator} options={{headerShown: false}}/> */}
        </Stack.Navigator>
      </QueryClientProvider>
   
  )
}

export default Main;

const styles = StyleSheet.create({})