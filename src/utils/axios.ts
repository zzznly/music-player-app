import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const accessToken: string =
  "BQCredCXsALU6F1WuI0snYJNsM3dl8beePkrX6jLDoD7gVPnSkZTbVdq5k-tGlnGNxb7EjnnOeBTJgTTrfowJ0kXq_yGJ48IvbaqFsW9RvbbbX7PPZDzviioflgRzHIyEhpxiAfqOLU7fzh2mPosznarR2pmb-TLIyERLromQ-SUy_CcQxHQhP8DHXz9CDRFd4DDRWFHbFzwWmTiNNFF78DD9DiNuIG15pwddA0J_6P1PJ1RJpiuAsdb0HeDfHXt_AUF";
const instance: AxiosRequestConfig = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 3000,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const axios: AxiosInstance = Axios.create(instance);

export default axios;
