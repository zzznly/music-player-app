import "./style.scss";

import { useEffect, useRef, useState } from "react";
import { getToken } from "@utils/auth";
import {
  useCurrentPlaylist,
  useMutationAddCurrentPlaylist,
  useMutationPlayerPause,
  useMutationPlayerStart,
  useMutationSeekPosition,
  useMutationSetRepeat,
  useMutationSkipNext,
  useMutationSkipPrev,
  useMutationToggleShuffle,
  usePlaybackState,
} from "@service/Player/usePlayer";
import { useAtom, useAtomValue } from "jotai";
// import { spotifyUri } from "@store/playing/PlayerAtom_";
import { convertDurationTime } from "@utils/convert";
import { UseMutationResult, useQueryClient } from "@tanstack/react-query";
import usePlaying from "@store/playing/usePlaying";
// controller icons
import playIcon from "@assets/images/icon/player/ico-play.png";
import playlistPlayIcon from "@assets/images/icon/ico-playlist-play.svg";
import pauseIcon from "@assets/images/icon/player/ico-pause.svg";
import prevIcon from "@assets/images/icon/player/ico-prev.svg";
import nextIcon from "@assets/images/icon/player/ico-next.svg";
import shuffleIcon from "@assets/images/icon/player/ico-shuffle.svg";
import shuffleActiveIcon from "@assets/images/icon/player/ico-shuffle-active.svg";
import repeatOffIcon from "@assets/images/icon/player/ico-repeat-track.svg";
import repeatContextIcon from "@assets/images/icon/player/ico-repeat-context.svg";
import repeatTrackIcon from "@assets/images/icon/player/ico-repeat-off.svg";
import likeIcon from "@assets/images/icon/ico-like-default.png";
import likeIconActive from "@assets/images/icon/ico-like-active.png";

// rc-slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useCommon } from "@store/common/useCommon";
import useSDK from "@store/sdk/useSDK";

