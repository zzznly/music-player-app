// styles
import "./app.scss";
import { useEffect, useLayoutEffect, useState } from "react";

// router
import { Route, Routes, useNavigate } from "react-router-dom";

// layouts
import WebPlayback from "_components/templates/WebPlaybackLayout";

// components
import Explore from "_pages/Explore";
import Search from "_pages/Search";
// import DetailPage from "@pages/DetailPage";
import SearchMain from "_components/organisms/SearchMain";
import SearchResult from "_components/organisms/SearchResult";
import SearchCategory from "_pages/SearchCategory";
import Login from "_pages/Login";

export default function App(): React.ReactElement {
  const [token, setToken] = useState<string>("");
  // const getAccessToken = async () => {
  // const response = await fetch("/auth/token");
  // try {
  //   const urlHashString = new URLSearchParams(
  //     window.location.hash.substring(1)
  //   );
  //   const accessToken = urlHashString.get("access_token");
  //   setToken(accessToken ?? "");
  // } catch (error) {
  //   console.error("get access token error:", error);
  //   throw error;
  // }
  // };
  // useEffect(() => {
  //   getAccessToken();
  // }, []);

  // const [code, setCode] = useState<string | null>("");
  // useEffect(() => {
  //   setCode(new URLSearchParams(window.location.search).get("code"));
  //   console.log(333, code);
  // }, [code]);

  // const code = new URLSearchParams(window.location.search).get("code");
  // console.log(333, code);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={token ? <WebPlayback token={token} /> : <Login />}
        >
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
      </Routes>
    </div>
  );
}
