import "./style.scss";

import { useOutletContext, useParams } from "react-router-dom";
import ListItem from "@components/molecules/ListItem";
import SearchResultAll from "@pages/SearchResultAll";
import SongList from "@components/organisms/SongList";

export default function SearchCategory(): JSX.Element {
  const data: any = useOutletContext();
  const params = useParams();
  const { category = "" } = useParams();
  console.log(33333, params);
  console.log("hihi", data, category, data[category]);

  const list: Record<string, React.ReactNode> = {
    all: (
      <>
        <h2>TODO: SearchResultAll - items undefined 에러 발생...</h2>
      </>
    ),
    tracks: <SongList items={data?.tracks?.items} />,
    playlists: data.playlists?.items?.map((item: any) => (
      <ListItem
        title={item?.name}
        imageUrl={item?.images[0]?.url}
        description={`만든 사람: ${item.owner.display_name}`}
      />
    )),
    artists: data.artists?.items?.map((item: any) => (
      <ListItem
        title={item.name}
        imageUrl={item.images[0].url}
        description={item.type}
      />
    )),
    albums: data.albums?.items?.map((item: any) => (
      <ListItem
        title={item.name}
        imageUrl={item.images[0].url}
        description={item.type}
      />
    )),
  };
  console.log("hihi2", list);

  console.log("outlet", data, data[category]);

  if (!list[category]) return <></>;
  return (
    <div className={"search-result__content--playlists"}>
      <div className="search-result__section">
        <h2 className="search-result__title">{category}</h2>
        <div className="search-result__list">{list[category]}</div>
      </div>
    </div>
  );
}
