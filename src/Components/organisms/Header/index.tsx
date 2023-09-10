import { useLocation, useNavigate } from "react-router-dom";

import { debounce } from "@utils/index";

// styles
import "./style.scss";

import searchIcon from "@assets/images/icon/ico-input-search.svg";
import { useAtom } from "jotai";
import { searchKeywordAtom } from "@service/Search/SearchAtom";
import { ChangeEvent, useEffect, useState } from "react";
import { useUserInfo } from "@service/User/useUser";
import { redirectToLogin } from "@utils/auth";

export default function Header(): JSX.Element {
  const location = useLocation();
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
  // console.log(11111, userInfo);

  return (
    <div className="layout__header">
      <div className="layout__header-wrap">
        {/* <div className="layout__header__paging">
          <button
            className="layout__header__paging-button layout__header__paging-button--prev is-active"
            onClick={() => navigate(-1)}
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#4343ef"
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </button>
          <button
            className="layout__header__paging-button layout__header__paging-button--next"
            onClick={() => navigate(1)}
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#4343ef"
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </button>
        </div> */}
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
