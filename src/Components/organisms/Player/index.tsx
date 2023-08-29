import "./style.scss";

import { useEffect, useState } from "react";
import { getToken } from "@utils/auth";
import {
  useCurrentPlayingTrack,
  useCurrentPlaylist,
  useMutationAddCurrentPlaylist,
  useMutationPlayerPause,
  useMutationPlayerStart,
  useMutationSkipNext,
  useMutationSkipPrev,
  usePlaybackState,
} from "@service/Player/usePlayer";
import { useAtom, useAtomValue } from "jotai";
import { spotifyUri } from "@service/Player/PlayerAtom";
import { convertDurationTime } from "@utils/convert";
import { useQueryClient } from "@tanstack/react-query";

// controller icons
import playIcon from "@assets/images/icon/player/ico-play.png";
import playlistPlayIcon from "@assets/images/icon/ico-playlist-play.svg";
import pauseIcon from "@assets/images/icon/player/ico-pause.svg";
import prevIcon from "@assets/images/icon/player/ico-prev.svg";
import nextIcon from "@assets/images/icon/player/ico-next.svg";
import shuffleIcon from "@assets/images/icon/player/ico-shuffle.svg";
import shuffleActiveIcon from "@assets/images/icon/player/ico-shuffle-active.svg";
import repeatIcon from "@assets/images/icon/player/ico-repeat.svg";
import repeatActiveIcon from "@assets/images/icon/player/ico-repeat-active.svg";

export default function Player({
  current_track,
  is_paused,
  device_id,
}: any): JSX.Element {
  // queries
  const { isLoading, data: { currently_playing, queue } = {} } =
    useCurrentPlaylist({});

  // 재생할 item의 uri (spotify:type:id)
  const [item_uri, setUri] = useAtom(spotifyUri);

  // 플레이어 컨트롤러
  const onPlay = useMutationPlayerStart(device_id, item_uri);
  const onPause = useMutationPlayerPause(device_id);
  const skipNext = useMutationSkipNext(device_id);
  const skipPrev = useMutationSkipPrev(device_id);

  // const addToPlaylist = useMutationAddCurrentPlaylist(device_id, item_uri);

  useEffect(() => {
    if (device_id.length) {
      onPlay.mutate();
    }
  }, [item_uri]);

  return (
    <>
      {/* {isSuccess && ( */}
      <div className="layout__player">
        <div className="layout__player__list">
          <h2 className="layout__player__list-title">NOW PLAYING</h2>
          <ul className="layout__player__list-tracks">
            {currently_playing && (
              <div className="layout__player__current">
                <li
                  className={`layout__player__track ${
                    currently_playing?.id === current_track?.id &&
                    "layout__player__track--active"
                  }`}
                  onClick={() => setUri(currently_playing?.uri)}
                  // key={`track-${idx}`}
                >
                  <div className="layout__player__track-index">
                    <img src={playlistPlayIcon} />
                  </div>
                  <div className="layout__player__track-album">
                    <img
                      className="layout__player__track-album-image"
                      src={
                        current_track?.album?.images?.[0]?.url ??
                        "https://dummyimage.com/200x200/ccc/fff.png"
                      }
                    />
                  </div>
                  <div className="layout__player__track-info">
                    <p className="layout__player__track-name">
                      {current_track?.name}
                    </p>
                    <p className="layout__player__track-artist">
                      {current_track?.artists?.[0]?.name}
                    </p>
                  </div>
                  <div className="layout__player__track-runtime">
                    {convertDurationTime(current_track?.duration_ms)}
                  </div>
                </li>
              </div>
            )}
            <div className="layout__player__queue">
              {queue
                ?.map((v: any, i: number, self: any[]) => {
                  return self.findIndex((obj: any) => obj.uri === v.uri) === i
                    ? v
                    : null;
                })
                .filter((item: any) => item !== null)
                .map(
                  (
                    { id, uri, album, artists, name, duration_ms }: any,
                    idx: number
                  ) => (
                    <li
                      className={`layout__player__track ${
                        // id === current_track.id &&
                        // "layout__player__track--active"
                        ""
                      }`}
                      onClick={() => setUri(uri)}
                      key={`track-${idx}`}
                    >
                      <div className="layout__player__track-index">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="layout__player__track-album">
                        <img
                          className="layout__player__track-album-image"
                          src={
                            album?.images?.[0]?.url ??
                            "https://dummyimage.com/200x120/ccc/fff.png"
                          }
                        />
                      </div>
                      <div className="layout__player__track-info">
                        <p className="layout__player__track-name">{name}</p>
                        <p className="layout__player__track-artist">
                          {artists?.[0]?.name}
                        </p>
                      </div>
                      <div className="layout__player__track-runtime">
                        {convertDurationTime(duration_ms)}
                      </div>
                    </li>
                  )
                )}
            </div>
          </ul>
        </div>
        <div className="layout__player__container">
          <h2 className="layout__player__container-title">NOW PLAYING</h2>
          <div className="layout__player__container-album">
            <img
              src={
                current_track?.album?.images?.[0]?.url ??
                "https://dummyimage.com/200x200/ccc/fff.png"
              }
              alt="track album"
            />
          </div>
          <div className="layout__player__container-song-info">
            <p className="layout__player__container-song-name">
              {current_track?.name || "No track"}
            </p>
            <p className="layout__player__container-song-artist">
              {current_track?.artists?.[0]?.name || "No Track"}
            </p>
          </div>
          <div className="layout__player__bar">
            <div className="layout__player__progress"></div>
            <div className="layout__player__time">
              <div className="layout__player__time-left">2:18</div>
              <div className="layout__player__time-left">4:15</div>
            </div>
          </div>
          <div className="layout__player__controller">
            <div className="layout__player__controller-left">
              <button>
                <img src={shuffleIcon} />
              </button>
              <button onClick={() => skipPrev.mutate()}>
                <img src={prevIcon} />
              </button>
            </div>
            <button
              className="layout__player__controller-playpause"
              onClick={() => (is_paused ? onPlay.mutate() : onPause.mutate())}
            >
              <img
                className={is_paused ? "icon--play" : "icon--pause"}
                src={is_paused ? playIcon : pauseIcon}
              />
            </button>
            <div className="layout__player__controller-right">
              <button onClick={() => skipNext.mutate()}>
                <img src={nextIcon} />
              </button>
              <button>
                <img src={repeatIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
