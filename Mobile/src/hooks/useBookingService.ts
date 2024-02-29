import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { url } from './apiRequest/url'
import Toast from 'react-native-toast-message'

const useBookingService = () => {

    const bookingService = async (data: any, service_id: string, category_id: string) => {
        const accessToken = await AsyncStorage.getItem("accessToken")
        try {
            const response = await axios.post(url + `/booking/notification/${service_id}/${category_id}`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            console.log(response.data.status);
            
            if (response.data.status != 200) {
                Toast.show({
                    text1: "Thông báo",
                    text2: `${response.data.message}`,
                    type: "error",
                    autoHide: true,
                    visibilityTime: 7000,
                    topOffset: 10,
                    position: "top"
                })
            } else {
                Toast.show({
                    text1: "Thông báo",
                    text2: `${response.data.message}`,
                    type: "success",
                    autoHide: true,
                    visibilityTime: 7000,
                    topOffset: 10,
                    position: "top"
                })
            }
        } catch (error) {
            console.log(error);

        }

    }
    return { bookingService }
}

export default useBookingService
