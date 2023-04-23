import { SearchArtistsItem } from "../../../types/search";
import ListItem from "../../molecules/ListItem";
import "./style.scss";

export default function SearchResultArtist() {
  return (
    <div className={"artists"}>
      <div className={"artists-content"}>
        search result artists
        {/* {searchResult?.map(item => (
          <ListItem item={item} key={item.id} />
        ))} */}
      </div>
    </div>
  );
}
