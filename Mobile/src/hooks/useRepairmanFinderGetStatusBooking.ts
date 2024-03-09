import React, {useEffect, useState} from 'react';
import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useRepairmanFinderGetStatusBooking = (transformedSelectedTab:any) => { 
const option=transformedSelectedTab;
console.log(option);
  const [statusBooking, setStatusBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchStatusBooking = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`${url}/booking/byStatus/${option}`,{
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      console.log(response.data);
      setStatusBooking(response.data.data);
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchStatusBooking();
  }, [option]);
  return {statusBooking, isLoading, isError};
}
export default useRepairmanFinderGetStatusBooking
