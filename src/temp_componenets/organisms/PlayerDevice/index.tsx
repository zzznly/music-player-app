import { useState } from "react";

import {
  useMutationPlayerPause,
  useMutationPlayerStart,
  useMutationSeekPosition,
  useMutationSetRepeat,
  useMutationSkipNext,
  useMutationSkipPrev,
  useMutationToggleShuffle,
} from "@service/Player/usePlayer";

import usePlaying from "@store/playing/usePlaying";
import useSDK from "@store/sdk/useSDK";

import { convertDurationTime } from "@utils/convert";

import usePlayerController from "@hooks/usePlayerController";

import Icon from "temp_componenets/atoms/Icon";

export default function PlayerDevice() {
  const { currentTrack, isPaused, currentPosition, durationMs } = useSDK();

  // states
  const { playingURL } = usePlaying();
  const repeatStateList = ["off", "context", "track"];
  const [repeatStateIdx, setRepeatIdx] = useState(0);
  const [isShuffle, setShuffle] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  // mutations - player controller
  const onPlay = useMutationPlayerStart();
  const onPause = useMutationPlayerPause({
    onSuccess: () => {
      setCurrentProgress(currentPosition);
    },
  });
  const skipNext = useMutationSkipNext();
  const skipPrev = useMutationSkipPrev();
  const setRepeat = useMutationSetRepeat(repeatStateList[repeatStateIdx]);
  const toggleShuffle = useMutationToggleShuffle(isShuffle);
  const { mutate: seekPositionMutate } = useMutationSeekPosition(
    currentProgress,
    {
      onSuccess: () => {
        setIsSeeking(false);
        !isPaused && setCurrentProgress(0);
      },
      enabled: isSeeking,
    }
  );

  usePlayerController([playingURL], () => {
    onPlay.mutate(0);
  });

  usePlayerController([repeatStateIdx], () => {
    setRepeat.mutate();
    setRepeatIdx(repeatStateIdx % 3);
  });

  usePlayerController([isShuffle], () => {
    toggleShuffle.mutate();
  });

  usePlayerController([currentProgress, isSeeking], () => {
    if (currentProgress && isSeeking) seekPositionMutate();
  });

  const seekToPosition = (e: any) => {
    setCurrentProgress(Number(e.target.value));
    setIsSeeking(true);
  };

  const clickPrev = () => {
    /*
      진행 시간 3초 이상 : 곡의 처음으로 이동
      진행 시간 3초 이하 : 이전곡 이동
    */
    if (currentPosition > 3000) {
      seekPositionMutate();
    } else {
      skipPrev.mutate();
    }
  };

  return (
    <div className="player__device">
      <h2 className="player__header">NOW PLAYING</h2>
      <div className="player__body">
        <div className="player__album">
          <img
            src={
              currentTrack?.album?.images?.[0]?.url ??
              "https://dummyimage.com/200x200/ccc/fff.png"
            }
            alt="track album"
          />
        </div>
        <div className="player__track-info">
          <p className="player__track-name">
            {currentTrack?.name || "No track"}
          </p>
          <p className="player__track-artist">
            {currentTrack?.artists?.[0]?.name || "No Track"}
          </p>
        </div>
        <div className="player__bar">
          <input
            className="player__progress"
            name="progress"
            type="range"
            min={0}
            max={durationMs}
            value={currentPosition}
            onChange={seekToPosition}
            step={1000}
          />
          <div className="player__time">
            <div className="player__current-time">
              {convertDurationTime(currentPosition)}
            </div>
            <div className="player__duration">
              {convertDurationTime(durationMs)}
            </div>
          </div>
        </div>
        <div className="player__controller">
          <div className="player__controller-left">
            <button
              className="player__shuffle"
              onClick={() => setShuffle(!isShuffle)}
            >
              <Icon
                category="player"
                name={isShuffle ? "shuffle-active" : "shuffle"}
              />
            </button>
            <button className="player__skip-prev" onClick={clickPrev}>
              <Icon category="player" name="prev" />
            </button>
          </div>
          <button
            className="player__playpause"
            onClick={() =>
              isPaused ? onPlay.mutate(currentProgress) : onPause.mutate()
            }
          >
            <Icon category="player" name={isPaused ? "play" : "pause"} />
          </button>
          <div className="player__controller-right">
            <button
              className="player__skip-next"
              onClick={() => skipNext.mutate()}
            >
              <Icon category="player" name="next" />
            </button>
            <button
              className="player__repeat"
              onClick={() => setRepeatIdx(prev => prev + 1)}
            >
              <Icon
                category="player"
                name={`repeat-${
                  {
                    0: "off",
                    1: "context",
                    2: "track",
                  }[repeatStateIdx] || "off"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* <div className="player__footer">
        <div className="player__volume">
          <input className="player__volume-input" type="range" />
        </div>
      </div> */}
    </div>
  );
}