export default function Player() {
  const {
    currentTrack: current_track,
    isPaused: is_paused,
    deviceId,
    currentPosition: current_position,
    durationMs: duration_ms,
  } = useSDK();
  // queries
  const { data: { progress_ms } = {} } = usePlaybackState();
  const { data: { currently_playing = {}, queue = [] } = {} } =
    useCurrentPlaylist();

  // states
  const { playingURL, setPlayingURL, urlCategory } = usePlaying();
  const repeatStateList = ["off", "context", "track"];
  const [repeatStateIdx, setRepeatIdx] = useState<number>(0);
  const [isShuffle, setShuffle] = useState<boolean>(false);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const { isLoading } = useCommon();

  // mutations - player controller
  const onPlay = useMutationPlayerStart();
  const onPause = useMutationPlayerPause({
    onSuccess: () => {
      setCurrentProgress(current_position);
    },
  });
  const skipNext = useMutationSkipNext();
  const skipPrev = useMutationSkipPrev();
  const setRepeat = useMutationSetRepeat(repeatStateList[repeatStateIdx]);
  const toggleShuffle = useMutationToggleShuffle(isShuffle);
  const {
    // isIdle: isSeekPositionIdle,
    // isLoading: isSeekPositionLoading,
    // isSuccess: isSeekPositionSuccess,
    mutate: seekPositionMutate,
  } = useMutationSeekPosition(currentProgress, {
    onSuccess: () => {
      setIsSeeking(false);
      !is_paused && setCurrentProgress(0);
    },
    enabled: isSeeking,
  });

  const addCurrentQueue = useMutationAddCurrentPlaylist();
  // useEffect(() => {
  //   setLoading(onPlayLoading);
  // }, [onPlayLoading]);

  /* TODO: 커스텀훅 만들까 말까... */
  // const usePlayerController = (
  //   device_id: string,
  //   dependancies: any[],
  //   mutation: UseMutationResult
  // ) => {
  //   useEffect(() => {
  //     if (device_id.length) {
  //       mutation.mutate({});
  //     }
  //   }, dependencies);
  //   return mutation;
  // };

  useEffect(() => {
    if (!deviceId) return;
    onPlay.mutate(currentProgress);
    urlCategory === "track" && addCurrentQueue.mutate();
  }, [playingURL]);

  useEffect(() => {
    if (deviceId?.length) {
      onPlay.mutate(currentProgress);
    }
  }, [playingURL]);

  useEffect(() => {
    if (deviceId?.length) console.log(123, deviceId);
  }, [deviceId]);

  useEffect(() => {
    if (deviceId?.length) {
      setRepeat.mutate();
    }
    setRepeatIdx(repeatStateIdx % 3);
  }, [repeatStateIdx]);

  useEffect(() => {
    if (deviceId?.length) {
      toggleShuffle.mutate();
    }
  }, [isShuffle]);

  useEffect(() => {
    if (deviceId?.length) {
      if (currentProgress > 0 && isSeeking) seekPositionMutate();
    }
  }, [currentProgress, isSeeking]);

  const seekToPosition = (e: any) => {
    setCurrentProgress(Number(e.target.value));
    setIsSeeking(true); // TODO: local state 대신 server state 활용할수 없을까? (react-query)
  };

  const clickPrev = () => {
    /*
      진행 시간 3초 이상 : 곡의 처음으로 이동
      진행 시간 3초 이하 : 이전곡 이동
    */
    if (current_position > 3000) {
      seekPositionMutate();
    } else {
      skipPrev.mutate();
    }
  };

  const toggleLike = () => {};

  return (
    <>
      <div className="player">
        <div className="player__list">
          <h2 className="player__list-title">NOW PLAYING</h2>
          <ul className="player__list-tracks">
            {currently_playing && (
              <div className="player__current">
                <li
                  className={`player__track`}
                  onClick={() =>
                    setPlayingURL(prevUri => {
                      if (prevUri !== currently_playing?.uri) {
                        return currently_playing?.uri;
                      } else {
                        setCurrentProgress(0);
                      }
                    })
                  }
                  // key={`track-${idx}`}
                >
                  <div className="player__track-index">
                    <img src={playlistPlayIcon} />
                  </div>
                  <div className="player__track-album">
                    <img
                      className="player__track-album-image"
                      src={
                        current_track?.album?.images?.[0]?.url ??
                        "https://dummyimage.com/200x200/ccc/fff.png"
                      }
                    />
                  </div>
                  <div className="player__track-info">
                    <p className="player__track-name">{current_track?.name}</p>
                    <p className="player__track-artist">
                      {current_track?.artists?.[0]?.name}
                    </p>
                  </div>
                  <div className="player__track-runtime">
                    {convertDurationTime(current_track?.duration_ms)}
                  </div>
                </li>
              </div>
            )}
            <div className="player__queue">
              {queue
                ?.map((v: any, i: number, self: any[]) => {
                  return self.findIndex((obj: any) => obj.uri === v.uri) === i
                    ? v
                    : null;
                })
                .filter((item: any) => item !== null)
                .map(
                  (
                    { uri, album, artists, name, duration_ms }: any,
                    idx: number
                  ) => (
                    <li
                      className="player__track"
                      onClick={() => setPlayingURL(uri)}
                      key={`track-${idx}`}
                    >
                      <div className="player__track-index">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="player__track-album">
                        <img
                          className="player__track-album-image"
                          src={
                            album?.images?.[0]?.url ??
                            "https://dummyimage.com/200x120/ccc/fff.png"
                          }
                        />
                      </div>
                      <div className="player__track-info">
                        <p className="player__track-name">{name}</p>
                        <p className="player__track-artist">
                          {artists?.[0]?.name}
                        </p>
                      </div>
                      <div className="player__track-runtime">
                        {convertDurationTime(duration_ms)}
                      </div>
                    </li>
                  )
                )}
            </div>
          </ul>
        </div>
        <div className="player__container">
          <h2 className="player__header">NOW PLAYING</h2>
          <div className="player__body">
            <div className="player__album">
              <img
                src={
                  current_track?.album?.images?.[0]?.url ??
                  "https://dummyimage.com/200x200/ccc/fff.png"
                }
                alt="track album"
              />
            </div>
            <div className="player__track-info">
              <p className="player__track-name">
                {current_track?.name || "No track"}
              </p>
              <p className="player__track-artist">
                {current_track?.artists?.[0]?.name || "No Track"}
              </p>
            </div>
            <div className="player__bar">
              <input
                className="player__progress"
                name="progress"
                type="range"
                min={0}
                max={duration_ms}
                value={current_position}
                onChange={seekToPosition}
                step={1000}
              />
              {/* <Slider
              railStyle={{ backgroundColor: "#b4b4f8", height: 3 }}
              trackStyle={{ backgroundColor: "#4343ef", height: 3 }}
              handleStyle={{
                borderColor: "#4343ef",
                width: 12,
                height: 12,
                marginLeft: 0,
                marginTop: -5,
                backgroundColor: "#4343ef",
              }}
              min={0}
              max={duration_ms}
              step={1000}
              onChange={seekToPosition}
              value={current_position}
            /> */}
              <div className="player__time">
                <div className="player__current-time">
                  {convertDurationTime(current_position)}
                </div>
                <div className="player__duration">
                  {convertDurationTime(duration_ms)}
                </div>
              </div>
            </div>
            <div className="player__controller">
              <div className="player__controller-left">
                <button
                  className="player__shuffle"
                  onClick={() => setShuffle(!isShuffle)}
                >
                  <img
                    src={isShuffle ? shuffleActiveIcon : shuffleIcon}
                    alt="shuffle"
                  />
                </button>
                <button className="player__skip-prev" onClick={clickPrev}>
                  <img src={prevIcon} alt="skip prev" />
                </button>
              </div>
              <button
                className="player__playpause"
                onClick={() =>
                  is_paused ? onPlay.mutate(currentProgress) : onPause.mutate()
                }
              >
                <img
                  className={`icon ${is_paused ? "icon--play" : "icon--pause"}`}
                  src={is_paused ? playIcon : pauseIcon}
                  alt="play or pause"
                />
              </button>
              <div className="player__controller-right">
                <button
                  className="player__skip-next"
                  onClick={() => skipNext.mutate()}
                >
                  <img src={nextIcon} alt="skip next" />
                </button>
                <button
                  className="player__repeat"
                  onClick={() => setRepeatIdx(prev => prev + 1)}
                >
                  <img
                    src={
                      {
                        0: repeatOffIcon,
                        1: repeatContextIcon,
                        2: repeatTrackIcon,
                      }[repeatStateIdx]
                    }
                    alt="repeat"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="player__footer">
            <div className="player__volume">
              <input className="player__volume-input" type="range" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
