import React,{useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from './apiRequest/url';
const useGetListRepairmanOfCategorySpecific = (id:string) => {
    const [listRepairmanOfCategory, setListRepairmanOfCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchListOfOneCategory = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(
          `${url}/user/repairmanByCategory/${id}`,
          {
            headers: {Authorization: `Bearer ${accessToken}`},
          },
        );
        setListRepairmanOfCategory(response.data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListOfOneCategory();
  }, []);
  return {listRepairmanOfCategory, isLoading, isError};
}

export default useGetListRepairmanOfCategorySpecific