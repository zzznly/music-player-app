import { SearchAlbumsItem } from "../../../../../types/search";
import ListItem from "../../../../ListItem";

import "./style.scss";

interface Props {
  searchResult: SearchAlbumsItem[];
}
export default function SearchResultAlbum({
  searchResult,
}: Props): JSX.Element {
  return (
    <div className={"albums"}>
      <div className={"albums-content"}>
        {searchResult?.map(item => (
          <ListItem item={item} />
        ))}
      </div>
    </div>
  );
}
