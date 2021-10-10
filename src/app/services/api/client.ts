import Axios from "../axios";
import { APIClient } from "@d/axios";


const Client: APIClient = (method, url, data, config = {}) => Axios({
  method, url, data, ...config,
});


export default Client;
