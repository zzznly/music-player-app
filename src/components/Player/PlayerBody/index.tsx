// router
import { Routes, Route } from "react-router-dom";

// components
import Home from "../../../_pages/Home";
import PlaylistDetail from "../../../_pages/PlaylistDetail";
import Search from "../../../_pages/Search";

// styles
import "./style.scss";

export default function PlayerBody() {
  return (
    <div className={"player-body"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/playlist/detail" element={<PlaylistDetail />} />
      </Routes>
    </div>
  );
}
