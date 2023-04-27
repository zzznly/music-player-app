// styles
import "./style.scss";

// routes
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// atoms
import { useAtom, useAtomValue } from "jotai";
import {
  searchFilterMenuAtom,
  searchKeywordAtom,
  searchTypeAtom,
} from "../../../service/Search/SearchAtom";

// hooks
import { useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { useSearchResult } from "../../../service/Search/useSearchResult";

export default function SearchResult(): JSX.Element {
  // 검색 조건 - 검색어, 검색 타입
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const [searchType, setSearchType] = useAtom(searchTypeAtom);
  const debouncedSearchKeyword = useDebounce<string>(searchKeyword, 300);

  // 검색 필터 데이터
  const filterMenu = useAtomValue(searchFilterMenuAtom);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 검색 파라미터
  const searchParams: SearchReq = {
    q: debouncedSearchKeyword,
    type: location.pathname.split("/")[3]
      ? location.pathname.split("/")[3].slice(0, -1)
      : filterMenu[0].type,
  };

  // 검색결과 fetch
  const {
    // @ts-ignore
    // **Question: AxiosResponse 타입 에러가 남
    data,
  } = useSearchResult(searchParams, {
    enabled: !!debouncedSearchKeyword,
  });
  console.log(11, data);

  useEffect(() => {
    if (params.keyword) {
      setSearchKeyword(params.keyword);
    }
  }, [params.keyword]);

  useEffect(() => {
    if (debouncedSearchKeyword) {
      navigate(`/search/${debouncedSearchKeyword}`, {
        replace: true,
      });
    }
  }, [debouncedSearchKeyword]);

  return (
    <div className={"search-result"}>
      <div className={"search-result__filter"}>
        {filterMenu.map(item => (
          <Link
            to={`/search/${debouncedSearchKeyword}${
              item.id ? `/${item.type}s` : ""
            }`}
            className={`search-result__filter-link ${
              searchType === item.type && `is-active`
            }`}
            key={item.id}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="search-result__content">
        {data && <Outlet context={data} />}
      </div>
    </div>
  );
}
