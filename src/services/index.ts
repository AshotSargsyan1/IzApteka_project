import axios from "axios";


export const server = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 2000
})