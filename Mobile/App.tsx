import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';
import Main from './src/navigates/main/Main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ToastProvider } from 'react-native-toast-notifications';
import { AlertNotificationRoot,  } from 'react-native-alert-notification';
const queryClient= new QueryClient();
const App = () => {
  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        <AppWrapper />
        {/* <Toast/> */}
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};
const AppWrapper = () => {
  const navigation:any = useNavigation();
  useEffect(() => {
    const checkLogin = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        navigation.navigate('Root');
      }
    };
    checkLogin();
  }, [navigation]);
  return (
   <QueryClientProvider client={queryClient}>
     <Main/>
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