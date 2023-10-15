// styles
import "./style.scss";

// routes
import { Link, Outlet, useParams } from "react-router-dom";

import { useSearchResult } from "../../../service/Search/useSearchResult";

type Category = "ALL" | "TRACK" | "PLAYLIST" | "ARTIST" | "ALBUM";
type CategoryInfo = {
  label: string;
  params: string;
  path: string;
};

const CATEGORY: Record<Category, CategoryInfo> = {
  ALL: {
    label: "모두",
    params: "track,playlist,artist,album",
    path: "",
  },
  TRACK: {
    label: "곡",
    params: "track",
    path: "tracks",
  },
  PLAYLIST: {
    label: "플레이리스트",
    params: "playlist",
    path: "playlists",
  },
  ARTIST: {
    label: "아티스트",
    params: "artist",
    path: "artists",
  },
  ALBUM: {
    label: "앨범",
    params: "album",
    path: "albums",
  },
};

export default function SearchResult(): JSX.Element {
  const params = useParams();

  // 검색 조건 - 검색어, 검색 타입

  // 검색 파라미터
  const searchParams: SearchReq = {
    q: params.keyword ?? "",
    type: (
      Object.values(CATEGORY).find(({ path }) => path === params.category) ??
      CATEGORY.ALL
    ).params,
  };

  // 검색결과 fetch
  const { data } = useSearchResult(searchParams, {
    enabled: !!params.keyword,
  });

  return (
    <div className={"search-result"}>
      <div className={"search-result__filter"}>
        {Object.entries(CATEGORY).map(([key, { path, label }]) => (
          <Link
            key={key}
            to={`/search/${params.keyword}${path && `/${path}`}`}
            className={`search-result__filter-link ${
              (params.category ?? "") === path && `is-active`
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="search-result__content">
        {data ? <Outlet context={data} /> : <>no data</>}
      </div>
    </div>
  );
}
