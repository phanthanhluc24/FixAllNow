import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useGetServicePopular = () => {
  const [services, setServices]= useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [isError, setIsError]= useState(false);
    const fetchService =async()=>{
      try{
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response= await axios.get(`${url}/service`, {
          headers: {Authorization: `Bearer ${accessToken}`},
        });
        setServices(response.data.data);
      }
      catch(error:any){
        setIsError(true);
      }
      finally{
        setIsLoading(false);
      }
    };
    useEffect(()=>{
    fetchService();
  },[])
  return{services, isLoading, isError};
  // const {data, isLoading, isError} = useQuery({
  //   queryKey: ['getService'],
  //   queryFn: async () => {
  //     try {
  //       const response = await axios.get(`${url}/service`);
  //       return response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  // });
};
export default useGetServicePopular;
const styles = StyleSheet.create({});
