import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../../screens/Landing';
import Welcome from '../../screens/Welcome';
import SignIn from '../../screens/accounts.tsx/SignIn';
const queryClient = new QueryClient();
const AuthNavigation = () => {
    const navigation:any= useNavigation();
  const Stack = createStackNavigator();
//   useEffect(() => {
//     const checkAccessToken = async () => {
//       try {
//         const accessToken = await AsyncStorage.getItem('accessToken');
//         if (accessToken) {
//           navigation.navigate('Root');
//         } else {
//           navigation.navigate('SignIn');
//         }
//       } catch (error) {
//         console.error('Lỗi khi kiểm tra accessToken:', error);
//       }
//     };

//     checkAccessToken();
//   }, []);

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