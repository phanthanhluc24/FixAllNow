import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {url} from './apiRequest/url';
const useVerificationEmail = async (email: string) => {
  
    const response = await axios.post(`${url}/auth/verificationAccount`, {email:email})
    return response.data
};
export default useVerificationEmail;
