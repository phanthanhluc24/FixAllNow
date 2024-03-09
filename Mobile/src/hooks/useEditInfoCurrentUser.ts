import axios from 'axios';
import { url } from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useEditInfoCurrentUser = async (formData: any) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const response = await axios.put(`${url}/user/editInformation`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data.status;
  } catch (error) {
    throw error;
  }
};

export default useEditInfoCurrentUser;
