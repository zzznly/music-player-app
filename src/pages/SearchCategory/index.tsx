import "./style.scss";

import { useEffect, useState } from "react";
import { useOutletContext, useParams, useLocation } from "react-router-dom";
import { searchKeywordAtom } from "@service/Search/SearchAtom";
import { convertDurationTime, setFirstLetterUpperCase } from "@utils/convert";

import SongListItem from "@components/molecules/SongListItem";
import ListSection from "@components/organisms/ListSection";

export default function SearchCategory(): JSX.Element {
  const data: any = useOutletContext();
  console.log(
    "data",
    Object.keys(data).filter(v => v !== "tracks")
  );
  const list: Record<string, React.ReactNode> = {
    all: (
      <div className="search-result__content--all">
        <div className="search-result__section-box">
          <div className="search-result__section topResult">
            {/* <h2 className="search-result__title">상위 결과</h2> */}
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
            {/* <h2 className="search-result__title">곡</h2> */}
            <div className="search-result__list">
              {data?.tracks?.items
                ?.slice(0, 4)
                .map((item: any, idx: number) => (
                  <SongListItem
                    id={item?.id}
                    imgUrl={item?.album?.images[0]?.url}
                    name={item?.name}
                    artist={item?.artists[0]?.name}
                    durationTime={item?.duration_ms}
                    uri={item.uri}
                    key={idx}
                  />
                ))}
            </div>
          </div>
        </div>
        {Object.keys(data)
          .filter(v => v !== "tracks")
          .map((key: string, idx: number) => (
            <div className={`search-result__section ${key}`}>
              <ListSection
                title={key}
                data={data?.[key]?.items?.map(
                  ({ name, images, type, uri }: any, idx: number) => ({
                    name,
                    imageUrl: images[0]?.url,
                    description: type,
                    uri,
                  })
                )}
              />
            </div>
          ))}
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
        durationTime={item?.duration_ms}
        uri={item.uri}
        key={idx}
      />
    )),
    // TODO: 여기서부터만 반복문을 돌릴까?
    playlists: (
      <ListSection
        title={`${data?.playlists?.items?.length} playlists`}
        data={data?.playlists?.items?.map(
          ({ name, images, type, uri }: any, idx: number) => ({
            name,
            imageUrl: images[0]?.url,
            description: type,
            uri,
          })
        )}
      />
    ),
    artists: (
      <ListSection
        title={`${data?.artists?.items?.length} artists`}
        data={data?.artists?.items?.map(
          ({ name, images, type, uri }: any, idx: number) => ({
            name,
            imageUrl: images[0]?.url,
            description: type,
            uri,
          })
        )}
      />
    ),
    albums: (
      <ListSection
        title={`${data?.albums?.items?.length} albums`}
        data={data?.albums?.items?.map(
          ({ name, images, type, uri }: any, idx: number) => ({
            name,
            imageUrl: images[0]?.url,
            description: type,
            uri,
          })
        )}
      />
    ),
  };

  const location = useLocation();
  const { category = "all" } = useParams();
  const [resultComponent, setResultComponent] = useState(list[category]);

  useEffect(() => {
    setResultComponent(list[category]);
  }, [location, category]);

  if (!list[category]) return <></>;
  return (
    <div className={`search-result__section ${category}`}>
      <h2 className="search-result__title">
        {Object.keys(list)
          .filter(key => key !== "all")
          .some(key => key === category) && category}
      </h2>
      <div className="search-result__list">{resultComponent}</div>
    </div>
  );
}
