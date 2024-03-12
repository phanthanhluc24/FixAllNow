import React, {useEffect, useState} from 'react';
import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useRatingComment = () => {
  const sendData = async (data: any,  service_id:any) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(`${url}/comment/${service_id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data.message);
      
      return response;
    } catch (error: any) {
      throw error;
    }
  };
  return {sendData};
};
export default useRatingComment;
