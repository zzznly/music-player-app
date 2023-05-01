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

  //   authURL = "https://accounts.spotify.com/authorize";
  //   clientId = "9b8af0c052d94854acf5ccdbcf39b2d2";
  //   redirectUri = "http://localhost:5005";
  //   scopes = [
  //     "user-read-currently-playing",
  //     "user-read-recently-played",
  //     "user-read-playback-state",
  //     "user-top-read",
  //     "user-modify-playback-state",
  //   ];
  //   accessUrl = `${this.authURL}?client_id=${this.clientId}&redirect_uri=${
  //     this.redirectUri
  //   }&scope=${this.scopes.join("%20")}&response_type=token&show_dialog=true`;
  //   async getAccessToken() {
  //     return await axios.get(this.authURL);
  //   }
}

export default new AuthService();
