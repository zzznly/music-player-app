import {
  SearchAlbumsItem,
  SearchTracksItem,
} from "../../../../../types/response";
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
          <ListItem
            title={item.name}
            description={item.name}
            imageUrl={item.images[0].url}
          />
        ))}
      </div>
    </div>
  );
}
