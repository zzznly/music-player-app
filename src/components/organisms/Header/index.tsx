// react
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// styles
import "./style.scss";

// service
import { useUserInfo } from "@service/User/useUser";

// components
import Icon from "@components/atoms/Icon";
import { debounce } from "@utils/index";
import { useDebounce } from "@hooks/useDebounce";

export default function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: { display_name } = {} } = useUserInfo();

  const params = useParams();
  const [keyword, setKeyword] = useState("");

  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    if (!params?.keyword) return;
    setKeyword(params?.keyword);
  }, [params.keyword]);

  useEffect(() => {
    if (location.pathname.includes("search"))
      navigate(!debouncedKeyword ? "/search" : `/search/${debouncedKeyword}`, {
        replace: true,
      });
  }, [debouncedKeyword]);

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
              onChange={(e) => {
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
              <Icon name="input-search" />
            </button>
          </div>
        </div>
        <div className=""></div>
        <div className="layout__header__user">
          <div className="layout__header__user-image">
            <img src="" />
          </div>
          <p className="layout__header__user-name">{display_name}</p>
        </div>
      </div>
    </div>
  );
}
