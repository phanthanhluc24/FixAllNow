import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {url} from './apiRequest/url';
import axios from 'axios';
interface typeService {
  user_id: string;
  id: string;
  service_name: string;
  image: string;
  price: number;
  dics: string;
}
const useGetServicePopular = () => {
  // const [data, setData]= useState([]);
  // const [isLoading, setIsLoading]= useState(true);
  // const [isError, setIsError]= useState(false);
  // useEffect(()=>{
  //   const fetchService =async()=>{
  //     try{
  //       const response= await axios.get(`${url}/service`);
  //       console.log(response);
  //       setData(response.data);
  //     }
  //     catch(error:any){
  //       setIsError(true);
  //     }
  //     finally{
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchService();
  // },[])
  // return{data, isLoading, isError};
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
