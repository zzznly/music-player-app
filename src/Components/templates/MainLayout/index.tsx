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
import { useState } from "react";

// utils
import useSDK from "@store/sdk/useSDK";
import { useCommon } from "@store/common/useCommon";

export default function MainLayout(): JSX.Element {
  const { isLoading } = useCommon();

  // player states
  const { deviceId } = useSDK();

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
      {isLoading && <LoadingSpinner />}
    </div>
  );
}
