import { atom } from "jotai";

export const authUrlAtom = atom<string>(
  `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${
    process.env.REACT_APP_CLIENT_ID
  }&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
  ].join("%20")}&response_type=token&show_dialog=true`
);
