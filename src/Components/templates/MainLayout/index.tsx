// styles
import "./style.scss";

// components
import NavBar from "../../organisms/NavBar";
import Header from "../../organisms/Header";
import Player from "@components/organisms/Player";

// router
import { Outlet } from "react-router-dom";

export default function MainLayout(): JSX.Element {
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
    </div>
  );
}
