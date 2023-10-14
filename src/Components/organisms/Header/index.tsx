import { useLocation, useNavigate, useParams } from "react-router-dom";
import { debounce } from "@utils/index";

// styles
import "./style.scss";

import searchIcon from "@assets/images/icon/ico-input-search.svg";
import { useUserInfo } from "@service/User/useUser";
import { redirectToLogin } from "@utils/auth";
import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: { display_name } = {} } = useUserInfo();

  const params = useParams();
  const [keyword, setKeyword] = useState<string | undefined>("");

  useEffect(() => {
    if (params?.keyword?.length) setKeyword(params?.keyword);
  }, [params.keyword]);

  // useEffect(() => {
  //   if (keyword?.length)
  //     navigate(`/search/${keyword}`, {
  //       replace: true,
  //     });
  // }, [keyword]);

  useEffect(() => {
    if (keyword?.length) navigate(`/search/${keyword}`, { replace: true });
    // debounce(() => {
    //   navigate(`/search/${keyword}`, { replace: true });
    // }, 200);
  }, [keyword]);

  useEffect(() => {
    if (!location.pathname.includes("search")) {
      setKeyword("");
    }
  }, [location]);

  console.log(222, params, location);

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
              // onChange={debounce(e => {
              //   setKeyword(e.target.value);
              // }, 200)}
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
