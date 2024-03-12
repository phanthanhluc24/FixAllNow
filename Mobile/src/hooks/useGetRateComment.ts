import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';

const useGetRateComment = (repairman_id: any) => {
  // const id=repairman_id
  const [rateComment, setRateComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchRateComment = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`${url}/comment/${repairman_id}`, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      console.log(response.data.data);
      setRateComment(response.data.data);
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchRateComment();
    }, 180000);
    return () => clearInterval(intervalId);
  }, [repairman_id]);
  useEffect(() => {
    fetchRateComment();
  }, []);
  return {rateComment, isLoading, isError};
};

export default useGetRateComment;
