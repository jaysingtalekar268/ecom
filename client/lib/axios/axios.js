import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
})

axiosInstance.defaults.headers.common["Content-Type"]="application/json"

export default axiosInstance;