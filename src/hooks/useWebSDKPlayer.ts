// utils
import { useEffect } from "react";
import { getToken } from "@utils/auth";
import useSDK from "@store/sdk/useSDK";
import useAuth from "@store/auth/useAuth";

export default function useWebSDKPlayer() {
  const { token, setToken } = useAuth();
  const { setDeviceId, setDurationMs, setTrack, setPosition, setPaused } =
    useSDK();

  useEffect(() => {
    const tokenString = getToken();
    setToken(tokenString ?? "");
  }, []);

  // 플레이어 생성
  useEffect(() => {
    if (!token) return;
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      const playerInstance = new (window as any).Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(token?.replace(/\"/g, ""));
        },
        volume: 0.5,
      });

      playerInstance.addListener("ready", (event: { device_id: string }) => {
        console.log("Ready with Device ID", event.device_id);
        setDeviceId(event.device_id);
      });

      playerInstance.addListener("progress", (state: any) => {
        setPosition(state.position);
      });

      playerInstance.addListener(
        "not_ready",
        (event: { device_id: string }) => {
          console.log("Device ID has gone offline", event.device_id);
          setDeviceId("");
        }
      );

      playerInstance.addListener("player_state_changed", (state: any) => {
        if (!state) return;
        setTrack(state?.track_window.current_track);
        setPaused(state?.paused);
        setDurationMs(state?.duration);
        console.log("state changed", state);
      });

      playerInstance.connect().then((res: boolean) => {
        console.log("player connected", res);
      });
    };
  }, [token]);
}
