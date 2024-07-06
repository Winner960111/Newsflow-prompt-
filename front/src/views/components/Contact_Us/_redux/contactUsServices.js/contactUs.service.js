import axios from "axios"
import { apiUrl } from "../../../../../config"
const sendEmailToClient=async (values,onSuccess)=>{
const res= await axios.post(`${apiUrl}/api/v1//getContactDetails`,values)

onSuccess(res?.data?.message)
}
export {sendEmailToClient}