export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const saveTokenParams = (params: URLSearchParams) => {
  localStorage.setItem("access_token", params.get("access_token") ?? "");
  localStorage.setItem("expires_in", params.get("expires_in") ?? "");
  localStorage.setItem("token_type", params.get("token_type") ?? "");
};

export const removeAuthToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
  localStorage.removeItem("token_type");
};

export const getSpotifyAuthUrl = () => {
  const params = {
    response_type: "token",
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    scope: [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
      "streaming",
      "user-read-email",
      "user-read-private",
    ].join("%20"),
    show_dialog: "true",
  };

  return `${process.env.REACT_APP_AUTHORIZE_URL}?${new URLSearchParams(
    params
  ).toString()}`;
};

export const generateRandomString = (num: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const handleAuth = () => {
  const state = generateRandomString(16);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";
  const params = new URLSearchParams({
    response_type: "code",
    client_id: "72ce168f7a5940c6a71cdb3a00784b5e",
    scope: scope,
    redirect_uri: "http://localhost:5005/auth/callback",
    state: state,
  });
  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
  window.location.href = authUrl;
};