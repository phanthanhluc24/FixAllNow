import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from './apiRequest/url';
const useGetBookingNotYetRated = () => {
    const [bookingNotYetrating, setBookingNotYetrating]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const [isError, setIsError]= useState(false);
      const fetchBookingNotYetrating =async()=>{
        try{
          const accessToken = await AsyncStorage.getItem('accessToken');
          const response= await axios.get(`${url}/comment/checkToComment`, {
            headers: {Authorization: `Bearer ${accessToken}`},
          });
          console.log(response.data);
          
          setBookingNotYetrating(response.data.data);
        }
        catch(error:any){
          setIsError(true);
        }
        finally{
          setIsLoading(false);
        }
      };
      useEffect(()=>{
      fetchBookingNotYetrating();
    },[])
    return{bookingNotYetrating, isLoading, isError};
}
export default useGetBookingNotYetRated
