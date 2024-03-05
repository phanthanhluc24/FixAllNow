import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const useEditInfoCurrentUser = async(formData: any) => {
    try{
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(`${url}/user/editInformation`,formData,{
        headers: {
         Authorization: `Bearer ${accessToken}`
        }
      });
      if(response.data.status){
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Thông tin người dùng đã được chỉnh sửa!',
        })
      }
      return response;
  }catch(error:any){
    throw error;
  };
  
};

export default useEditInfoCurrentUser
