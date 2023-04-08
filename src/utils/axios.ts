import Axios, { AxiosInstance } from "axios";

const accessToken: string =
  "BQAScNzVhVXTpiID97uPFQIMtbhOgKxcZtSDtPnR1RA0gFDYUS5UNwjVQyuRhBLTtwqHDE3rSWYeSb97W_uimZQgNvNTywT1WZJhMQM7MgcD9yDlGneS_4OtNpc1Pr1QoeUUInMAZwaluWtk0Bvbjz--nl8anpdKU8ZdOeqy5tPYdHLlALKqRoEbxw48gygqE7QdpAzOl9dqCPp7HRbAznjEI-wPR9t8zZSLpcUddS2K-Sqh4KPINMfkMiiMCbrOsd7t";

const instance: AxiosInstance = Axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

export default instance;
