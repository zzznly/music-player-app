import axios from "../../utils/axios";

// components
import SearchResultSongList from "../../_Components/Player/PlayerBody/Search/SearchResultSongList";

// styles
import "./style.scss";
import Color, { Palette } from "color-thief-react";
import { getPlaylistTracks } from "../../api/api";
import { usePlaylistTracks } from "../../logics/queries/useQueries";
import { useState } from "react";

export default function PlaylistDetail() {
  const list: any[] = [];

  const setTextColor = (hexColor: any) => {
    const c = hexColor?.substring(1); // 색상 앞의 # 제거
    const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff; // red 추출
    const g = (rgb >> 8) & 0xff; // green 추출
    const b = (rgb >> 0) & 0xff; // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luma < 127.5 ? "#fff" : "#000";
  };

  const [playlistTracks, setPlaylistTracks] = useState<any[]>([]);
  usePlaylistTracks({
    onSuccess: ({ data }) => {
      console.log(data?.items);

      let arr: any[] = [];
      data?.items.forEach((item: { track: any }) => arr.push(item.track));
      setPlaylistTracks(arr);
    },
  });

  return (
    <div className={"playlist-detail"}>
      <Color
        src={"https://i.scdn.co/image/ab67706f000000023c53e0635c196de9aa0be704"}
        crossOrigin="anonymous"
        format="hex"
      >
        {({ data }) => {
          return (
            <div
              className={"playlist-detail__head"}
              style={{ background: `${data}`, color: setTextColor(data) }}
            >
              <div className={"playlist-detail__album"}>
                <img
                  className={"playlist-detail__album-image"}
                  src="https://i.scdn.co/image/ab67706f000000023c53e0635c196de9aa0be704"
                  alt="playlist album"
                />
              </div>
              <div className="playlist-detail__info">
                <p className={"playlist-detail__type"}>플레이리스트</p>
                <h1 className={"playlist-detail__title"}>
                  TrenChill K-Hip Hop
                </h1>
                <p className={"playlist-detail__description"}>
                  Trendy x Chill K-Hip Hop. (Cover: CODE KUNST) (트렌디 x 칠!
                  세련되고 듣기 편한 힙합음악들을 즐겨보세요.)
                </p>
                <div className={"playlist-detail__about"}>
                  <p className={"playlist-detail__about-data"}>
                    좋아요 <strong>183,139</strong> 개 • <strong>100</strong>
                    곡, 약 5시간 30분
                  </p>
                </div>
              </div>
            </div>
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
    </div>
  );
}
