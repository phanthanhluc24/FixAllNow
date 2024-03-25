import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { url } from "./apiRequest/url";
const useRepairmanFinderCancelBooking  = (
    booking_id: string,
    token:string,
    onStatusChanged: () => void
  ) => {
    console.log("booking",booking_id);
    
    const fetchCancelBooking = async () => {
      const response = await axios.put(
        `${url}/booking//cancelService/${booking_id}`,{},
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      );
      console.log(response.data.message);
      
      onStatusChanged();
    };
    fetchCancelBooking();
}

export default useRepairmanFinderCancelBooking