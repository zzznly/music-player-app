import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const accessToken: string =
  "BQAl4l3j1i5q_zMZdJWNragYzeep0b5Nh6_0NBypj0MlhEP_fJp3j7dkt_YsweFq37dnR1EYrfZcGE8kG-3o9udCr2Q_I6p6cZd4J2X03BxdpdzRZUjNVQoz8XwKVOoJ5BwxE-Q9l9CLwMUTcZD9aNAOMGcdlt7O-YPkBxhPRu_kswcIePNMVIh3LuMl_v3X-z0lXh-oG-Tjb1X4AFsnp1A9IWTCT_9JGn1A0qiLJTTjzc7SKaJkWKMqDlQx0wtPUfe-";

const instance: AxiosRequestConfig = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const axios: AxiosInstance = Axios.create(instance);

export default axios;
