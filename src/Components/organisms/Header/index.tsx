import { useNavigate } from "react-router-dom";

import { debounce } from "@utils/index";

// styles
import "./style.scss";

import searchIcon from "@assets/images/icon/ico-input-search.svg";
import { useAtom } from "jotai";
import { searchKeywordAtom } from "@service/Search/SearchAtom";
import { ChangeEvent, useEffect } from "react";
import { useUserInfo } from "@service/User/useUser";

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useAtom(searchKeywordAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(
    debounce(() => {
      if (keyword.length)
        navigate(`/search/${keyword}`, {
          replace: true,
        });
    }, 200),
    [keyword]
  );

  const { data: { display_name } = {} } = useUserInfo();

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const requestLoginCode = () => {
    const scope = [
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-top-read",
      "user-modify-playback-state",
      "streaming",
      "user-read-email",
      "user-read-private",
    ];

    window.location.replace(
      `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${scope.join(
        "%20"
      )}&response_type=token&show_dialog=true`
    );
  };

  return (
    <div className="layout__header">
      <div className="layout__header-wrap">
        <div className="layout__header__search">
          <div className="layout__header__search-content">
            <input
              className="layout__header__input"
              type="search"
              placeholder="Search..."
              value={keyword}
              onChange={handleChange}
              // onChange={debounce(e => {
              //   console.log("debounce", e.target.value);
              //   navigate(`/search/${e.target.value}`, {
              //     replace: true,
              //   });
              // }, 200)}
              onFocus={() => {
                navigate(`/search`, {
                  replace: true,
                });
              }}
            />
            <button className="layout__header__button layout__header__button--search">
              <img src={searchIcon} />
            </button>
          </div>
        </div>
        <div className=""></div>
        <div className="layout__header__user">
          <div className="layout__header__user-image">
            <img src="" />
          </div>
          <p className="layout__header__user-name">{display_name}</p>
          <button className="layout__header__" onClick={requestLoginCode}>
            Login With Spotify 🎧
          </button>
        </div>
      </div>
    </div>
  );
}
