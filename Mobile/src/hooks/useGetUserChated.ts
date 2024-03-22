import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "./apiRequest/url"

const useGetUserChated = () => {
    const [userChat,setUserChat]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        const fetchGetUserChat = async () => {
            const accessToken = await AsyncStorage.getItem("accessToken")
            const response = await axios.get(url + "/chat", {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            setUserChat(response.data)
            setIsLoading(false)
        }
        const interval = setInterval(() => {
            fetchGetUserChat();
        }, 3000);

        // Clean up interval when component unmounts
        return () => clearInterval(interval);
    },[])
    return {userChat,isLoading,setIsLoading}
}

export default useGetUserChated
