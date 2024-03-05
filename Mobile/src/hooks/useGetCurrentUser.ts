import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
interface typeProfile {
  _id: string;
  image: string;
  full_name: string;
  email: string;
  number_phone: number;
  address: string;
  role: string;
  password: string;
  averageStar: number;
  category_id:{name:string}
}
const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<typeProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(`${url}/auth/currentUser`, {
          headers: {Authorization: `Bearer ${accessToken}`},
        });
        const {status, data} = response.data;
        if (status === 201) {
          setCurrentUser(data);
          await AsyncStorage.setItem('roleCurrentUser',data.role);
        } 
        else {
          console.error('Error fetching user:', data.message);
          setIsError(true);
        }
        
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);
  return {currentUser, isLoading, isError};
};

export default useGetCurrentUser;
