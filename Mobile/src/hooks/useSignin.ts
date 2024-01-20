
import react from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
import {Alert, ToastAndroid} from 'react-native';
interface Account {
  email: string;
  password: string;
}
interface ApiResponse {
  status: number;
  message: string;
}
const useSignin = ({navigation}: any) => {
  const handleSignin = async (data: Account) => {
    try {
      console.log(data);
      const res = await axios.post<ApiResponse>(`${url}/auth/login`, data);
      if (res.status === 201) {
        console.log(res.status);
        ToastAndroid.showWithGravity(res.data.message, ToastAndroid.LONG, ToastAndroid.CENTER);
        navigation.navigate('Home');
      } else {
        Alert.alert(res.data.message);
      }
    } catch (error:any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        ToastAndroid.showWithGravity(errorMessage, ToastAndroid.LONG, ToastAndroid.CENTER);
      } else if (error.request) {
        ToastAndroid.showWithGravity('Không có phản hồi từ máy chủ', ToastAndroid.LONG, ToastAndroid.CENTER);
      } else {
        ToastAndroid.showWithGravity('Lỗi khi thiết lập yêu cầu', ToastAndroid.LONG, ToastAndroid.CENTER);
      }
    }
  };
  return {handleSignin};
};

export default useSignin;
