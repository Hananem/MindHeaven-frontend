import axios from "axios"

const request = axios.create({
    baseURL:"https://mindheaven-backend.onrender.com"
})

export default request