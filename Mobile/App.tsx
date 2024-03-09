import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect, useState} from 'react';
import Main from './src/navigates/main/Main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ToastProvider } from 'react-native-toast-notifications';
import { AlertNotificationRoot,  } from 'react-native-alert-notification';
import AuthNavigation from './src/navigates/main/AuthNavigation';
import { set } from 'react-hook-form';

const queryClient= new QueryClient();
const App = () => {
  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        <AppWrapper />
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};
const AppWrapper = () => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    const checkLogin = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log("Tken",accessToken);
      if (accessToken) {
        setStatus('true');
      }
    };
    checkLogin();
  }, [1000]);
  return (
   <QueryClientProvider client={queryClient}>
    {status? <Main/>: <AuthNavigation/>}
    </QueryClientProvider>
  )
}
export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
})