import usePlaying from "@store/playing/usePlaying";
import { convertDurationTime } from "@utils/convert";

export default function PlayerListItem({
  uri,
  album,
  name,
  artists,
  duration_ms,
}: {
  uri: string;
  album: any;
  name: string;
  artists: any;
  duration_ms: number;
}) {
  const { setPlayingURL } = usePlaying();

  return (
    <div className="player__track" onClick={() => setPlayingURL(uri)}>
      <div className="player__track-album">
        <img
          className="player__track-album-image"
          src={
            album?.images?.[0]?.url ??
            "https://dummyimage.com/200x120/ccc/fff.png"
          }
          alt=""
        />
      </div>
      <div className="player__track-info">
        <p className="player__track-name">{name}</p>
        <p className="player__track-artist">{artists?.[0]?.name}</p>
      </div>
      <div className="player__track-runtime">
        {convertDurationTime(duration_ms)}
      </div>
    </div>
  );
}
