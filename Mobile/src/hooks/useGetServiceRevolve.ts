import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
const useGetServiceRevolve = (id:string) => {
  const [serviceRevolve, setServiceRevolve] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchServiceRevolve = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(
          `${url}/service/relatedByCategory/${id}`,
          {
            headers: {Authorization: `Bearer ${accessToken}`},
          },
        );
        setServiceRevolve(response.data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServiceRevolve();
  }, [id]);
  return {serviceRevolve, isLoading, isError};
};
export default useGetServiceRevolve;