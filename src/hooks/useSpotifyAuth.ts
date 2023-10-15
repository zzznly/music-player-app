import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { saveTokenParams } from "@utils/auth";
import axios from "axios";

export default function useSpotifyAuth(code: string | null) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState<number>();

  useLayoutEffect(() => {
    axios
      .post("/auth/callback", {
        code,
      })
      .then(res => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, "", "/");
      })
      .catch(err => {
        console.log(err);
        // window.location = "/" as string & Location;
      });
  }, [code]);

  // const navigate = useNavigate();
  // useLayoutEffect(() => {
  //   const tokenString = window.location.hash.substring(1);
  //   if (!tokenString) return;
  //   saveTokenParams(new URLSearchParams(tokenString));
  //   navigate("/");
  // }, []);
  // return {};
}
