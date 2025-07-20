import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json', //gui du lieu dang json
    },
});

export default axiosClient;
