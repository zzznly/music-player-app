import { useState } from "react";

// components
import SongList from "../../components/Player/PlayerBody/Search/SearchResultAll";

// styles
import "./style.scss";
import { Color } from "color-thief-react";

// react-query
import {
  // useCategoryPlaylists,
  usePlaylistDetail,
  usePlaylistTracks,
} from "../../logics/queries/useQueries";

// types
import { PlaylistDetailRes } from "../../types/playlist";
import { TrackItem } from "../../types/tracks";
import { useLocation } from "react-router-dom";

export default function DetailPage(): JSX.Element {
  const location = useLocation();
  const playlistParams = {
    playlist_id: location.search.slice(4),
  };

  const [playlistTracks, setPlaylistTracks] = useState<TrackItem[]>([]);
  const [playlistDetail, setPlaylistDetail] = useState<PlaylistDetailRes>({
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "",
    },
    followers: {
      href: null,
      total: 0,
    },
    href: "",
    id: "",
    images: [],
    name: "",
    owner: {
      display_name: "",
      external_urls: {
        spotify: "",
      },
      href: "",
      id: "",
      type: "",
      uri: "",
    },
    primary_color: null,
    public: null,
    snapshot_id: "",
    tracks: {
      href: "",
      items: [],
      limit: 0,
      next: null,
      offset: 0,
      previous: null,
      total: 0,
    },
    type: "",
    uri: "",
  });

  // usePlaylistTracks(playlistParams, {
  //   onSuccess: ({ data }) => {
  //     let arr: any[] = [];
  //     data?.items.forEach((item: { track: any }) => arr.push(item.track));
  //     setPlaylistTracks(arr);
  //   },
  //   enabled: !!location.search.includes("?id"),
  // });

  usePlaylistDetail(playlistParams, {
    onSuccess: ({ data }) => {
      setPlaylistDetail(data);
    },
    enabled: !!location.search.includes("?id"),
  });

  // useCategoryPlaylists(
  //   { category_id: window.location.search.slice(13) },
  //   {
  //     onSuccess: ({ data }) => {
  //       console.log(data);
  //     },
  //     enabled: !!location.search.includes("?category_id"),
  //   }
  // );

  // 배경 색상 밝기에 따른 텍스트 색상 지정
  const setTextColor = (hexColor: string): string => {
    const color = hexColor?.slice(1); // 색상 앞의 # 제거
    const rgb = parseInt(color, 16); // rrggbb를 10진수로 변환
    const red = (rgb >> 16) & 0xff; // red 추출
    const green = (rgb >> 8) & 0xff; // green 추출
    const blue = (rgb >> 0) & 0xff; // blue 추출

    const luma: number = 0.222 * red + 0.707 * green + 0.071 * blue;

    return luma > 128 ? "#000" : "#fff";
  };

  // 플레이리스트 총 재생시간 계산
  const getTotalDurationTime = (tracks: TrackItem[]): string => {
    const totalSeconds = tracks.reduce(
      (acc, item) => Math.floor(acc + item.duration_ms / 1000),
      0
    );
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hh = Math.floor(totalMinutes / 60);
    const mm = totalMinutes % 60;

    return `약 ${hh}${hh && "시간"} ${mm}${mm && "분"}`;
  };

  // 숫자 세자리마다 콤마 삽입
  const setComma = (value: number): string => {
    return Number(value).toLocaleString();
  };

  return (
    <div className={"playlist-detail"}>
      {playlistDetail && playlistTracks.length ? (
        <>
          <Color
            src={playlistDetail?.images[0]?.url}
            crossOrigin="anonymous"
            format="hex"
          >
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
                        src={playlistDetail?.images[0].url}
                        alt="playlist album"
                      />
                    </div>
                    <div className="playlist-detail__info">
                      <p className={"playlist-detail__type"}>
                        {playlistDetail?.type}
                      </p>
                      <h1 className={"playlist-detail__title"}>
                        {playlistDetail?.name}
                      </h1>
                      <p className={"playlist-detail__description"}>
                        {playlistDetail?.description}
                      </p>
                      <div className={"playlist-detail__about"}>
                        <p className={"playlist-detail__about-data"}>
                          좋아요{" "}
                          <strong>
                            {setComma(playlistDetail?.followers?.total) ?? "-"}
                          </strong>{" "}
                          개 •{" "}
                          <strong>
                            {playlistDetail?.tracks?.total ?? "-"}
                          </strong>
                          곡, {getTotalDurationTime(playlistTracks)}
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
            {/* <SongList searchResult={playlistTracks} /> */}
          </div>
        </>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
}
