import react from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
import {Alert, ToastAndroid} from 'react-native';
import {useState} from "react"
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useNavigation } from '@react-navigation/native';
interface Account {
  email: string;
  password: string;
}
interface ApiResponse {
  status: number;
  message: any;
  accessToken:string;
}
const useSignin = () => {
  const navigation:any=useNavigation()
  const [errorServer,setErrorServer]=useState(null)
  const handleSignin = async (data: Account) => {
    try {
      const res = await axios.post<ApiResponse>(`${url}/auth/login`, data);
      if (res.data.status=== 201){
        const accessToken= res.data.accessToken;
        await AsyncStorage.setItem('accessToken',accessToken);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Đăng nhập thành công!',
        })
        navigation.navigate('Root');
      } else{
        setErrorServer(res.data.message)
      }
    } catch (error:any){
    }
  };
  return {handleSignin,errorServer};
};

export default useSignin;
