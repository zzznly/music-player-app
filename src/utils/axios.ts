import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const accessToken: string =
  "BQCQIkd-Q9msPF9nK9qyXFZVs1FsDgHROauiO7DhrLQkNPIA0OEtdyWNWFmsDNTLT14zthEZmFrFQl9USLAFBVv1kIF_UoWHp-F6BEDn33NdQr7tTwxJoAQ_ECMc4yswrxjQJwJJnOx8dK1SlKQdHDdCBN-HDJuoH6g3MoYlwRb3qOTTywMM3kFwP5n1_5-5i0_o3ko4Fg4we_DSBiMFXy8PunTO2BuvdEmQF9nbhMrbLuCj9AVLkmorn-XCqzhsY-pW";

const instance: AxiosRequestConfig = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const axios: AxiosInstance = Axios.create(instance);

export default axios;
