export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const saveTokenParams = (params: URLSearchParams) => {
  localStorage.setItem("access_token", params.get("access_token") ?? "");
  localStorage.setItem("expires_in", params.get("expires_in") ?? "");
  localStorage.setItem("token_type", params.get("token_type") ?? "");
};
