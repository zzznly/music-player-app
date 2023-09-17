import Service from "../Service";
import axios, { AxiosInstance, AxiosResponse } from "axios";

class AuthService {
  refreshToken() {
    return axios.post(
      "https://accounts.spotify.com/api/token",
      { grant_type: "client_credentials" },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "9b8af0c052d94854acf5ccdbcf39b2d2",
          password: "c32a305ff8db4d0892f5ee63e0703752",
        },
      }
    );
  }

  logout() {
    return axios.post("https://accounts.spotify.com/api/logout");
  }
}

export default new AuthService();
