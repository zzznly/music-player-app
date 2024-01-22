// styles
import "./style.scss";

// router
import { NavLink, useLocation } from "react-router-dom";

import Icon from "componenets/atoms/Icon";

export default function NavListItem({
  item: { menu, path, icon, iconActive },
}: {
  item: NavSubMenu;
}) {
  const location = useLocation();

  return (
    <li
      className={`layout__nav-bar__item ${
        location.pathname.split("/")[1] === path.split("/")[1] ? "active" : ""
      }`}
    >
      <NavLink
        className="layout__nav-bar__link"
        to={menu !== 'Logout' ? path : ''}
      >
        <Icon
          category={
            location.pathname.split("/")[1] === path.split("/")[1]
              ? iconActive?.category
              : icon?.category
          }
          name={
            location.pathname.split("/")[1] === path.split("/")[1]
              ? iconActive?.name
              : icon?.name
          }
        />
        <p className="layout__nav-bar__menu-text">{menu}</p>
      </NavLink>
    </li>
  );
}
