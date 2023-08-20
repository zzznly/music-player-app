// styles
import "./style.scss";

// components
import NavBar from "../../organisms/NavBar";
import Header from "../../organisms/Header";
import Player from "@components/organisms/Player";

// router
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// utils
import { getToken } from "@utils/auth";

// service
import PlayerService from "@service/Player/PlayerService";
import {
  useCurrentPlayingTrack,
  useMutationPlayerStart,
} from "@service/Player/usePlayer";

export default function MainLayout(): JSX.Element {
  const [current_track, setTrack] = useState({});
  const [current_position, setPosition] = useState(0);
  const [is_paused, setPaused] = useState(true);

  const [token] = useState<string>(getToken() ?? "");
  const [player, setPlayer] = useState({});
  const [device_id, setDeviceId] = useState<string>("");
  const [readyState, setReady] = useState<boolean>(false);

  // 플레이어 생성
  useEffect(() => {
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

      console.log("player instance", playerInstance);

      setPlayer(playerInstance);

      playerInstance.addListener("ready", (event: { device_id: string }) => {
        setDeviceId(event.device_id);
        setReady(true);
        console.log("Ready with Device ID", event.device_id);
      });

      playerInstance.addListener(
        "not_ready",
        (event: { device_id: string }) => {
          console.log("Device ID has gone offline", event.device_id);
          // setDeviceId(event.device_id);
        }
      );

      playerInstance.addListener("player_state_changed", (state: any) => {
        if (!state) {
          return;
        }
        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        console.log("state changed", state);
      });

      playerInstance.connect().then((res: boolean) => {
        console.log("player connected", res);
      });
    };
  }, [token]);

  const [spotifyUris, setUris] = useState<string[]>([
    "spotify:track:2pIUpMhHL6L9Z5lnKxJJr9",
    "spotify:track:6rdkCkjk6D12xRpdMXy0I2",
    "spotify:track:0a4MMyCrzT0En247IhqZbD",
    "spotify:track:56v8WEnGzLByGsDAXDiv4d",
    "spotify:track:5702raF31K9rvD6KZ6sCTo",
  ]);

  useEffect(() => {
    console.log("current_track", current_track);
    console.log("is_paused", is_paused);
  }, [current_track, is_paused]);

  return (
    <div className="layout layout--row">
      <NavBar />
      <div className="layout__content">
        <Header />
        <div className="layout__content-main">
          <Outlet />
        </div>
      </div>
      {current_track && (
        <Player
          {...{
            current_track,
            is_paused,
            device_id,
            spotifyUris,
          }}
        />
      )}
    </div>
  );
}
