import axios from 'axios'
export const serviceApi = axios.create({
    baseURL : 'http://localhost:8001/users' 
})