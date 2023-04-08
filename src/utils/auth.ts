export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const saveTokenInfo = () => {
  if (!window.location.hash) return;

  const params = new URLSearchParams(window.location.hash.substring(1));
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
    client_id: "9b8af0c052d94854acf5ccdbcf39b2d2",
    redirect_uri: "http://localhost:5005",
    scope: [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
    ].join("%20"),
    show_dialog: "true",
  };

  return `https://accounts.spotify.com/authorize?${new URLSearchParams(
    params
  ).toString()}`;
};
