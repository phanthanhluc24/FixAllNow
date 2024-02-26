import axios from 'axios';
import React, {useState} from 'react';
import {url} from './apiRequest/url';
const useAddNewService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendData = async (data:any) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${url}/service`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsLoading(false);
      return response.data;
    } catch (error:any) {
      setIsLoading(false);
      setError(error);
    }
  };

  return {isLoading, error, sendData};
};

export default useAddNewService;
