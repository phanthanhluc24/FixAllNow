import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "./apiRequest/url"

const useGetMessageConversation = (id:any) => {
  console.log("Id room",id);
  
   const [messages, setMessages] = useState<any[]>([]);
   useEffect(()=>{
     const getMessageConversation=async()=>{
       const accessToken=await AsyncStorage.getItem("accessToken")
       const messages=await axios.get(url+`/message/get-conversation-room/${id}`,{
         headers:{
           Authorization:`Bearer ${accessToken}`
         }
       })
       setMessages(messages.data)
       return messages.data
     }
     getMessageConversation()
   },[id])
  return {messages,setMessages}
}

export default useGetMessageConversation