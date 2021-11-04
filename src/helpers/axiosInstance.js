import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"
// Request interceptor for API calls
let headers = {};
const axiosInstance = axios.create({
  baseURL: "https://monily-app.herokuapp.com/users",
  headers,
});
axiosInstance.interceptors.request.use(
  async(config) => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axiosInstance;
