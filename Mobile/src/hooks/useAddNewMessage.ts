import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { url } from "./apiRequest/url"

const useAddNewMessage = () => {
   
    const sendNewMessage=async(data:any)=>{
        try {
            const accessToken=await AsyncStorage.getItem("accessToken")
            const response=await axios.post(url+`/message/chat-with`,data,{
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            
        }
    }
   return {sendNewMessage}
}

export default useAddNewMessage
