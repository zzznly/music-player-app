// styles
import "./app.scss";

// router
import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import SearchMain from "./components/Player/PlayerBody/Search/SearchMain";
import SearchResult from "./components/Player/PlayerBody/Search/SearchResult";
import SearchResultList from "./components/Player/PlayerBody/Search/SearchResultList";
import PlaylistDetail from "./pages/DetailPage";
import { useAtomValue } from "jotai";
import { searchFilterMenuAtom } from "./logics/atoms/atom";

export default function App(): React.ReactElement {
  const searchFilterMenu = useAtomValue(searchFilterMenuAtom);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route index element={<SearchMain />} />
          <Route path="/search/:keyword" element={<SearchResult />}>
            {searchFilterMenu.map((route, idx) => (
              <Route
                path={`/search/:keyword/:searchType`}
                element={<SearchResultList type={route.type} />}
                key={idx}
              />
            ))}
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
