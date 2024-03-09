import React, {useEffect, useState} from 'react';
import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useRatingComment = () => {
    const sendData = async (data: any) => {
        try{
          const accessToken = await AsyncStorage.getItem('accessToken');
          const response = await axios.post(`${url}/comment`,data ,{
            headers: {
             "Content-Type":"multipart/form-data",
             Authorization: `Bearer ${accessToken}`
            }
          });
          return response;
      }catch(error:any){
        throw error;
      }};
      return {sendData};
}
export default useRatingComment

