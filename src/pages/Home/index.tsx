// styles
import "./style.scss";

// query
import { useCategories } from "@service/Category/useCategory";

// service
import { useNewReleases } from "@service/Playlist/usePlaylist";

// store
import usePlaying from "@store/playing/usePlaying";

// components
import { HomeSection } from "@components/organisms/HomeSection";

export default function Home() {
  const { setPlayingURL } = usePlaying();

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
                  onClick={() => setPlayingURL(item.uri)}
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
            <HomeSection key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
