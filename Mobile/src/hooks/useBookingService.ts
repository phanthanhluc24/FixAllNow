import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from './apiRequest/url';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {useNavigation} from '@react-navigation/native';
const useBookingService = () => {
  const navigation: any = useNavigation();
  const bookingService = async (
    data: any,
    service_id: string,
    category_id: string,
  ) => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    try {
      const response = await axios.post(
        url + `/booking/notification/${service_id}/${category_id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.data.status === 200) {
        navigation.reset({
          index: 0,
          routes:[{name:"Root"}]
        });
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Bạn đặt lịch sửa thành công! Vui lòng chờ xác nhận',
        });
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Thất bại',
        textBody: 'Bạn đặt lịch sửa chữa không thành công',
      });
    }
  };
  return {bookingService};
};

export default useBookingService;
