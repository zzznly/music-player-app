import "./style.scss";

// components
import PlayerList from "../PlayerList";
import PlayerDevice from "../PlayerDevice";

export default function Player() {
  return (
    <>
      <div className="player">
        <PlayerList />
        <PlayerDevice />
      </div>
    </>
  );
}
