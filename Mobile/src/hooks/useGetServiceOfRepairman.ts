import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
const useGetServiceOfRepairman = (id:string) => {
  const [serviceOfRepairman, setServiceOfRepairman] = useState([]);
  const [isLoadings, setIsLoading] = useState(true);
  const [isErrors, setIsError] = useState(false);
  useEffect(() => {
    const fetchServiceOfRepairman = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(
          `${url}/service/repairman/detail/${id}`,
          {
            headers: {Authorization: `Bearer ${accessToken}`},
          },
        );
        setServiceOfRepairman(response.data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServiceOfRepairman();
  }, [id]);
  return {serviceOfRepairman, isLoadings, isErrors};
};
export default useGetServiceOfRepairman;
