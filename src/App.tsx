// components
// import Login from "./components/Login";
import Player from "./components/Player";

// styles
import "./app.scss";
import "../src/styles/global.scss";

export default function App() {
  return (
    <div className={"app"}>
      {/* <Login /> */}
      <Player />
    </div>
  );
}
