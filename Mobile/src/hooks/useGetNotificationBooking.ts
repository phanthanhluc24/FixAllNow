import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
const useGetNotificationBooking = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchNotifications = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`${url}/notification`, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      setNotifications(response.data.data);
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      fetchNotifications();
    },180000);
    return ()=>clearInterval(intervalId)
  },[])
  useEffect(() => {
    fetchNotifications();
  }, []);
  return {notifications, isLoading, isError};
};
export default useGetNotificationBooking;
