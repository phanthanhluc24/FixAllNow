import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react';
import { useQuery } from '@tanstack/react-query';
import { url } from './apiRequest/url';
import axios from 'axios';
interface typeRepairman{
  id: string,
 full_name: string,
  email: string,
  number_phone:number,
  address:string,
  role:string,
  password: string
}
const useGetRepairmans = () => {
  // const [data, setData]= useState<typeRepairman[]>([]);
  // const [isLoading, setIsLoading]= useState(true);
  // const [isError, setIsError]= useState(false);
  // useEffect(()=>{
  //   const fetchRepairman =async()=>{
  //     try{
  //       const response= await axios.get(`${url}/user/repairmans`);
  //       setData(response.data);
  //     }
  //     catch(error:any){
  //       setIsError(true);
  //     }
  //     finally{
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRepairman();
  // },[])
  // return{data, isLoading, isError};
  const {data, isLoading, isError}= useQuery({
    queryKey:['getRepairman'],
    queryFn: async()=>{
      try{
        const response= await axios.get(`${url}/user/repairmans`);
        return response.data;
      }catch(error){
        throw error;
      }
    }
  })
}
export default useGetRepairmans;
const styles = StyleSheet.create({})