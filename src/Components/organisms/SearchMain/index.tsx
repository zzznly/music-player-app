import { useMemo, useState } from "react";

// styles
import "./style.scss";

// react-query
import { useCategories, useGenreSeeds } from "@service/category/useCategory";

// router
import ListSection from "../ListSection";
import { useUserTopItems } from "@service/User/useUser";
import { useNavigate } from "react-router-dom";

import { GENRE_BUTTON_BG_COLORS } from "@constants/genreButtonBgColors";

export default function SearchMain(): JSX.Element {
  const { data: { categories: { items = [] } = {} } = {} } = useCategories();

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

  const { data: { items: artistsItems } = {} } = useUserTopItems({
    type: "artists",
  });
  const { data: { items: tracksItems } = {} } = useUserTopItems({
    type: "tracks",
  });
  console.log("hihihihih artistsItems", artistsItems);
  console.log("hihihihih tracksItems", tracksItems);

  const getRandomGenres = (genres: string[]) => {
    return genres.sort(() => 0.5 - Math.random()).slice(0, 9);
  };

  const navigate = useNavigate();

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
            data={obj["tracks"]
              ?.map(({ id, name, album: { images = [] } = {}, uri }: any) => ({
                id,
                name,
                uri,
                imageUrl: images?.[0]?.url,
              }))
              .slice(0, 6)}
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
                      style={{ backgroundColor: GENRE_BUTTON_BG_COLORS[idx] }}
                      onClick={() =>
                        navigate(`/search/${genre}`, {
                          replace: true,
                        })
                      }
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
