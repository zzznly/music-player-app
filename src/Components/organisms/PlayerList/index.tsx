import PlayerListItem from "@components/molecules/PlayerListItem";
import { useCurrentPlaylist } from "@service/Player/usePlayer";
import usePlaying from "@store/playing/usePlaying";
import { convertDurationTime } from "@utils/convert";
import { useState } from "react";
import playlistPlayIcon from "@assets/images/icon/ico-playlist-play.svg";
import useSDK from "@store/sdk/useSDK";

export default function PlayerList() {
  const { playingURL, setPlayingURL, urlCategory } = usePlaying();
  const { currentTrack } = useSDK();

  const [currentProgress, setCurrentProgress] = useState<number>(0);

  const { data: { currently_playing = {}, queue = [] } = {} } =
    useCurrentPlaylist();

  return (
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
            >
              <div className="player__track-index">
                <img src={playlistPlayIcon} />
              </div>
              <div className="player__track-album">
                <img
                  className="player__track-album-image"
                  src={
                    currentTrack?.album?.images?.[0]?.url ??
                    "https://dummyimage.com/200x200/ccc/fff.png"
                  }
                />
              </div>
              <div className="player__track-info">
                <p className="player__track-name">{currentTrack?.name}</p>
                <p className="player__track-artist">
                  {currentTrack?.artists?.[0]?.name}
                </p>
              </div>
              <div className="player__track-runtime">
                {convertDurationTime(currentTrack?.duration_ms)}
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
            .map((item: any, idx: number) => {
              // isActive: item.id === currently_playing.id;
              return <PlayerListItem key={`track-${idx}`} {...item} />;
            })}
        </div>
      </ul>
    </div>
  );
}
