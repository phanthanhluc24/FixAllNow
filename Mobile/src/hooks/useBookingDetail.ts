import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "./apiRequest/url";
import { useState, useEffect } from "react";
const useBookingDetail = (booking_id:string) => {
    const [detailBookings, setDetailBooking] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      const fetchDetailBooking = async () => {
        try {
          const accessToken = await AsyncStorage.getItem('accessToken');
          const response = await axios.get(`${url}/booking/detailBooking/${booking_id}`, {
            headers: {Authorization: `Bearer ${accessToken}`},
          });
          const {status, data} = response.data;
          if (status === 200) {
            setDetailBooking(response.data.data);
          } else {
            console.error('Error fetching repairman:', data.message);
            setIsError(true);
          }
        } catch (error) {
          console.error('Error fetching repairman:', error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchDetailBooking();
    }, [booking_id]);
    return {detailBookings, isLoading, isError};
  
}

export default useBookingDetail
