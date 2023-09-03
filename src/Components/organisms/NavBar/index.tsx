// styles
import "./style.scss";

// images
import logo from "@assets/img-logo-spotify.png";

import NavLogo from "@assets/images/icon/ico-logo-mytones.svg";

// router
import { NavLink, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { activeMenu, navMenu } from "@service/Common/CommonAtom";

// 1. type, interface
// 2. utility type
// 3. Generic type

export default function NavBar() {
  const location = useLocation();
  const nav_menu = useAtomValue(navMenu);
  const [active_menu, setActiveMenu] = useAtom(activeMenu);

  return (
    <div className="layout__nav-bar">
      <div className="layout__nav-bar__logo">
        <img src={NavLogo} alt="" />
      </div>
      <div className="layout__nav-bar__menu">
        {Object.keys(nav_menu).map(menu => (
          <div className="layout__nav-bar__wrap">
            <p className="layout__nav-bar__title">{menu}</p>
            <ul className="layout__nav-bar__list">
              {nav_menu[menu].map((item: NavSubMenu, idx: number) => (
                <li
                  className={`layout__nav-bar__item ${
                    item.path === location.pathname ? "active" : ""
                  }`}
                  key={`item-${idx}`}
                >
                  <NavLink
                    className="layout__nav-bar__link"
                    to={item.path}
                    onClick={e => {
                      if (nav_menu.MY.map(v => v.menu).includes(item.menu)) {
                        e.preventDefault();
                        alert("Comming Soon");
                      }
                    }}
                  >
                    <img
                      src={
                        item.path === location.pathname
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
