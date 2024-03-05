import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const useDeleteService =  () => {
  const destroyService=async(service_id:any)=>{
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.put(`${url}/service/destroy/${service_id}`,{},{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if(response.data.status ===200 ){
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Xóa dịch vụ thành công!',
        })
      }
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
  return {destroyService}
};
export default useDeleteService;
