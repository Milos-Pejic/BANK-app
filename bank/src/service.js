import axios from 'axios'
import { setHeader } from './auth.service'


const BASE_URL='http://45.32.157.171:8200/api'
export const registerUser=(personal_id)=>{
   return axios.post(`${BASE_URL}/register`,{personal_id})
}

export const postUser=(personal_id)=>axios.post(`${BASE_URL}/login`,{personal_id})

export const getCredit=()=>axios.get(`${BASE_URL}/credit`,{ headers: setHeader() })

export const postCredit=(amount)=>axios.post(`${BASE_URL}/credit`,{amount},{ headers: setHeader() })


