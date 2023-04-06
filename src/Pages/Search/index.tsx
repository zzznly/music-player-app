// router
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

// styles
import "./styles.scss";

// atoms
import { useAtom } from "jotai";
import { searchKeywordAtom } from "../../logics/atoms/atom";

// components
import SearchMain from "../../components/Player/PlayerBody/Search/SearchMain";
import SearchResult from "../../components/Player/PlayerBody/Search/SearchResult";

// hooks
import { useDebounce } from "../../logics/customHook/useDebounce";
import { useEffect } from "react";
import { useCategories } from "../../service/Category/useCategory";

export default function Search(): JSX.Element {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const debouncedSearchKeyword = useDebounce<string>(searchKeyword, 500);
  const navigate = useNavigate();
  const params = useParams();

  // useEffect(() => {
  //   navigate(`/search/${debouncedSearchKeyword}/`, {
  //     replace: true,
  //   });
  // }, [navigate, debouncedSearchKeyword]);

  // useEffect(() => {
  //   console.log(params["*"]);
  //   console.log(params["*"]?.split("/"));
  //   params["*"] && setSearchKeyword(params["*"]?.split("/")[0]);
  // }, [params]);

  return (
    <div className={"wrap"}>
      <Outlet />
    </div>
  );
}
