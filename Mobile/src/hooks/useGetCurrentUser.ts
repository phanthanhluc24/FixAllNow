import React,{useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from './apiRequest/url';
const useGetCurrentUser = () => {
    const[currentUser, setCurrentUser]= useState(null);
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
            } else {
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
  return{currentUser, isLoading, isError}
}

export default useGetCurrentUser

