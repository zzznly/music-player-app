import { useState } from "react";

// components
import SearchResultSongList from "../../components/Player/PlayerBody/Search/SearchResultSongList";

// styles
import "./style.scss";
import { Color } from "color-thief-react";

// react-query
import {
  usePlaylistDetail,
  usePlaylistTracks,
} from "../../logics/queries/useQueries";

// types
import { PlaylistDetailRes } from "../../types/playlist";
import { TrackItem } from "../../types/tracks";

export default function PlaylistDetail(): JSX.Element {
  // 배경 색상 밝기에 따른 텍스트 색상 설정
  const setTextColor = (hexColor: string): string => {
    const color = hexColor?.slice(1); // 색상 앞의 # 제거
    const rgb = parseInt(color, 16); // rrggbb를 10진수로 변환
    const red = (rgb >> 16) & 0xff; // red 추출
    const green = (rgb >> 8) & 0xff; // green 추출
    const blue = (rgb >> 0) & 0xff; // blue 추출

    const luma: number = 0.222 * red + 0.707 * green + 0.071 * blue;

    return luma > 128 ? "#000" : "#fff";
  };

  const playlistParams = {
    playlist_id: window.location.search.slice(4),
  };
  const [playlistTracks, setPlaylistTracks] = useState<TrackItem[]>([]);
  usePlaylistTracks(playlistParams, {
    onSuccess: ({ data }) => {
      console.log(data?.items);

      let arr: any[] = [];
      data?.items.forEach((item: { track: any }) => arr.push(item.track));
      setPlaylistTracks(arr);
    },
  });

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
  usePlaylistDetail(playlistParams, {
    onSuccess: ({ data }) => {
      console.log(data);
      setPlaylistDetail(data);
    },
  });

  const getTotalDurationTime = (tracks: TrackItem[]): string => {
    const totalSeconds = tracks.reduce(
      (acc, item) => Math.floor(acc + item.duration_ms / 1000),
      0
    );
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hh = Math.floor(totalMinutes / 60);
    const mm = totalMinutes % 60;

    return `약 ${hh}시간 ${mm}분`;
  };

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
            <button>play</button>
            <button>like</button>
            <button>more</button>
          </div>
          <div className={"playlist-detail__content"}>
            <SearchResultSongList searchResult={playlistTracks} />
          </div>
        </>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
}
