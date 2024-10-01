import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3000/v1',
    withCredentials: true,
});

instance.interceptors.request.use((config: any) => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;

}, (err) => Promise.reject(err)
);


export default instance;