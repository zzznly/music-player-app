import { SearchAlbumsItem } from "../../../../../types/search";
import ListItem from "../../../../molecules/ListItem";

import "./style.scss";

// interface Props {
//   searchResult: SearchAlbumsItem[];
// }
export default function SearchResultAlbum(): JSX.Element {
  return (
    <div className={"albums"}>
      <div className={"albums-content"}>
        search result artists
        {/* {searchResult?.map(item => (
          <ListItem item={item} key={item.id} />
        ))} */}
      </div>
    </div>
  );
}
