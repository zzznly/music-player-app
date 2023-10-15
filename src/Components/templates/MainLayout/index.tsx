// styles
import "./style.scss";

// components
import NavBar from "@components/organisms/NavBar";
import Header from "@components/organisms/Header";
import Player from "@components/organisms/Player";
import LoadingSpinner from "@components/atoms/Loading";
import usePlayer from "@hooks/usePlayer";

// router
import { Outlet } from "react-router-dom";

export default function MainLayout(): JSX.Element {
  usePlayer();

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
      <LoadingSpinner />
    </div>
  );
}
