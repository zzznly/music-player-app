// styles
import "./app.scss";
import { useEffect } from "react";

// router
import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./components/templates/MainLayout";
import AuthLayout from "./components/templates/AuthLayout";

// components
import Home from "@pages/Home";
import Login from "@pages/Login";
import Search from "@pages/Search";
import DetailPage from "@pages/DetailPage";
import { saveTokenInfo } from "@utils/auth";
import SearchMain from "@components/organisms/SearchMain";
import SearchResult from "@components/organisms/SearchResult";
import SearchResultTracks from "@pages/SearchResultTracks";
import SearchResultPlaylists from "@pages/SearchResultPlaylists";
import SearchResultArtists from "@pages/SearchResultArtists";
import SearchResultAlbums from "@pages/SearchResultAlbums";
import SearchResultContent from "@components/organisms/SearchResultContent";

export default function App(): React.ReactElement {
  useEffect(() => {
    saveTokenInfo();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route index element={<SearchMain />} />
          <Route path="/search/:keyword" element={<SearchResult />}>
            <Route index element={<SearchResultContent />} />
            <Route
              path="/search/:keyword/tracks"
              element={<SearchResultTracks />}
            />
            <Route
              path="/search/:keyword/playlists"
              element={<SearchResultPlaylists />}
            />
            <Route
              path="/search/:keyword/artists"
              element={<SearchResultArtists />}
            />
            <Route
              path="/search/:keyword/albums"
              element={<SearchResultAlbums />}
            />
            {/* <Route
              path="/search/:keyword/:searchType"
              element={<SearchResultContent />}
            /> */}
          </Route>
        </Route>
        <Route path="/detail/:type" element={<DetailPage />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
