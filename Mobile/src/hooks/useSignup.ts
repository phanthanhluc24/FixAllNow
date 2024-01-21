import { StyleSheet, Text, View , Alert, ToastAndroid} from 'react-native';
import React from 'react';
import axios from 'axios';
import { url } from './apiRequest/url';
const useSignup = async (userData: any) => {
    const response = await axios.post(`${url}/auth/register`, userData)
    return response.data
  }
export default useSignup
const styles = StyleSheet.create({})