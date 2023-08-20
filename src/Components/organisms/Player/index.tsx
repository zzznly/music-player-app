import "./style.scss";

// controller icons
import playIcon from "@assets/images/icon/ico-play.png";
import pauseIcon from "@assets/images/icon/ico-pause.png";
import prevIcon from "@assets/images/icon/ico-prev.svg";
import nextIcon from "@assets/images/icon/ico-next.svg";
import shuffleIcon from "@assets/images/icon/ico-shuffle.svg";
import repeatIcon from "@assets/images/icon/ico-repeat.svg";
import { useEffect, useState } from "react";
import { getToken } from "@utils/auth";
import {
  useCurrentPlayingTrack,
  useMutationPlayerPause,
  useMutationPlayerStart,
  useMutationSkipNext,
  useMutationSkipPrev,
  usePlaybackState,
} from "@service/Player/usePlayer";
import axios from "axios";

export default function Player({
  current_track,
  is_paused,
  device_id,
  spotifyUris,
}: any): JSX.Element {
  // 플레이어 컨트롤러
  const onPlay = useMutationPlayerStart(device_id, spotifyUris);
  const onPause = useMutationPlayerPause(device_id);
  const skipNext = useMutationSkipNext(device_id);
  const skipPrev = useMutationSkipPrev(device_id);

  const { data: { is_playing = false, item = {}, progress_ms = 0 } = {} } =
    useCurrentPlayingTrack({});
  console.log("is_playing", is_playing, progress_ms, current_track);

  return (
    <div className="layout__player">
      <div className="layout__player__list">
        <h2 className="layout__player__list-title">NOW PLAYING</h2>
        <ul className="layout__player__list-tracks">
          <li className="layout__player__track layout__player__track--active">
            <div className="layout__player__track-index">01</div>
            <div className="layout__player__track-album">
              <img
                className="layout__player__track-album-image"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F658%2F2023%2F07%2F25%2F0000047479_001_20230725030416726.jpg&type=sc960_832"
              />
            </div>
            <div className="layout__player__track-info">
              <p className="layout__player__track-name">Cool With You</p>
              <p className="layout__player__track-artist">New Jeans</p>
            </div>
            <div className="layout__player__track-runtime">02:27</div>
          </li>
          <li className="layout__player__track">
            <div className="layout__player__track-index">02</div>
            <div className="layout__player__track-album">
              <img
                className="layout__player__track-album-image"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F658%2F2023%2F07%2F25%2F0000047479_001_20230725030416726.jpg&type=sc960_832"
              />
            </div>
            <div className="layout__player__track-info">
              <p className="layout__player__track-name">ETA</p>
              <p className="layout__player__track-artist">New Jeans</p>
            </div>
            <div className="layout__player__track-runtime">02:27</div>
          </li>
          <li className="layout__player__track">
            <div className="layout__player__track-index">03</div>
            <div className="layout__player__track-album">
              <img
                className="layout__player__track-album-image"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F658%2F2023%2F07%2F25%2F0000047479_001_20230725030416726.jpg&type=sc960_832"
              />
            </div>
            <div className="layout__player__track-info">
              <p className="layout__player__track-name">Super Shy</p>
              <p className="layout__player__track-artist">New Jeans</p>
            </div>
            <div className="layout__player__track-runtime">02:34</div>
          </li>
        </ul>
      </div>

      <div className="layout__player__container">
        <h2 className="layout__player__container-title">NOW PLAYING</h2>
        <div className="layout__player__container-album">
          <img
            src={
              current_track?.album?.images[0].url ??
              "https://dummyimage.com/200x120/ccc/fff.png"
            }
            alt="track album"
          />
        </div>
        <div className="layout__player__container-song-info">
          <p className="layout__player__container-song-name">
            {item?.name || "No track"}
          </p>
          <p className="layout__player__container-song-artist">
            {item?.artists?.[0]?.name || "No Track"}
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
  );
}
