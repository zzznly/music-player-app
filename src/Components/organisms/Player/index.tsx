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
  useMutationPlayerStart,
  usePlaybackState,
} from "@service/Player/usePlayer";
import axios from "axios";

export default function Player(props: any): JSX.Element {
  const [player, setPlayer] = useState(undefined);
  const [device_id, setDeviceId] = useState<string>("");
  const [playerReady, setReady] = useState<boolean>(false);
  const [currentTrack, setTrack] = useState({});
  const [paused, setPaused] = useState(false);
  const [position, setPosition] = useState("");

  const { current_track, current_position, is_paused, onPlay } = props.data;

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
          <img src="" />
        </div>
        <div className="layout__player__container-song-info">
          <p className="layout__player__container-song-name">Dynamite</p>
          <p className="layout__player__container-song-artist">BTS</p>
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
            <img src={shuffleIcon} />
            <img src={prevIcon} />
          </div>
          <button
            className="layout__player__controller-playpause"
            // onClick={onPlay("spotify:track:6rdkCkjk6D12xRpdMXy0I2", true)}
          >
            <img
              className={true ? "icon--play" : "icon--pause"}
              src={true ? playIcon : pauseIcon}
            />
          </button>
          <div className="layout__player__controller-right">
            <img src={nextIcon} />
            <img src={repeatIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
