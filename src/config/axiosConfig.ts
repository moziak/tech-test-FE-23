import axios from "axios";
import { apiBaseUrl } from "./appConfig";

const AxiosInstance = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: false,
  });
  
  AxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if(error?.response?.status === 401) {
        const event = new Event('ClearAuth');
        window.dispatchEvent(event);
        await new Promise((resolve) => setTimeout(resolve, 20000));
        return;
      }
      return Promise.reject(error);
    }
  );
  
  export default AxiosInstance;