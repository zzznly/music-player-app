import "./style.scss";

import { searchKeywordAtom } from "@service/Search/SearchAtom";
import { useOutletContext, useParams, useLocation } from "react-router-dom";
import { convertDurationTime, setFirstLetterUpperCase } from "@utils/convert";
import { useEffect, useState } from "react";
import ListItem from "@components/molecules/ListItem";
import SongListItem from "@components/molecules/SongListItem";

export default function SearchCategory(): JSX.Element {
  const data: any = useOutletContext();
  const list: Record<string, React.ReactNode> = {
    all: (
      <div className="search-result__content--all">
        <div className="search-result__section-wrap">
          <div className="search-result__section topResult">
            <h2 className="search-result__title">상위 결과</h2>
            <div
              className={`search-result__card ${
                data?.artists?.items[0]?.type === "artist" &&
                `search-result__card--artist`
              }`}
            >
              <div className="search-result__image">
                <img src={data?.artists?.items[0]?.images[0]?.url} />
              </div>
              <h2 className="search-result__name">
                {data?.artists?.items[0]?.name}
              </h2>
              <div className="search-result__type">
                {data?.artists?.items[0]?.type}
              </div>
            </div>
          </div>
          <div className="search-result__section tracks">
            <h2 className="search-result__title">곡</h2>
            <div className="search-result__list">
              {data?.tracks?.items
                ?.slice(0, 4)
                .map((item: any, idx: number) => (
                  <SongListItem
                    id={item?.id}
                    imgUrl={item?.album?.images[0]?.url}
                    name={item?.name}
                    artist={item?.artists[0]?.name}
                    durationTime={convertDurationTime(item?.duration_ms)}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="search-result__section artists">
          <h2>{Object.keys(data)[1]}</h2>
          <ul className="search-result__list">
            {data.artists?.items?.map((item: any) => (
              <ListItem
                title={item?.name}
                imageUrl={item?.images[0]?.url}
                description={item?.type}
              />
            ))}
          </ul>
        </div>
        <div className="search-result__section albums">
          <h2>{Object.keys(data)[0]}</h2>
          <ul className="search-result__list">
            {data.albums?.items?.map((item: any) => (
              <ListItem
                title={item?.name}
                imageUrl={item?.images[0]?.url}
                description={item?.type}
              />
            ))}
          </ul>
        </div>
        <div className="search-result__section playlists">
          <h2>{Object.keys(data)[3]}</h2>
          <ul className="search-result__list">
            {data.playlists?.items?.map((item: any) => (
              <ListItem
                title={item?.name}
                imageUrl={item?.images[0]?.url}
                description={`만든 사람: ${item?.owner?.display_name}`}
              />
            ))}
          </ul>
        </div>
      </div>
    ),
    tracks: data?.tracks?.items?.map((item: any, idx: number) => (
      <SongListItem
        id={item?.id}
        idx={data?.tracks?.items.indexOf(item)}
        imgUrl={item?.album?.images[0]?.url}
        name={item?.name}
        artist={item?.artists[0]?.name}
        album={item?.album?.name}
        durationTime={convertDurationTime(item?.duration_ms)}
      />
    )),
    playlists: data?.playlists?.items?.map((item: any) => (
      <ListItem
        title={item?.name}
        imageUrl={item?.images[0]?.url}
        description={`만든 사람: ${item?.owner?.display_name}`}
      />
    )),
    artists: data?.artists?.items?.map((item: any) => (
      <ListItem
        title={item?.name}
        imageUrl={item?.images[0]?.url}
        description={item?.type}
      />
    )),
    albums: data?.albums?.items?.map((item: any) => (
      <ListItem
        title={item.name}
        imageUrl={item?.images[0]?.url}
        description={item?.type}
      />
    )),
  };

  const location = useLocation();
  const { category = "all" } = useParams();
  const [resultComponent, setResultComponent] = useState(list[category]);

  const [topResData, setTopResData] = useState<any>({});

  useEffect(() => {
    setResultComponent(list[category]);
  }, [location, category]);

  const getTopResult = (data: any, type: string) => {
    // 상위 결과 항목 노출!
    // 1. 아티스트에 검색어가 100% 포함 되어있으면, 아티스트의 0번째 요소 노출
    // 2. 아티스트에 검색어가 100% 포함 안되어있으면, 트랙 중에 검색어가 100% 포함된 것 노출
    // 3. 앨범 중에 검색어가 100% 포함되어있으면 그거 노출
    // 4. 플레이리스트 중에 검색어가 100% 포함되어있으면 그거 노출

    console.log(888, data);

    if (data?.tracks?.items[0].name.includes(searchKeywordAtom)) {
      setTopResData(data?.tracks?.items[0]);
      return;
    }
    setTopResData(data?.artists?.items[0]);
  };

  console.log("searchCategory", list);

  console.log("outlet", data, data[category]);

  if (!list[category]) return <></>;
  return (
    <div className={"search-result__content--playlists"}>
      <div className={`search-result__section ${category}`}>
        <h2 className="search-result__title">
          {Object.keys(list)
            .filter(key => key !== "all")
            .some(key => key === category) && category}
        </h2>
        <div className="search-result__list">{resultComponent}</div>
      </div>
    </div>
  );
}
