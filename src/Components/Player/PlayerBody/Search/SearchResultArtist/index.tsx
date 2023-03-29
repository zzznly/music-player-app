import { SearchArtistsItem } from "../../../../../types/search";
import ListItem from "../../../../ListItem";
import "./style.scss";

interface Props {
  searchResult: SearchArtistsItem[];
}
export default function SearchResultArtist({ searchResult }: Props) {
  return (
    <div className={"artists"}>
      <div className={"artists-content"}>
        {searchResult?.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
