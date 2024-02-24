import react from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
import {Alert, ToastAndroid} from 'react-native';
import {useState} from "react"
interface Account {
  email: string;
  password: string;
}
interface ApiResponse {
  status: number;
  message: any;
  accessToken:string;
}
const useSignin = ({navigation}: any) => {
  const [errorServer,setErrorServer]=useState(null)
  const handleSignin = async (data: Account) => {
    try {
      const res = await axios.post<ApiResponse>(`${url}/auth/login`, data);
      if (res.data.status=== 201){
        const accessToken= res.data.accessToken;
        await AsyncStorage.setItem('accessToken',accessToken);
        console.log(accessToken)
        ToastAndroid.showWithGravity(res.data.message, ToastAndroid.LONG, ToastAndroid.CENTER);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Root' }],
        });
      } else{
        setErrorServer(res.data.message)
      }
    } catch (error:any){
      console.log(error);
      
      // if (error.response) {
      //   const errorMessage = error.response.data.message;
      //   ToastAndroid.showWithGravity(errorMessage, ToastAndroid.LONG, ToastAndroid.CENTER);
      // } else if (error.request) {
      //   ToastAndroid.showWithGravity('Không có phản hồi từ máy chủ', ToastAndroid.LONG, ToastAndroid.CENTER);
      // } else {
      //   ToastAndroid.showWithGravity('Lỗi khi thiết lập yêu cầu', ToastAndroid.LONG, ToastAndroid.CENTER);
      // }
    }
  };
  return {handleSignin,errorServer};
};

export default useSignin;
