import axios from "axios"
import { url } from "./apiRequest/url"
const sendResendVerificationCode = async(data:any) => {
    const response=await axios.post(url+"/auth/reSendVerificationCode",data)
    return response.data
}
export default sendResendVerificationCode;