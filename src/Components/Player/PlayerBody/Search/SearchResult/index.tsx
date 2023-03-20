import { useState } from "react";

interface SearchFilter {
  id: number;
  label: string;
  type: string;
}
export default function SearchResult() {
  const filterMenu: SearchFilter[] = [
    {
      id: 0,
      label: "모두",
      type: "",
    },
    {
      id: 1,
      label: "곡",
      type: "track",
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
  const searchTypes = ["album", "artist", "track"];
  const [searchType, setSearchType] = useState(searchTypes[0]);

  return (
    <div className={"search-result"}>
      <ul className={"search-result__filter"}>
        {filterMenu.map(item => (
          <li key={item.id}>
            <button>{item.label}</button>
          </li>
        ))}
      </ul>
      <div className={"search-result__content"}>
        <ul className={"search-result__songlist"}>
          <li className={"search-result__songlist-head"}>
            <p>#</p>
            <p>제목</p>
            <p>앨범</p>
            <p>시간</p>
          </li>
          <li className={"search-result__song"}>
            <button className={"search-result__song-rank"}>1</button>
            <div className={"search-result__song-albumimage"}>
              <img
                src="https://i.scdn.co/image/ab67616d0000485134ee982fc7e55b647edbbc61"
                alt="album"
              />
            </div>
            <div className={"search-result__song-info"}>
              <p className={"search-result__song-name"}>Yesterday</p>
              <p className={"sesarch-result__song-artist"}>박재범</p>
            </div>
            <p className={"search-result__song-albumname"}>Yesterday</p>
            <p className={"search-result__song-time"}>3:11</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
