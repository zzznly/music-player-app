// components
import NavBar from "../NavBar";
import PlayerHeader from "./PlayerHeader";
import PlayerBody from "./PlayerBody";
import PlayerFooter from "./PlayerFooter";

// styles
import "./style.scss";

export default function Player(): JSX.Element {
  return (
    <div className={"container container--row"}>
      <NavBar />
      <div className={"content"}>
        <PlayerHeader />
        <PlayerBody />
      </div>
      <PlayerFooter />
    </div>
  );
}
