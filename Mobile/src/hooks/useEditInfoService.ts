import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const useEditInfoService = async(formData: any) => {
  try{
    const service_id=formData.service_id;
    const accessToken = await AsyncStorage.getItem('accessToken');
    const data = new FormData();
    data.append('service_name', formData.service_name);
    data.append('price', formData.price);
    data.append('desc', formData.desc);
    data.append('image',formData.image);
    const response = await axios.put(`${url}/service/editService/${service_id}`,data ,{
      headers: {
       "Content-Type":"multipart/form-data",
       Authorization: `Bearer ${accessToken}`
      }
    })
    if(response.data.status ===200){
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Thành công',
        textBody: 'Thông tin dịch vụ đã được chỉnh sửa!',
      })
    }
    return response;
}catch(error:any){
 
  throw error;
};
}
export default useEditInfoService
