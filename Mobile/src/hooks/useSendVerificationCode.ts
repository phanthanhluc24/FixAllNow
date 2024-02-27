import axios from "axios"
import { url } from "./apiRequest/url"
const useSendVerificationCode = async(data:any) => {
    const response=await axios.post(url+"/auth/verificationCode",data)
    return response.data
}
export default useSendVerificationCode;


