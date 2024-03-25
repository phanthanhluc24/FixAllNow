import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "./apiRequest/url"

export const useGetRoomIdChat = (receivedId:any) => {
    console.log("reciewved",receivedId);
    
    const [idRoomChat,setIdRoomChat]=useState("")
    useEffect(()=>{
        const fetGetIdRoomChat=async()=>{
            try {
                const accessToken=await AsyncStorage.getItem("accessToken")
                const response=await axios.get(url+`/chat/${receivedId}`,{
                    headers: { Authorization: `Bearer ${accessToken}` }
                })
                setIdRoomChat(response.data._id)
            } catch (error) {
                console.log(error);
            }
        }
        fetGetIdRoomChat()
    },[receivedId])
    return {idRoomChat}
}
