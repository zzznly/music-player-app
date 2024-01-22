import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getToken } from "../utils/auth";

export default class Service {
  service: AxiosInstance;

  constructor({ baseURL = "https://api.spotify.com/v1/" } = {}) {
    this.service = axios.create({
      baseURL,
    });

    this.service.interceptors.request.use(
      Service.handleRequest,
      Service.handleRequestError
    );

    this.service.interceptors.response.use(
      Service.handleResponse,
      Service.handleResponseError
    );
  }

  static async handleRequest(request: any) {
    const accessToken = getToken();
    console.log(accessToken);
    accessToken && (request.headers.Authorization = "Bearer " + accessToken);
    return request;
  }

  static handleRequestError(error: any) {
    return Promise.reject(error);
  }

  static handleResponse<T>(response: AxiosResponse<T>) {
    // TODO: error 공통처리 (try/catch)
    return response.data;
  }

  static handleResponseError(error: any) {
    switch (error.response.status) {
      case 404:
        window.location.replace("/404");
        break;
      case 401:
        window.location.replace("/login");
        break;
      case 403: // 클라이언트에서 유효한 URL에 액세스하는 것이 금지됨 -> 계정이 Developer에 등록되지 않음
        window.location.replace("/login");
        break;
      default:
        return Promise.reject(error);
    }
  }
}
