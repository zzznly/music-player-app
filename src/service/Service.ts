import axios, { AxiosInstance } from "axios";

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
    const getTokenFromResponse = () => {
      return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial: any = {}, item) => {
          const [key, value] = item.split("=");
          initial[key] = decodeURIComponent(value);

          return initial;
        }, {});
    };
    console.log(getTokenFromResponse());

    const accessToken = localStorage.getItem("access_token");
    if (accessToken) request.headers.Authorization = "Bearer " + accessToken;
    else {
      // https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
      const authURL = "https://accounts.spotify.com/authorize";
      // Replace with your app's client ID, redirect URI and desired scopes
      const clientId = "9b8af0c052d94854acf5ccdbcf39b2d2";
      const redirectUri = "http://localhost:5005/";
      const scopes = [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
      ];

      const accessUrl = `${authURL}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=token&show_dialog=true`;

      window.location.replace(accessUrl);
    }
    return request;
  }

  static handleRequestError(error: any) {
    return Promise.reject(error);
  }

  static handleResponse(response: any) {
    return response.data;
  }

  static handleResponseError(error: any) {
    switch (error.code) {
      case 404:
        window.location.replace("/404");
        break;
      default:
        return Promise.reject(error);
    }
  }
}
