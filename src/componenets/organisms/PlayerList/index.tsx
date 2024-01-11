import { useCurrentPlaylist } from "@service/Player/usePlayer";
import useSDK from "@store/sdk/useSDK";
import PlayerListItem from "componenets/molecules/PlayerListItem";

export default function PlayerList() {
  const { currentTrack } = useSDK();

  const { data: { currently_playing = {}, queue = [] } = {} } =
    useCurrentPlaylist();

  return (
    <div className="player__list">
      <div className="player__list-wrap">
        <div className="player__current">
          <p className="player__title">Now Playing</p>
          {currently_playing && <PlayerListItem {...currentTrack} />}
        </div>
        <div className="player__queue">
          <p className="player__title">Next Tracks</p>
          {queue
            ?.map((v: any, i: number, self: any[]) => {
              return self.findIndex((obj: any) => obj.uri === v.uri) === i
                ? v
                : null;
            })
            .filter((item: any) => item !== null)
            .map((item: any, idx: number) => (
              <PlayerListItem key={`track-${idx}`} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}
