import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from './apiRequest/url';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {useNavigation} from '@react-navigation/native';
const useBookingService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation: any = useNavigation();
  const bookingService = async (
    data: any,
    service_id: string,
    category_id: string,
  ) => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    try {
      setIsLoading(true);
      const response = await axios.post(
        url + `/booking/notification/${service_id}/${category_id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log(response.data.status);
      if (response.data.status === 200) {
        navigation.navigate('Root', {reload: true});
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Bạn đặt lịch sửa thành công! Vui lòng chờ xác nhận',
        });
      } else {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'Thất bại',
          textBody:
            'Bạn đặt lịch sửa chữa không thành công! Có thể do bạn đặt lịch của chính bạn hoặc 1 số vấn đề khác',
        });
        setIsLoading(false);
      }
    } catch (error) {}
  };
  return {bookingService, isLoading};
};
export default useBookingService;
