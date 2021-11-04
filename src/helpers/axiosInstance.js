import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
let headers = {};
const axiosInstance = axios.create({
  baseURL: 'https://monily-app.herokuapp.com/users',
  headers,
});
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return console.log(error);
  },
);
export default axiosInstance;


