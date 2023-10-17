import { useLocation, useNavigate, useParams } from "react-router-dom";
import { debounce } from "@utils/index";

// styles
import "./style.scss";

import searchIcon from "@assets/images/icon/ico-input-search.svg";
import { useUserInfo } from "@service/User/useUser";
import { redirectToLogin } from "@utils/auth";
import { useCallback, useEffect, useState } from "react";
import { search } from "spotify-web-sdk";

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: { display_name } = {} } = useUserInfo();

  const params = useParams();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (!params?.keyword) return;
    setKeyword(params?.keyword);
  }, [params.keyword]);

  useEffect(() => {
    navigate(!keyword ? "/search" : `/search/${keyword}`, {
      replace: true,
    });
  }, [keyword]);

  useEffect(() => {
    if (!location.pathname.includes("search")) {
      setKeyword("");
    }
  }, [location]);

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
              onChange={e => {
                setKeyword(e.target.value);
              }}
              onFocus={() => {
                if (!location.pathname.includes("search"))
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
          {/* <button
            className="layout__header__"
            onClick={() => redirectToLogin()}
          >
            Login
          </button> */}
        </div>
      </div>
    </div>
  );
}
