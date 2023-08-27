import "./style.scss";

import { useEffect, useState } from "react";
import { useOutletContext, useParams, useLocation } from "react-router-dom";
import { searchKeywordAtom } from "@service/Search/SearchAtom";
import { convertDurationTime, setFirstLetterUpperCase } from "@utils/convert";

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
                    uri={item.uri}
                    key={idx}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="search-result__section artists">
          <h2 className="search-result__title">{Object.keys(data)[1]}</h2>
          <ul className="search-result__list">
            {data.artists?.items?.map(
              ({ name, images, type, uri }: any, idx: number) => (
                <ListItem
                  title={name}
                  imageUrl={images[0]?.url}
                  description={type}
                  uri={uri}
                  key={`item-${idx}`}
                />
              )
            )}
          </ul>
        </div>
        <div className="search-result__section albums">
          <h2 className="search-result__title">{Object.keys(data)[0]}</h2>
          <ul className="search-result__list">
            {data.albums?.items?.map(
              ({ name, images, type, uri }: any, idx: number) => (
                <ListItem
                  title={name}
                  imageUrl={images[0]?.url}
                  description={type}
                  uri={uri}
                  key={`item-${idx}`}
                />
              )
            )}
          </ul>
        </div>
        <div className="search-result__section playlists">
          <h2 className="search-result__title">{Object.keys(data)[3]}</h2>
          <ul className="search-result__list">
            {data.playlists?.items?.map(
              ({ name, images, owner, uri }: any, idx: number) => (
                <ListItem
                  title={name}
                  imageUrl={images[0]?.url}
                  description={`만든 사람: ${owner?.display_name}`}
                  uri={uri}
                  key={`item-${idx}`}
                />
              )
            )}
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
        durationTime={item?.duration_ms}
        uri={item.uri}
        key={idx}
      />
    )),
    playlists: data?.playlists?.items?.map(
      ({ name, images, owner, uri }: any, idx: number) => (
        <ListItem
          title={name}
          imageUrl={images[0]?.url}
          description={`만든 사람: ${owner?.display_name}`}
          uri={uri}
          key={`item-${idx}`}
        />
      )
    ),
    artists: data?.artists?.items?.map(
      ({ name, images, type, uri }: any, idx: number) => (
        <ListItem
          title={name}
          imageUrl={images[0]?.url}
          description={type}
          uri={uri}
          key={`item-${idx}`}
        />
      )
    ),
    albums: data?.albums?.items?.map(
      ({ name, images, type, uri }: any, idx: number) => (
        <ListItem
          title={name}
          imageUrl={images[0]?.url}
          description={type}
          uri={uri}
          key={`item-${idx}`}
        />
      )
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
