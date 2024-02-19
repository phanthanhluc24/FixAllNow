import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
const useGetServiceOfRepairman = (id:string) => {
    // console.log(id)
  const [serviceOfRepairman, setServiceOfRepairman] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
        console.error('Error fetching service of repairman:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServiceOfRepairman();
  }, []);
  return {serviceOfRepairman, isLoading, isError};
};
export default useGetServiceOfRepairman;
