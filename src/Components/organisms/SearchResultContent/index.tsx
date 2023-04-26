// styles
import "./style.scss";

// components
import ListItem from "@components/molecules/ListItem";

// router
import { useOutletContext } from "react-router-dom";

export default function SearchResultContent(): JSX.Element {
  const data: any = useOutletContext();
  console.log("outlet", data);
  return (
    <div className={"search-result__content"}>
      {data?.playlists && (
        <>
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
        </>
      )}
    </div>
  );
}
