import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUploadAvatarUser = () => {
  const sendData = async (data: any) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const formData = new FormData();

      formData.append('image', data.image);
      console.log('formdata:', formData.getParts());

      const response = await axios.post(`${url}/user/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  };
  return {sendData};
};

export default useUploadAvatarUser;
