import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { url } from "./apiRequest/url";
const useRepairmanFinderCancelBooking  = (
    booking_id: string,
    token:string,
    onStatusChanged: () => void
  ) => {
    const fetchCancelBooking = async () => {
      const response = await axios.put(
        `${url}/booking//cancelService/${booking_id}`,{},
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      );
      onStatusChanged();
    };
    fetchCancelBooking();
}

export default useRepairmanFinderCancelBooking