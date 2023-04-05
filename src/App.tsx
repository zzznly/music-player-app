// styles
import "./app.scss";

// router
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
// import PlaylistDetail from "./pages/PlaylistDetail";
import Search from "./pages/Search";

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search/:keyword" element={<Search />}>
          <Route path="/tracks" />
        </Route>
      </Route>
    </Routes>
  );
}
