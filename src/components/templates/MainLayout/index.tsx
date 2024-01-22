// styles
import "./style.scss";

// components
import Header from "@components/organisms/Header";
import NavBar from "@components/organisms/NavBar";
import Player from "@components/organisms/Player";
import Loading from "@components/atoms/Loading";
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
