// styles
import "./style.scss";

// images
import logo from "@assets/img-logo-spotify.png";

import NavLogo from "@assets/images/icon/ico-logo-mytones.svg";

// router
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { activeMenu, navMenu } from "@service/Common/CommonAtom";

// 1. type, interface
// 2. utility type
// 3. Generic type

export default function NavBar() {
  const [active_menu, setActiveMenu] = useAtom(activeMenu);
  const nav_menu = useAtomValue(navMenu);

  return (
    <div className="layout__nav-bar">
      <div className="layout__nav-bar__logo">
        <img src={NavLogo} alt="" />
      </div>
      <div className="layout__nav-bar__menu">
        {Object.keys(nav_menu).map((menu, idx) => (
          <div className="layout__nav-bar__wrap">
            <p className="layout__nav-bar__title">{menu}</p>
            <ul className="layout__nav-bar__list">
              {nav_menu[menu].map((item: any, idx: number) => (
                <li
                  className={`layout__nav-bar__item ${
                    item.menu === active_menu ? "active" : ""
                  }`}
                  key={`item-${idx}`}
                >
                  <NavLink
                    className="layout__nav-bar__link"
                    to={item.link}
                    onClick={() => {
                      setActiveMenu(item.menu);
                    }}
                  >
                    <img
                      src={
                        item.menu === active_menu ? item.iconActive : item.icon
                      }
                      className="layout__nav-bar__menu-icon"
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
