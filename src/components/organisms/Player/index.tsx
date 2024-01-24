import "./style.scss";

// components
import PlayerList from "../PlayerList";
import PlayerDevice from "../PlayerDevice";
import useWebSDKPlayer from "@hooks/useWebSDKPlayer";

export default function Player() {
  useWebSDKPlayer();

  return (
    <>
      <div className="player">
        <PlayerList />
        <PlayerDevice />
      </div>
    </>
  );
}
