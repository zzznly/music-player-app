import { useNavigate, useParams } from "react-router-dom";
import { debounce } from "@utils/index";

// styles
import "./style.scss";

import searchIcon from "@assets/images/icon/ico-input-search.svg";
import { useUserInfo } from "@service/User/useUser";
import { redirectToLogin } from "@utils/auth";
import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  const { data: { display_name } = {} } = useUserInfo();

  const params = useParams();
  const [keyword, setKeyword] = useState<string | undefined>("");

  useEffect(() => {
    setKeyword(params?.keyword ?? "");
  }, [params.keyword]);

  useEffect(() => {
    debounce(() => {
      navigate(`/search/${keyword}`, {
        replace: true,
      });
    }, 200);
    console.log("keyword", keyword);
  }, [keyword]);

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
