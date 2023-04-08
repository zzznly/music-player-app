import ListSection from "../../Home/ListSection";
import "./style.scss";
export default function SearchResultAll(): JSX.Element {
  return (
    <div className="search-result__all-types">
      <ListSection title={"아티스트"} data={[]} />
      <ListSection title={"앨범"} data={[]} />
      <ListSection title={"플레이리스트"} data={[]} />
    </div>
  );
  // return {
  //   track: <SearchResultTracks />,
  //   playlist: <SearchResultAlbum />,
  //   album: <SearchResultAlbum />,
  //   artist: <SearchResultArtist />,
  // }[type] as JSX.Element;
}
