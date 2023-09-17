// styles
import "./app.scss";
import { useEffect, useLayoutEffect, useState } from "react";

// router
import { Route, Routes, useNavigate } from "react-router-dom";

// layouts
import WebPlayback from "@components/templates/WebPlaybackLayout";

// components
import Explore from "@pages/Explore";
import Search from "@pages/Search";
// import DetailPage from "@pages/DetailPage";
import SearchMain from "@components/organisms/SearchMain";
import SearchResult from "@components/organisms/SearchResult";
import SearchCategory from "@pages/SearchCategory";
import Login from "@pages/Login";

export default function App(): React.ReactElement {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const urlHashString = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const accessToken = urlHashString.get("access_token");
        setToken(accessToken ?? "");
      } catch (error) {
        console.error("get access token error:", error);
        throw error;
      }
    };

    getAccessToken();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={token === "" ? <Login /> : <WebPlayback token={token} />}
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
