import { useEffect } from "react";
import { saveTokenInfo } from "@utils/auth";

export default function useSpotifyAuth() {
  useEffect(() => {
    saveTokenInfo();
  }, []);

  return {};
}
