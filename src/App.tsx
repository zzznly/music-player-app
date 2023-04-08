// styles
import "./app.scss";
import { useEffect } from "react";
// router
import { Route, Routes } from "react-router-dom";

// atoms
import { useAtomValue } from "jotai";
import { searchFilterMenuAtom } from "./logics/atoms/atom";

// layouts
import MainLayout from "./components/templates/MainLayout";
import AuthLayout from "./components/templates/AuthLayout";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import SearchMain from "./components/Player/PlayerBody/Search/SearchMain";
import SearchResult from "./components/Player/PlayerBody/Search/SearchResult";
import SearchResultAll from "./components/Player/PlayerBody/Search/SearchResultAll";
import PlaylistDetail from "./pages/DetailPage";
import { saveTokenInfo } from "./utils/auth";

export default function App(): React.ReactElement {
  // 카테고리 목록 fetch
  useEffect(() => {
    saveTokenInfo();
  }, []);
  const searchFilterMenu = useAtomValue(searchFilterMenuAtom);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route index element={<SearchMain />} />
          <Route path="/search/:keyword" element={<SearchResult />}>
            <Route index element={<SearchResultAll />} />
            <Route path={`/search/:keyword/tracks`} />
            <Route path={`/search/:keyword/playlists`} />
            <Route path={`/search/:keyword/artists`} />
            <Route path={`/search/:keyword/albums`} />
            {/* {searchFilterMenu.map((route, idx) => (
              <Route
                path={`/search/:keyword/:searchType`}
                element={<SearchResultList type={route.type} />}
                key={idx}
              />
            ))} */}
          </Route>
        </Route>
        <Route path="/detail" element={<PlaylistDetail />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
