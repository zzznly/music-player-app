// styles
import "./style.scss";

// images
import logo from "@assets/img-logo-spotify.png";
import DiscoverIcon from "@assets/images/icon/ico-discover.svg";
import DiscoverIconActive from "@assets/images/icon/ico-discover-active.svg";
import SearchIcon from "@assets/images/icon/ico-search.svg";
import SearchIconActive from "@assets/images/icon/ico-search-active.svg";

import NavLogo from "@assets/images/icon/ico-logo-mytones.svg";

// router
import { NavLink } from "react-router-dom";
import { useState } from "react";

// 1. type, interface
// 2. utility type
// 3. Generic type

interface navMenu {
  menu: string;
  link: string;
  icon: string;
  iconActive: string;
}
export default function NavBar() {
  const navMenu: navMenu[] = [
    {
      menu: "Discover",
      link: "/",
      icon: DiscoverIcon,
      iconActive: DiscoverIconActive,
    },
    {
      menu: "Search",
      link: "/search",
      icon: SearchIcon,
      iconActive: SearchIconActive,
    },
  ];

  const [activeMenu, setActiveMenu] = useState<string>("Discover");

  return (
    <div className="layout__nav-bar">
      <div className="layout__nav-bar__logo">
        <img src={NavLogo} alt="" />
      </div>
      <div className="layout__nav-bar__menu">
        <div className="layout__nav-bar__wrap">
          <p className="layout__nav-bar__title">MENU</p>
          <ul className="layout__nav-bar__list">
            {navMenu.slice(0, 2).map(item => (
              <li
                className={`layout__nav-bar__item ${
                  item.menu === activeMenu ? "active" : ""
                }`}
                key={navMenu.indexOf(item)}
              >
                <NavLink
                  className="layout__nav-bar__link"
                  to={item.link}
                  onClick={() => {
                    setActiveMenu(item.menu);
                  }}
                >
                  <img
                    src={item.menu === activeMenu ? item.iconActive : item.icon}
                    className="layout__nav-bar__menu-icon"
                  />
                  <p className="layout__nav-bar__menu-text">{item.menu}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
