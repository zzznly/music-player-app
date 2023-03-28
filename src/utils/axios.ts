import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const accessToken: string =
  "BQB3G1A-pIxWpm4hmqdnstHbOs-7Il4TGOX1SdjnZeBy3-KC0fAPDsoTzcwinEhyC4xCpHjYEhKb6tc4JBfWSnqU5giyhqqlzR6OwuDHmtsLEkG0aEJpmboclLNULsRb2ReO_2v4OrwJWzL4AvrjryMdJI3kZCRcEJEagzp3AiZt7UGvnpOk3e2jmigXKJNHsjEdKnt_EFO1ay2yCYWX_CLo-tBGVcxUTblkzSz4ErF0iSOMezavUs13t3pMyJWTl22T";

const instance: AxiosRequestConfig = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const axios: AxiosInstance = Axios.create(instance);

export default axios;
