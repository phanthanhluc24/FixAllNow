import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useEditInfoCurrentUser = async(formData: any) => {
    console.log(formData)
    try{
      const accessToken = await AsyncStorage.getItem('accessToken');
      const data = new FormData();
      data.append('full_name', formData.full_name);
      data.append('number_phone', formData.number_phone);
      data.append('email', formData.email);
      data.append('image',formData.image);
      const response = await axios.post(`${url}/editCurrentUser`, data ,{
        headers: {
         "Content-Type":"multipart/form-data",
         Authorization: `Bearer ${accessToken}`
        }
      });
      return response;
  }catch(error:any){
    console.log(error);
    throw error;
  };
  
};

export default useEditInfoCurrentUser
