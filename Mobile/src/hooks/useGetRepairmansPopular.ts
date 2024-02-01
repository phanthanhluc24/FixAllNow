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
const useGetRepairmansPopular = () => {
  const [repairmans, setRepairmans] = useState<typeRepairman[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const fetchRepairman = async (pageNumber: number) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      // console.log(accessToken);
      const response = await axios.get(`${url}/user/repairmans/${page}`, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      // console.log(response.data.data);
      setRepairmans((prevData)=>(pageNumber===1? response.data.data: [...prevData, ...response.data.data]));
      setPage(pageNumber + 1);
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRepairman(1);
  }, []);
  return {repairmans, isLoading, isError, fetchMore: ()=> fetchRepairman(page)};
  // const {data, isLoading, isError}= useQuery({
  //   queryKey:['getRepairman'],
  //   queryFn: async()=>{
  //     try{
  //       const response= await axios.get(`${url}/user/repairmans`);
  //       return response.data.data;
  //     }catch(error){
  //       throw error;
  //     }
  //   }
  // })
  // return{data, isLoading, isError};
};
export default useGetRepairmansPopular;
const styles = StyleSheet.create({});
