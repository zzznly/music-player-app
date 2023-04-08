// axios
import axios, { AxiosInstance, AxiosResponse } from "axios";

// router
import { useNavigate, useLocation } from "react-router-dom";
import { getToken, getSpotifyAuthUrl, removeAuthToken } from "../utils/auth";

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

  static handleRequest(request: any) {
    const accessToken = getToken();

    if (!accessToken) {
      window.location.replace(getSpotifyAuthUrl());
    }

    request.headers.Authorization = "Bearer " + accessToken;
    return request;
  }

  static handleRequestError(error: any) {
    return Promise.reject(error);
  }

  static handleResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  static handleResponseError(error: any) {
    switch (error.response.status) {
      case 404:
        window.location.replace("/404");
        break;
      case 401:
        removeAuthToken();
        window.location.replace(getSpotifyAuthUrl());
        break;
      default:
        return Promise.reject(error);
    }
  }

  // handleRedirect() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   const accessToken = new URLSearchParams(this.location.hash.slice(1)).get(
  //     "access_token"
  //   );
  //   if (accessToken) {
  //     localStorage.setItem("access_token", accessToken);
  //     this.navigate("/");
  //   }
  // }
}
