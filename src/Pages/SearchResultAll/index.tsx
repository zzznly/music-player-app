// styles
import "./style.scss";

// components
import ListItem from "@components/molecules/ListItem";

// router
import { useOutletContext, useParams } from "react-router-dom";

export default function SearchResultAll(): JSX.Element {
  const param = useParams();
  console.log(param);
  const data: any = useOutletContext();
  console.log("outlet-all", data, Object.keys(data));
  return data.artists.items.length &&
    data.albums.items.length &&
    data.tracks.items.length ? (
    <div className={"search-result__content--all"}>
      {/* <div className="search-result__section-wrap">
        <div className="search-result__section">
          <h2 className="search-result__title">상위 결과</h2>
          <div className="search-result__card">
            <h1>이영지</h1>
            <p>아티스트</p>
          </div>
        </div>
        <div className="search-result__section">
          <h2 className="search-result__title">곡</h2>
          <div className="search-result__list"></div>
        </div>
      </div> */}
      <div className="search-result__section">
        <h2 className="search-result__title">아티스트</h2>
        <div className="search-result__list">
          {data?.artists?.items.map((item: any) => (
            <ListItem
              title={item.name}
              imageUrl={item.images[0]?.url}
              description={item.type}
            />
          ))}
        </div>
      </div>
      <div className="search-result__section">
        <h2 className="search-result__title">앨범</h2>
        <div className="search-result__list">
          {data?.albums?.items.map((item: any) => (
            <ListItem
              title={item.name}
              imageUrl={item.images[0].url}
              description={item.type}
            />
          ))}
        </div>
      </div>
      <div className="search-result__section">
        <h2 className="search-result__title">플레이리스트</h2>
        <div className="search-result__list">
          {data?.playlists?.items.map((item: any) => (
            <ListItem
              title={item.name}
              imageUrl={item.images[0].url}
              description={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="search-result__content--none">
      <h2>"{param.keyword}"과(와) 일치하는 결과 없음</h2>
      <p>
        입력한 단어의 철자가 맞는지 확인하거나 짧은 키워드 또는 다른 키워드를
        사용하세요.
      </p>
    </div>
  );
}
