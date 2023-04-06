import { useEffect, useState } from "react";

// routes
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// atoms
import { useAtom } from "jotai";
import { searchKeywordAtom } from "../../../../../logics/atoms/atom";

// react-query
import { useSearchResult } from "../../../../../logics/queries/useQueries";

// types
import { SearchReq } from "../../../../../types/request";

// styles
import "./style.scss";

// components
import SongList from "../SongList";
import SearchResultArtist from "../SearchResultArtist";
import { useDebounce } from "../../../../../logics/customHook/useDebounce";

export default function SearchResult(): JSX.Element {
  interface SearchFilter {
    id: number;
    label: string;
    type: string;
  }

  // 검색 필터 데이터
  const filterMenu: SearchFilter[] = [
    // {
    //   id: 0,
    //   label: "모두",
    //   type: "track,playlist,artist,album",
    // },
    {
      id: 0,
      label: "곡",
      type: "track",
    },
    {
      id: 1,
      label: "플레이리스트",
      type: "playlist",
    },
    {
      id: 2,
      label: "아티스트",
      type: "artist",
    },
    {
      id: 3,
      label: "앨범",
      type: "album",
    },
  ];

  // 검색 조건 - 검색어, 검색 타입
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const debouncedSearchKeyword = useDebounce<string>(searchKeyword, 500);
  const [searchType, setSearchType] = useState<string | string[]>("");

  // 검색 파라미터
  const searchParams: SearchReq = {
    q: debouncedSearchKeyword,
    type: searchType ? searchType : filterMenu.map(v => v.type).join(","),
  };

  // 검색 결과 데이터
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const navigate = useNavigate();

  useSearchResult(searchParams, {
    onSuccess: ({ data }) => {
      setSearchResult(data[`${searchType}s`]?.items);
      navigate(`/search/${debouncedSearchKeyword}/${searchType}`, {
        replace: true,
      });
    },
    enabled: !!debouncedSearchKeyword,
  });

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
