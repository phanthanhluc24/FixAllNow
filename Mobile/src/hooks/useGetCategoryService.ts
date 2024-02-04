import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {url} from './apiRequest/url';
import axios from 'axios';
interface typeCategory {
  id: string;
  name: string;
  image: string;
}
const useGetCategoryService = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${url}/category`);
        setCategories(response.data.data);
      } catch (error: any) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return {categories, isLoading, isError};
  // const {data, isLoading, isError} = useQuery({
  //   queryKey: ['getCategory'],
  //   queryFn: async () => {
  //     const response = await axios.get(`${url}/category`);
  //     return response.data.data;
  //   },
  // });

  // return {data, isLoading, isError};
};
export default useGetCategoryService;

