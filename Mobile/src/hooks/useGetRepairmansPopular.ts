import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
interface typeRepairman {
  _id: string;
  full_name: string;
  email: string;
  number_phone: number;
  address: string;
  role: string;
  password: string;
  averageStar: number;
}
const useGetRepairmansPopular = (currentPage:number) => {
  const [repairmans, setRepairmans] = useState<typeRepairman[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRepairman,setTotalRepairman]=useState(0)
  const fetchRepairman = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`${url}/user/repairmans/${currentPage}`, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      setRepairmans(response.data.data);
      setTotalRepairman(response.data.total)
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRepairman();
  }, [currentPage]);
  return {repairmans,totalRepairman, isLoading, isError, fetchMore: ()=> fetchRepairman()};
};
export default useGetRepairmansPopular;
