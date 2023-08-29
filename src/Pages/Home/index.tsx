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
        // Q: 데이터 가공 안하고 쓰면 왜 이미지가 안나오지?
        ({ id, images, name, description, uri }: CategoryPlaylistItem) => ({
          id,
          imageUrl: images[0].url,
          title: name,
          description,
          uri,
        })
      )}
      hasShowMore={true}
    />
  );
};

export default function Home(): JSX.Element {
  const { data: { categories: { items: categoryItems = [] } = {} } = {} } =
    useCategories();

  const {
    data: {
      // @ts-ignore
      albums: { items: newReleaseItems } = {},
    } = {},
  } = useNewReleases();

  console.log(1313, newReleaseItems);

  return (
    <div className={"wrap"}>
      <div className="playlist">
        <div className="playlist__title">
          <h2>Explore</h2>
        </div>
        <div className="playlist__content">
          <div className="section section--new-release">
            <div className="section-wrap">
              {newReleaseItems?.slice(3, 8).map((item: any) => (
                <div
                  className="section__item"
                  style={{
                    backgroundImage: `url(${item?.images[0].url}), linear-gradient(to top, rgba(77, 77, 86, 0.231372549), rgba(77, 77, 86, 0))`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",
                  }}
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
