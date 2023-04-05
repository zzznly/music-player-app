import axios from "axios";
import Service from "../Service";

class RefreshTokenService extends Service {
  async getRefreshToken() {
    if (!localStorage.getItem("refresh_token"))
      return Promise.reject("토큰이 없습니다");

    const res = await axios.post(
      "refresh",
      {
        refresh_token: localStorage.getItem("refresh_token"),
      },
      {
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
      }
    );
    return res;
  }
}

export default new RefreshTokenService();
