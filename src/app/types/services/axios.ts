import { AxiosRequestConfig, AxiosPromise, Method } from "axios";


export type APIClient = <RequestPayloadType = any, ResponseBodyType = any>(
  method: Method,
  url: string,
  data?: RequestPayloadType,
  config?: AxiosRequestConfig,
) => AxiosPromise<ResponseBodyType>;
