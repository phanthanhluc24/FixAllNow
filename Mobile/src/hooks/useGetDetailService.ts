import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
interface typeService {
  _id: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const useGetDetailService = (id: string) => {
  const [service, setService] = useState<typeService | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchDetailService = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(`${url}/service/${id}`, {
          headers: {Authorization: `Bearer ${accessToken}`},
        });
        const {status, data} = response.data;
        if (status === 201) {
          setService(data);
        } else {
          console.error('Error fetching repairman:', data.message);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching repairman:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailService();
  }, [id]);
  return {service, isLoading, isError};
};
export default useGetDetailService;
