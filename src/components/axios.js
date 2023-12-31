import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/"

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access token') ? 'JWT' + localStorage.getItem('access token') : null,
        'Content-Type ': 'application/json',
        Accept: 'application/json',

    }
})

export default axiosInstance