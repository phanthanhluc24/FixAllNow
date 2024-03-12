import React, {useEffect, useState} from 'react';
import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useRepairmanChangeStatusBooking = (
  booking_id: string,
  option: number,
  token:string,
  onStatusChanged: () => void
) => {
  const fetchChangeStatusBooking = async () => {
    const response = await axios.put(
      `${url}/booking/changeStatusByRepairman/${booking_id}/${option}`,{},
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    console.log(response.data.message);
    onStatusChanged();
  };
  fetchChangeStatusBooking();
};
export default useRepairmanChangeStatusBooking;
