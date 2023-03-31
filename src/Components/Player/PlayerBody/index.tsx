// router
import { Routes, Route } from "react-router-dom";

// components
import Home from "../../../pages/Home";
import Search from "../../../pages/Search";
import PlaylistDetail from "../../../pages/PlaylistDetail";

// styles
import "./style.scss";

export default function PlayerBody(): JSX.Element {
  return (
    <div className={"player-body"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/search/*`} element={<Search />} />
        <Route path="/playlist/detail" element={<PlaylistDetail />} />
      </Routes>
    </div>
  );
}
