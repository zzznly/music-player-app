// styles
import "./style.scss";

// components
import Header from "temp_componenets/organisms/Header";
import NavBar from "temp_componenets/organisms/NavBar";
import Player from "temp_componenets/organisms/Player";
import Loading from "temp_componenets/atoms/Loading";
import useWebSDKPlayer from "hooks/useWebSDKPlayer";

// router
import { Outlet } from "react-router-dom";

export default function MainLayout(): JSX.Element {
  useWebSDKPlayer();

  return (
    <div className="layout layout--row">
      <NavBar />
      <div className="layout__content">
        <Header />
        <div className="layout__content-main">
          <Outlet />
        </div>
      </div>
      <Player />
      <Loading />
    </div>
  );
}
