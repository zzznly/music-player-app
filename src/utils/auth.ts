export const getToken = () => {
  return localStorage.getItem("access_token");
};

export const saveTokenParams = (params: URLSearchParams) => {
  localStorage.setItem("access_token", params.get("access_token") ?? "");
  localStorage.setItem("expires_in", params.get("expires_in") ?? "");
  localStorage.setItem("token_type", params.get("token_type") ?? "");
};

// export const removeAuthToken = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("expires_in");
//   localStorage.removeItem("token_type");
// };

// export const getSpotifyAuthUrl = () => {
//   const params = {
//     response_type: "token",
//     client_id: process.env.REACT_APP_CLIENT_ID,
//     redirect_uri: process.env.REACT_APP_REDIRECT_URL,
//     scope: [
//       "user-read-currently-playing",
//       "user-read-recently-played",
//       "user-read-playback-state",
//       "user-top-read",
//       "user-modify-playback-state",
//       "streaming",
//       "user-read-email",
//       "user-read-private",
//     ].join("%20"),
//     show_dialog: "true",
//   };

//   return `${process.env.REACT_APP_AUTHORIZE_URL}?${new URLSearchParams(
//     params
//   ).toString()}`;
// };

// export const redirectToLogin = ({
//   redirect_uri = process.env.REACT_APP_REDIRECT_URL,
//   scope = [
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-read-playback-state",
//     "user-top-read",
//     "user-modify-playback-state",
//     "streaming",
//     "user-read-email",
//     "user-read-private",
//   ],
//   show_dialog = true,
// }: {
//   redirect_uri?: string;
//   scope?: string[];
//   show_dialog?: boolean;
// } = {}) => {
//   window.location.replace(
//     `${process.env.REACT_APP_AUTHORIZE_URL}?${new URLSearchParams({
//       response_type: "token",
//       client_id: process.env.REACT_APP_CLIENT_ID,
//       redirect_uri,
//       scope: scope.join("%20"),
//       show_dialog: String(show_dialog),
//     }).toString()}`
//   );
// };
