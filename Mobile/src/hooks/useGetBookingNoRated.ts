import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
const useGetBookingNoRated = () => {
    const [bookingNorating, setBookingNorating]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const [isError, setIsError]= useState(false);
      const fetchBookingNorating =async()=>{
        try{
          const accessToken = await AsyncStorage.getItem('accessToken');
          const response= await axios.get(`${url}/comment/checkToComment`, {
            headers: {Authorization: `Bearer ${accessToken}`},
          });
          setBookingNorating(response.data.data);
        }
        catch(error:any){
          setIsError(true);
        }
        finally{
          setIsLoading(false);
        }
      };
      useEffect(()=>{
      fetchBookingNorating();
    },[])
    return{bookingNorating, isLoading, isError};
}
export default useGetBookingNoRated
