import { useState } from "react";

// routes
import { Link, Route, Routes } from "react-router-dom";

// atoms
import { useAtomValue } from "jotai";
import { searchKeywordAtom } from "../../../../../logics/atoms/atom";

// react-query
import { useSearchResult } from "../../../../../logics/queries/useQueries";

// types
import { SearchReq } from "../../../../../types/request";
import {
  SearchAlbumsItem,
  SearchArtistsItem,
  SearchTracksItem,
} from "../../../../../types/search";

// styles
import "./style.scss";

// components
import SearchResultSongList from "../SearchResultSongList";
import SearchResultArtist from "../SearchResultArtist";
import SearchResultAlbum from "../SearchResultAlbum";

interface SearchFilter {
  id: number;
  label: string;
  type: string;
}
export default function SearchResult(): JSX.Element {
  const filterMenu: SearchFilter[] = [
    {
      id: 0,
      label: "곡",
      type: "track",
    },
    {
      id: 1,
      label: "아티스트",
      type: "artist",
    },
    {
      id: 2,
      label: "앨범",
      type: "album",
    },
  ];

  const searchKeyword = useAtomValue(searchKeywordAtom);
  const [searchType, setSearchType] = useState<string>(filterMenu[0].type);
  const [, setSearchResult] = useState<
    SearchTracksItem[] | SearchArtistsItem[] | SearchAlbumsItem[]
  >([]);

  const [searchResultTracks, setSearchResultTracks] = useState<
    SearchTracksItem[]
  >([]);
  const [searchResultArtists, setSearchResultArtists] = useState<
    SearchArtistsItem[]
  >([]);
  const [searchResultAlbums, setSearchResultAlbums] = useState<
    SearchAlbumsItem[]
  >([]);

  const searchParams: SearchReq = {
    q: searchKeyword,
    type: searchType,
  };

  useSearchResult(searchParams, {
    onSuccess: ({ data }) => {
      setSearchResult(data[`${searchType}s`]?.items);
      setSearchResultTracks(data?.tracks?.items);
      setSearchResultArtists(data?.artists?.items);
      setSearchResultAlbums(data?.albums?.items);
    },
    enabled: !!searchKeyword,
  });

  return (
    <div className={"search-result"}>
      <ul className={"search-result__filter"}>
        {filterMenu.map(item => (
          <Link
            to={`/search/${item.type}`}
            className={`search-result__filter-link ${
              searchType === item.type && `is-active`
            }`}
            key={item.id}
            onClick={() => setSearchType(item.type)}
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className={"search-result__content"}>
        <Routes>
          <Route path="/*" />
          <Route
            path="/track"
            element={<SearchResultSongList searchResult={searchResultTracks} />}
          />
          <Route
            path="/artist"
            element={<SearchResultArtist searchResult={searchResultArtists} />}
          />
          <Route
            path="/album"
            element={<SearchResultAlbum searchResult={searchResultAlbums} />}
          />
        </Routes>
      </div>
    </div>
  );
}
