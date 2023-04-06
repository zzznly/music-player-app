// styles
import "./style.scss";

// routes
import { Outlet, useNavigate, useParams } from "react-router-dom";

// atoms
import { useAtom, useAtomValue } from "jotai";
import {
  searchFilterMenu,
  searchKeywordAtom,
  searchTypeAtom,
} from "../../../../../logics/atoms/atom";

// hooks
import { useEffect } from "react";
import { useDebounce } from "../../../../../logics/customHook/useDebounce";
import { useSearchResult } from "../../../../../service/Search/useSearchResult";

export default function SearchResult(): JSX.Element {
  // 검색 조건 - 검색어, 검색 타입
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const [searchType, setSearchType] = useAtom(searchTypeAtom);
  const debouncedSearchKeyword = useDebounce<string>(searchKeyword, 300);

  // 검색 필터 데이터
  const filterMenu = useAtomValue(searchFilterMenu);

  // 검색 파라미터
  const searchParams: SearchReq = {
    q: debouncedSearchKeyword,
    type: searchType ? searchType : filterMenu.map(v => v.type).join(","),
  };

  const params = useParams();
  const navigate = useNavigate();

  // 검색결과 fetch
  const { data } = useSearchResult(searchParams, {
    enabled: !!debouncedSearchKeyword,
  });
  console.log(33, data?.data);

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
          <button
            className={`search-result__filter-button ${
              searchType === item.type && `is-active`
            }`}
            key={item.id}
            onClick={() => setSearchType(item.type)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={"search-result__content"}>
        <Outlet />
      </div>
    </div>
  );
}
