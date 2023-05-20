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
import SearchCategory from "@pages/SearchCategory";

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
            <Route path=":category" element={<SearchCategory />} />
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
