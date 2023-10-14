// styles
import "./style.scss";

// images
import logo from "@assets/img-logo-spotify.png";

import NavLogo from "@assets/images/icon/ico-logo-mytones.svg";

// router
import { NavLink, useLocation } from "react-router-dom";
// import { useCommon } from "@store/common/useCommon";
import { navMenuAtom } from "@store/common/atom";
import { useAtom } from "jotai";

export default function NavBar() {
  const location = useLocation();
  // const { navMenu } = useCommon(); // Q: error: navMenu[menu].map is not a function
  const [navMenu] = useAtom(navMenuAtom); // 임시

  return (
    <div className="layout__nav-bar">
      <div className="layout__nav-bar__logo">
        <img src={NavLogo} alt="" />
      </div>
      <div className="layout__nav-bar__menu">
        {Object.keys(navMenu).map(menu => (
          <div className="layout__nav-bar__wrap">
            <p className="layout__nav-bar__title">{menu}</p>
            <ul className="layout__nav-bar__list">
              {navMenu[menu].map((item: NavSubMenu, idx: number) => (
                <li
                  className={`layout__nav-bar__item ${
                    location.pathname.split("/")[1] === item.path.split("/")[1]
                      ? "active"
                      : ""
                  }`}
                  key={`item-${idx}`}
                >
                  <NavLink
                    className="layout__nav-bar__link"
                    to={item.path}
                    onClick={e => {
                      // TODO: MY 메뉴 추후개발
                      if (
                        navMenu.MY.map((v: any) => v.menu).includes(item.menu)
                      ) {
                        e.preventDefault();
                        alert("Comming Soon");
                      }
                    }}
                  >
                    <img
                      src={
                        location.pathname.split("/")[1] ===
                        item.path.split("/")[1]
                          ? item.iconActive
                          : item.icon
                      }
                      className="layout__nav-bar__menu-icon"
                      alt="nav icon"
                    />
                    <p className="layout__nav-bar__menu-text">{item.menu}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
