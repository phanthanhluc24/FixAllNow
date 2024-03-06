import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../../screens/Landing';
import Welcome from '../../screens/Welcome';
import SignIn from '../../screens/accounts.tsx/SignIn';
const queryClient = new QueryClient();
const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
    </QueryClientProvider>
  );
};
export default AuthNavigation;