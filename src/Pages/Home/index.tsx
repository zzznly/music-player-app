// styles
import "./style.scss";

// react-query
import {
  useCategories,
  useCategoryPlaylists,
} from "../../service/Category/useCategory";

// components
import ListSection from "../../components/organisms/ListSection";

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
        ({ id, images, name, description }: CategoryPlaylistItem) => ({
          id,
          imageUrl: images[0].url,
          title: name,
          description,
        })
      )}
      hasShowMore={true}
    />
  );
};

export default function Home(): JSX.Element {
  const { data: { categories: { items = [] } = {} } = {} } = useCategories();
  return (
    <div className={"wrap"}>
      <div className="playlist">
        <div className="playlist__container">
          <h2 className="playlist__title">Explore</h2>
          <div className="playlist__content">
            {items.map((item: CategoriesItem) => (
              <Section key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="player">
        <div className="player__now-playing">
          <h2 className="player__title">NOW PLAYING</h2>
          <ul className="player__list">
            <li className="player__song">
              <div className="player__song-index">01</div>
              <div className="player__song-album">
                <img
                  className="player__song-album-image"
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F658%2F2023%2F07%2F25%2F0000047479_001_20230725030416726.jpg&type=sc960_832"
                />
              </div>
              <div className="player__song-info">
                <p className="player__song-name">Cool With You</p>
                <p className="player__song-artist">New Jeans</p>
              </div>
              <div className="player__song-runtime">02:27</div>
              {/* <button className="player__song-button-more">..</button> */}
            </li>
            <li className="player__song">
              <div className="player__song-index">02</div>
              <div className="player__song-album">
                <img
                  className="player__song-album-image"
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F658%2F2023%2F07%2F25%2F0000047479_001_20230725030416726.jpg&type=sc960_832"
                />
              </div>
              <div className="player__song-info">
                <p className="player__song-name">ETA</p>
                <p className="player__song-artist">New Jeans</p>
              </div>
              <div className="player__song-runtime">02:27</div>
              {/* <button className="player__song-button-more">..</button> */}
            </li>
            <li className="player__song">
              <div className="player__song-index">03</div>
              <div className="player__song-album">
                <img
                  className="player__song-album-image"
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F658%2F2023%2F07%2F25%2F0000047479_001_20230725030416726.jpg&type=sc960_832"
                />
              </div>
              <div className="player__song-info">
                <p className="player__song-name">Super Shy</p>
                <p className="player__song-artist">New Jeans</p>
              </div>
              <div className="player__song-runtime">02:34</div>
              {/* <button className="player__song-button-more">..</button> */}
            </li>
          </ul>
        </div>
        <div className="player__container">
          <h2 className="player__container-title">NOW PLAYING</h2>
          <div className="player__container-album"></div>
          <div className="player__container-song-info">
            <p className="player__container-song-name">Dynamite</p>
            <p className="player__container-song-artist">BTS</p>
          </div>
          <div className="player__bar">
            <div className="player__progress"></div>
            <div className="player__time">
              <div className="player__time-left">2:18</div>
              <div className="player__time-left">4:15</div>
            </div>
          </div>
          <div className="player__controller"></div>
        </div>
      </div>
    </div>
  );
}
