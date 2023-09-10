// styles
import "./app.scss";
import { useEffect } from "react";

// router
import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./components/templates/MainLayout";
// import AuthLayout from "./components/templates/AuthLayout";

// components
import Explore from "@pages/Explore";
import Search from "@pages/Search";
import DetailPage from "@pages/DetailPage";
import useSpotifyAuth from "@hooks/useSpotifyAuth";
import SearchMain from "@components/organisms/SearchMain";
import SearchResult from "@components/organisms/SearchResult";
import SearchCategory from "@pages/SearchCategory";

export default function App(): React.ReactElement {
  useSpotifyAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Explore />} />
          <Route path="/search" element={<Search />}>
            <Route index element={<SearchMain />} />
            <Route path="/search/:keyword" element={<SearchResult />}>
              <Route index element={<SearchCategory />} />
              <Route path=":category" element={<SearchCategory />} />
            </Route>
          </Route>
          {/* <Route path="/detail/:type" element={<DetailPage />} /> */}
        </Route>
        {/* login 페이지가 불필요함. OAuth2.0을 사용할 것이므로 스포티파이 로그인 페이지 계정으로 연결해주면 됨 */}
        {/* <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route> */}
      </Routes>
    </div>
  );
}
