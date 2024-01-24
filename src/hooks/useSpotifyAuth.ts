import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import { saveTokenParams } from "@utils/auth";

export default function useSpotifyAuth() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const tokenString = window.location.hash.substring(1);
    if (!tokenString) return;
    const params = new URLSearchParams(tokenString);
    saveTokenParams(params);

    navigate("/");
  }, []);
}
