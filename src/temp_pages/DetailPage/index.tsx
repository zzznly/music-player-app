// components
// import SongList from "../../components/organisms/SongList";

// styles
import "./style.scss";
import { Color } from "color-thief-react";

// react-query
import { usePlaylistDetail } from "../../service/Playlist/usePlaylist";

// router
import { useLocation } from "react-router-dom";

// types
import {
  getTotalDurationTime,
  setComma,
  setTextColor,
} from "../../utils/convert";

export default function DetailPage(): JSX.Element {
  const location = useLocation();
  const {
    data: {
      description = "",
      followers = {},
      images = [],
      name = "",
      tracks = {},
      type = "",
    } = {},
  } = usePlaylistDetail({
    playlist_id: location.search.slice(4),
  });

  return (
    <div className={"playlist-detail"}>
      {tracks.items ? (
        <>
          <Color src={images[0]?.url} crossOrigin="anonymous" format="hex">
            {({ data }) => {
              return data ? (
                <>
                  <div
                    className={"playlist-detail__head"}
                    style={{
                      background: `${data}`,
                      color: setTextColor(data),
                    }}
                  >
                    <div className={"playlist-detail__head-filter"}></div>
                    <div className={"playlist-detail__album"}>
                      <img
                        className={"playlist-detail__album-image"}
                        src={images[0].url}
                        alt="playlist album"
                      />
                    </div>
                    <div className="playlist-detail__info">
                      <p className={"playlist-detail__type"}>{type}</p>
                      <h1 className={"playlist-detail__title"}>{name}</h1>
                      <p className={"playlist-detail__description"}>
                        {description}
                      </p>
                      <div className={"playlist-detail__about"}>
                        <p className={"playlist-detail__about-data"}>
                          좋아요{" "}
                          <strong>{setComma(followers.total) ?? "-"}</strong> 개
                          • <strong>{tracks.items.total ?? "-"}</strong>
                          곡, {getTotalDurationTime(tracks.items)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h2>No Color Data</h2>
              );
            }}
          </Color>
          <div className="playlist-detail__controller-bar">
            <button className="button--play" aria-hidden="true">
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
              >
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            </button>{" "}
            <button className="button--like">
              <svg
                role="img"
                height="32"
                width="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                fill="#fff"
              >
                <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
              </svg>
            </button>
            <button>more</button>
          </div>
          <div className={"playlist-detail__content"}>
            {/* <SongList items={tracks.items} /> */}
          </div>
        </>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
}
