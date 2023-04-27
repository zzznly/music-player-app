import "./style.scss";

import { useOutletContext } from "react-router-dom";
import ListItem from "@components/molecules/ListItem";

export default function SearchResultArtists(): JSX.Element {
  const data: any = useOutletContext();
  console.log("outlet-artists", data.artists.items);
  return (
    <div className={"search-result__content--playlists"}>
      <div className="search-result__section">
        <h2 className="search-result__title">아티스트</h2>
        <div className="search-result__list">
          {data.artists.items.map((item: any) => (
            <ListItem
              title={item.name}
              imageUrl={item.images[0].url}
              description={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
