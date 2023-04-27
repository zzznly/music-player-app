import "./style.scss";

import { useOutletContext } from "react-router-dom";
import ListItem from "@components/molecules/ListItem";

export default function SearchResultAlbums(): JSX.Element {
  const data: any = useOutletContext();
  console.log("outlet-albums", data.albums.items);
  return (
    <div className={"search-result__content--playlists"}>
      <div className="search-result__section">
        <h2 className="search-result__title">앨범</h2>
        <div className="search-result__list">
          {data.albums.items.map((item: any) => (
            <ListItem
              title={item.name}
              imageUrl={item.images[0].url}
              description={`${item.release_date.slice(0, 4)} • ${
                item.artists[0].name
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
