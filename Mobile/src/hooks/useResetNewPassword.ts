import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
import {url} from './apiRequest/url';
const useResetNewPassword = async(data:any) => {
    const response=await axios.post(`${url}/auth/resetNewPassword`,data)
    return response.data
}
export default useResetNewPassword

const styles = StyleSheet.create({})