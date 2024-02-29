import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useEditInfoService = async(formData: any) => {
  console.log(formData)
  try{
    const accessToken = await AsyncStorage.getItem('accessToken');
    const data = new FormData();
    data.append('service_name', formData.service_name);
    data.append('price', formData.price);
    data.append('desc', formData.desc);
    data.append('image',formData.image);
    const response = await axios.post(`${url}/editService`, data ,{
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

}

export default useEditInfoService
