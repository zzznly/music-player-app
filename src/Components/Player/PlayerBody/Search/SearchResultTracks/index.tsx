// styles
import "./style.scss";

import ListItem from "../../../../molecules/ListItem";
import { SearchTracksItem } from "../../../../../types/search";

// import icon from "src/images/ico-spotify.png";

export default function SearchResultTracks(): JSX.Element {
  return (
    <ul className={"songlist"}>
      <li className="songlist-head">
        <p className="songlist-head__rank">#</p>
        <p className="songlist-head__title">제목</p>
        <p className="songlist-head__albumname">앨범</p>
        <p className="songlist-head__addDate">추가한 날짜</p>
        <p className="songlist-head__runtime">
          <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-encore-id="icon"
            fill="#b3b3b3"
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
          </svg>
        </p>
      </li>
      {/* {searchResult?.map((item: SearchTracksItem, idx: number) => (
        <li className={"songlist-item"} key={item.id}>
          <button className={"songlist-item__rank"}>{idx + 1}</button>
          <div className={"songlist-item__title"}>
            <img
              className="songlist-item__title-albumimage"
              src={item.album.images[0].url}
              alt="album"
            />
            <div className={"songlist-item__title-info"}>
              <p className="songlist-item__title-name">{item.name}</p>
              <p className={"songlist-item__title-artist"}>
                {item.artists[0].name}
              </p>
            </div>
          </div>
          <p className={"songlist-item__albumname"}>{item.album.name}</p>
          <p className="songlist-item__addDate">{item.album.release_date}</p>
          <div className={"songlist-item__runtime"}>
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#b3b3b3"
            >
              <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
            </svg>
            <p className="songlist-item__duration">3:11</p>
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#fff"
            >
              <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
            </svg>
          </div>
        </li>
      ))} */}
    </ul>
  );
}
