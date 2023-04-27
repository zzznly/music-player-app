import "./style.scss";

import { useOutletContext } from "react-router-dom";
import ListItem from "@components/molecules/ListItem";

export default function SearchResultPlaylists(): JSX.Element {
  const data: any = useOutletContext();
  console.log("outlet-playlists", data.playlists.items);
  return (
    <div className={"search-result__content--playlists"}>
      <div className="search-result__section">
        <h2 className="search-result__title">플레이리스트</h2>
        <div className="search-result__list">
          {data.playlists.items.map((item: any) => (
            <ListItem
              title={item.name}
              imageUrl={item.images[0].url}
              description={`만든 사람: ${item.owner.display_name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
