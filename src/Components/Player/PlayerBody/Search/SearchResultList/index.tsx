// components
import SearchResultAlbum from "../SearchResultAlbum";
import SearchResultArtist from "../SearchResultArtist";
import SearchResultTracks from "../SearchResultTracks";

interface Props {
  type: string;
}

export default function SearchResultList({ type }: Props): JSX.Element {
  return {
    track: <SearchResultTracks />,
    playlist: <SearchResultAlbum />,
    album: <SearchResultAlbum />,
    artist: <SearchResultArtist />,
  }[type] as JSX.Element;
}
