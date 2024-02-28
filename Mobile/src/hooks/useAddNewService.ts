import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAddNewService = () => {
  const sendData = async (data: any) => {
    try{
      const accessToken = await AsyncStorage.getItem('accessToken');
      const formData = new FormData();
      formData.append('desc', data.desc);
      formData.append('price', data.price);
      formData.append('service_name', data.service_name);
      formData.append('image',data.image);
      const response = await axios.post(`${url}/service`, formData ,{
        headers: {
         "Content-Type":"multipart/form-data",
         Authorization: `Bearer ${accessToken}`
        }
      });
      return response;
  }catch(error:any){
    console.log(error);
    throw error;
  }};
  return {sendData};
};
export default useAddNewService;
