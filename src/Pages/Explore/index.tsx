// styles
import "./style.scss";

// react-query
import {
  useCategories,
  useCategoryPlaylists,
} from "../../service/Category/useCategory";

// components
import ListSection from "../../components/organisms/ListSection";
import { useNewReleases } from "@service/Playlist/usePlaylist";
import { useEffect } from "react";
import PlaylistService from "@service/Playlist/PlaylistService";
import { useAtom } from "jotai";
import { spotifyUri } from "@service/Player/PlayerAtom";

const Section = ({ id, name = "" }: CategoriesItem): JSX.Element => {
  const { data: { playlists: { items = [] } = {} } = {} } =
    useCategoryPlaylists(
      {
        category_id: id,
      },
      {
        enabled: !!id,
      }
    );

  return (
    <ListSection
      title={name}
      data={items.map(
        ({ id, name, description, uri, images }: CategoryPlaylistItem) => ({
          id,
          name,
          description,
          uri,
          imageUrl: images[0].url,
        })
      )}
      hasShowMore={false}
    />
  );
};

export default function Home(): JSX.Element {
  const [, setUri] = useAtom(spotifyUri);

  const { data: { categories: { items: categoryItems = [] } = {} } = {} } =
    useCategories();

  const { data: { albums: { items: newReleaseItems = [] } = {} } = {} } =
    useNewReleases();

  const getRandomContents = (arr: any[]) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  return (
    <div className={"wrap"}>
      <div className="playlist">
        <div className="playlist__title">
          <h2>Explore</h2>
        </div>
        <div className="playlist__content">
          <div className="section section--new-release">
            <div className="section__title">
              <h2>New Release</h2>
              {/* <a className={"list__link--more"} href="/">
                See All
              </a> */}
            </div>
            <div className="section__content">
              {getRandomContents(newReleaseItems)?.map((item: any) => (
                <div
                  className="section__item"
                  style={{
                    backgroundImage: `url(${item?.images[0].url}), linear-gradient(to top, rgba(77, 77, 86, 0.231372549), rgba(77, 77, 86, 0))`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",
                  }}
                  onClick={() => setUri(item.uri)}
                >
                  <p className="section__item-name">{item?.name}</p>
                  <p className="section__item-artist">
                    {item?.artists[0].name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {categoryItems.map((item: CategoriesItem) => (
            <Section key={item.id} {...item} />
          ))}
        </div>
        {/* <div className="playlist__container"></div> */}
      </div>
    </div>
  );
}
