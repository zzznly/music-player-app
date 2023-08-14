import { useLocation, useNavigate } from "react-router-dom";

import { debounce } from "@utils/index";

// styles
import "./style.scss";

import searchIcon from "@assets/images/icon/ico-input-search.svg";

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="layout__header">
      <div className="layout__header-wrap">
        <div className="layout__header__paging">
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
              fill="#ffffff"
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
              fill="#ffffff"
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`layout__header__search 
          ${
            // location.pathname.includes("search") &&
            `layout__header__search--show`
          }
          `}
        >
          <div className="layout__header__search-content">
            <input
              className="layout__header__input"
              type="search"
              placeholder="Search..."
              onChange={debounce(e => {
                console.log("debounce", e.target.value);
                navigate(`/search/${e.target.value}`, {
                  replace: true,
                });
              }, 200)}
              onFocus={debounce(e => {
                console.log("debounce", e.target.value);
                navigate(`/search/${e.target.value}`, {
                  replace: true,
                });
              }, 200)}
            />
            <button className="layout__header__button layout__header__button--search">
              <img src={searchIcon} />
            </button>
          </div>
        </div>
        {/* 유저정보 - 보류 */}
        {/* <div className="layout__header__user-menu">
          <button className="layout__header__user-button">
            <div className="layout__header__user-icon">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                fill="#ffffff"
              >
                <path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path>
              </svg>
            </div>
            <p className="layout__header__user-name">Truth Yoo</p>
          </button>
        </div> */}
      </div>
    </div>
  );
}
