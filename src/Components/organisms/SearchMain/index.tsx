import { useEffect, useMemo, useState } from "react";

// styles
import "./style.scss";

// react-query
import {
  useCategories,
  useGenreSeeds,
} from "../../../service/Category/useCategory";

// types
import { CategoriesItem } from "../../../types/categories";

// router
import { Link } from "react-router-dom";
import ListSection from "../ListSection";
import { useUserTopItems } from "@service/User/useUser";
import { ListItemProps } from "@components/molecules/ListItem";
import { useAtom } from "jotai";
import { searchKeywordAtom } from "@service/Search/SearchAtom";

interface CategoriesItemColored extends CategoriesItem {
  bgColor: string;
}

export default function SearchMain(): JSX.Element {
  const bgColors: string[] = [
    "#E67588",
    "#68CDE4",
    "#C275E6",
    "#E2A65F",
    "#C8E25F",
    "#8C75E6",
    "#E67575",
    "#999999",
    "#81E468",
  ];

  const { data: { categories: { items = [] } = {} } = {} } = useCategories();

  // **Question: select가 안먹어요!
  // {
  // onSuccess: () => {
  // items = items.map((v: CategoriesItemColored, idx: number) => {
  //   return { ...v, bgColor: bgColors[idx] };
  // });
  // },
  // select: data =>
  //   data.categories.items.map((v: CategoriesItemColored, idx: number) => {
  //     return { ...v, bgColor: bgColors[idx] };
  //   }),
  // }

  const { data: { genres = [] } = {} } = useGenreSeeds();

  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  const typeArr = ["artists", "tracks"];
  const [topItemsType, setType] = useState("artists");

  // TODO: useMemo 에 대해 정리하기
  const obj: any = useMemo(
    () => ({
      artists: [],
      tracks: [],
    }),
    []
  );

  useUserTopItems(
    {
      type: topItemsType,
    },
    {
      onSuccess: data => {
        obj[topItemsType] = data?.items || [];
        setType("tracks");
      },
    }
  );

  const getRandomGenres = (genres: string[]) => {
    return genres.sort(() => 0.5 - Math.random()).slice(0, 9);
  };

  const [, setKeyword] = useAtom(searchKeywordAtom);

  return (
    <div className="search-main">
      <div className="search-main__title">
        <h2>Search</h2>
      </div>
      <div className="search-main__content">
        <ListSection
          className="section--top-artists"
          title={`TOP ARTISTS`}
          data={obj["artists"].map(
            ({ images, name, popularity, uri }: any) => ({
              uri,
              name,
              description: `${popularity} Plays`,
              imageUrl: images?.[0]?.url,
            })
          )}
        />
        <div className="search-main__content-row">
          <ListSection
            className="section--top-tracks"
            title={"TOP TRACKS"}
            data={obj["tracks"]?.map(
              ({ id, name, album: { images = [] } = {}, uri }: any) => ({
                id,
                name,
                uri,
                imageUrl: images?.[0]?.url,
              })
            )}
          />
          <div className={"section section--genres"}>
            <div className={"section-wrap"}>
              <div className="list">
                <div className="list__title">
                  <h2>GENRES</h2>
                </div>
                <div className="list__content">
                  {getRandomGenres(genres).map((genre: string, idx: number) => (
                    <button
                      className="label"
                      style={{ backgroundColor: bgColors[idx] }}
                      onClick={() => setKeyword(genre)}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
