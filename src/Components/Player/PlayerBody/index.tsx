// router
import { Routes, Route } from "react-router-dom";

// components
import Home from "../../../pages/Home";
import Search from "../../../pages/Search";

// styles
import "./style.scss";

export default function PlayerBody() {
  return (
    <div className={"player-body"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
