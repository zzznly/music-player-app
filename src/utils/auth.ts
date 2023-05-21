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

export const redirectToLogin = ({
  redirect_uri = "http://localhost:5005",
  scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ],
  show_dialog = true,
}: {
  redirect_uri?: string;
  scope?: string[];
  show_dialog?: boolean;
} = {}) => {
  window.location.replace(
    `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: "token",
      client_id: "9b8af0c052d94854acf5ccdbcf39b2d2",
      redirect_uri,
      scope: scope.join("%20"),
      show_dialog: String(show_dialog),
    }).toString()}`
  );
};
