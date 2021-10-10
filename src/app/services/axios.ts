import Axios from "axios"
import ENV from "@config/env";


const instance = Axios.create({
  baseURL: ENV.API_BASE_URL,
});

instance.interceptors.response.use(
  res => {
    console.log("API Call Success.");
    console.log(res.data);
    return res;
  },
  err => {
    console.log("API Call Failed.");
    console.log(err.response.data);
    return Promise.reject(err)
  },
);


export default instance;
