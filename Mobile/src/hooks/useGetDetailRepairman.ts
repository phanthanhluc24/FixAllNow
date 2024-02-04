import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
interface typeRepairman {
  _id: string;
  full_name: string;
  email: string;
  number_phone: number;
  address: string;
  role: string;
  image: string;
  password: string;
  category_id:{name:string};
  averageStar: number;
}
const useGetDetailRepairman = (id: string) => {
  const [repairman, setRepairman] = useState<typeRepairman | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchRepairmanById = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(`${url}/user/repairman/${id}`, {
          headers: {Authorization: `Bearer ${accessToken}`},
        });
        const {status, data} = response.data;
        if (status === 201) {
            setRepairman(data);
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
    fetchRepairmanById();
  }, [id]);
  return {repairman, isLoading, isError};
};
export default useGetDetailRepairman;
