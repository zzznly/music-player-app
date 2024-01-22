// styles
import "./app.scss";

// router
import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./components/templates/MainLayout";

// components
import Home from "./pages/Home";
import Search from "./pages/Search";
import useSpotifyAuth from "./hooks/useSpotifyAuth";
import SearchMain from "./components/organisms/SearchMain";
import SearchResult from "./components/organisms/SearchResult";
import SearchCategory from "./pages/SearchCategory";
import Login from "@pages/Login";
import AuthLayout from "@components/templates/AuthLayout";
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
