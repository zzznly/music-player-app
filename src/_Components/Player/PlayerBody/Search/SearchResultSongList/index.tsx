import { SearchTracksItem } from "../../../../../types/response";

interface SearchResultProps {
  searchResult: SearchTracksItem | any;
}
export default function SearchResultSongList({
  searchResult,
}: SearchResultProps) {
  return (
    <ul className={"search-result__songlist"}>
      {searchResult?.map((item: SearchTracksItem, idx: number) => (
        <li className={"search-result__song"}>
          <button className={"search-result__song-rank"}>{idx + 1}</button>
          <div className={"search-result__song-albumimage"}>
            <img src={item.album.images[0].url} alt="album" />
          </div>
          <div className={"search-result__song-info"}>
            <p className={"search-result__song-name"}>{item.name}</p>
            <p className={"search-result__song-artist"}>
              {item.artists[0].name}
            </p>
          </div>
          <p className={"search-result__song-albumname"}>{item.album.name}</p>
          <p className={"search-result__song-time"}>3:11</p>
        </li>
      ))}
    </ul>
  );
}
