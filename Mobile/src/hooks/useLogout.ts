import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {url} from './apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useLogout = () => {
  const logout = async (accessToken: string) => {
    try {
      const response = await axios.post(
        `${url}/auth/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${accessToken}`},
        },
      );
      
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {logout};
};
export default useLogout;
