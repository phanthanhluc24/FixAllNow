import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react';
import { useQuery } from '@tanstack/react-query';
import { url } from './apiRequest/url';
import axios from 'axios';
interface typeCategory{
  id: string,
  name: string,
  image: string,
}
const useGetCategoryService = () => {
  // const [data, setData]= useState([]);
  // const [isLoading, setIsLoading]= useState(true);
  // const [isError, setIsError]= useState(false);
  // useEffect(()=>{
  //   const fetchCategories =async()=>{
  //     try{
  //       const response= await axios.get(`${url}/category/categories`);
  //       setData(response.data);
  //     }
  //     catch(error:any){
  //       setIsError(true);
  //     }
  //     finally{
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchCategories();
  // },[])
  // return{data, isLoading, isError};
  const {data, isLoading, isError}= useQuery({
    queryKey:['getCategory'],
    queryFn: async()=>{
      try{
        const response= await axios.get(`${url}/category/categories`);
        return response.data;
      }catch(error){
        throw error;
      }
    }
  })
}
export default useGetCategoryService
const styles = StyleSheet.create({})