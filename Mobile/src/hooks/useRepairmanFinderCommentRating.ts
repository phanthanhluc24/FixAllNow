import React, {useEffect, useState} from 'react';
import {url} from './apiRequest/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useRepairmanFinderCommentRating = () => {
  const [ratingComment, setRatingComment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchRatingComment = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`${url}/.../`, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      setRatingComment(response.data.data);
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRatingComment();
  }, []);
  return {ratingComment, isLoading, isError};
}
export default useRepairmanFinderCommentRating
