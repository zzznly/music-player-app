import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const accessToken: string =
  "BQAHkw3Ol4JrMlvWHFvCi_YBFDnlrSOo2z4hNmayfTtBdWywugPXbUgYfMfyLUJ3fNDoGmxmK2yzh7-mm3F94UAdbmJf75O5_NkKxQM5YpNd_BoWD-p7KYHZUUSm4NpOTXKUXLXGxEzfgJHaBUN158KogEhW2b7fvFdpLSeORJd8aFnKBHvxxW3Q6kvM9UUO-z6zqhcyG9Ohqd9nU6SVwBNzoKO602zsKE7V8lgus3Pcg1ADrvZyuoYiu7dr7f8BRFo4";

const instance: AxiosRequestConfig = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const axios: AxiosInstance = Axios.create(instance);

export default axios;
