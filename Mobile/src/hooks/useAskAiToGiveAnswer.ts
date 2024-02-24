import { StyleSheet, Text, View } from 'react-native'
import { url } from './apiRequest/url';
import axios from 'axios'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAskAiToGiveAnswer = () => {
    const [answer, setAnswer] = useState<[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const questionAndAnswer = (question: any) => {
        const getAccessToken = async () => {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const response = await axios.post(`${url}` + "/chatGPT", question, {
                headers: { Authorization: `Bearer ${accessToken}` }
            })
            setAnswer(response.data.data)
            setIsLoading(false)
        }
        getAccessToken()
    }
    return { questionAndAnswer,answer,isLoading,setIsLoading }
}
export default useAskAiToGiveAnswer
