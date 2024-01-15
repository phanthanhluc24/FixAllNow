import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Landing from '../../screens/Landing';
import Welcome from '../../screens/Welcome';
import SignIn from '../../screens/accounts.tsx/SignIn';
import SignUp from '../../screens/accounts.tsx/SignUp';
const queryClient = new QueryClient();
const Main = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
          <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
          <Stack.Screen name="Root" component={DrawerNavigator} options={{headerShown:false}}/>
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
            {/* <Stack.Screen name="BottomTab" component={BottomTab}options={{headerShown: false}}/> */}
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default Main;

const styles = StyleSheet.create({})