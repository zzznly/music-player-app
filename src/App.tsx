// styles
import "./app.scss";

// router
import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./componenets/templates/MainLayout";

// components
import Home from "./pages/Home";
import Search from "./pages/Search";
import useSpotifyAuth from "./hooks/useSpotifyAuth";
import SearchMain from "./componenets/organisms/SearchMain";
import SearchResult from "./componenets/organisms/SearchResult";
import SearchCategory from "./pages/SearchCategory";
import Login from "@pages/Login";
import AuthLayout from "componenets/templates/AuthLayout";
import Logout from "@pages/Logout";

export default function App(): React.ReactElement {
  useSpotifyAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />}>
            <Route index element={<SearchMain />} />
            <Route path="/search/:keyword" element={<SearchResult />}>
              <Route index element={<SearchCategory />} />
              <Route path=":category" element={<SearchCategory />} />
            </Route>
          </Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}
