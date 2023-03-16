// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "../../pages/Home";
import Search from "../../pages/Search";

// styles
import "./style.scss";

export default function Player(): JSX.Element {
  return (
    <>
      <div className={"player"}>
        <div className={"player__navBar"}>
          <h2>사이드 네비바</h2>
        </div>
        <div className={"player__pageView"}>
          <div className={"player__header"}>
            <h2>header 공통 헤더</h2>
          </div>
          <div className={"player__body"}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <div className={"player__nowPlayingBar"}>
        <h2>리스트 플레이어</h2>
      </div>
    </>
  );
}
