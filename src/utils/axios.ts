import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const accessToken: string =
  "BQC4-3STt4bkP2F-7bOaF7-fvkpRuLhyu8mGCn_xGZpXJIoWSlpBtiNmQpPPxV74hIO1jpl1kEgvsDNm4IS7H8IcPscPVCaC05LtGuuEb2gzdF1R0W04M_hBofFf5tKHRatAzYNQDCv0oXzl7azbpG-H_ByIvuvNf5TraXJHHU2tE_-TzRqDuUoR7Pw6rSlhyJ5Xu3lZSNxfLlY2P347mLHy2JoJ8DwkHfLgRN6B2amnRDzgz1UVopqOcpu7J8sl2fr7";
const instance: AxiosRequestConfig = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 3000,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const axios: AxiosInstance = Axios.create(instance);

export default axios;
