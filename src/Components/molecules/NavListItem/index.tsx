// styles
import "./style.scss";

// router
import { NavLink, useLocation } from "react-router-dom";

// constants
import { NAVIGATION } from "@constants/navigation";

export default function NavListItem({
  item,
  idx,
}: {
  item: NavSubMenu;
  idx: number;
}) {
  const location = useLocation();

  return (
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
          // MY 메뉴 추후개발
          if (
            NAVIGATION.MY.map(({ menu }: { menu: string }) => menu).includes(
              item.menu
            )
          ) {
            e.preventDefault();
            alert("Comming Soon");
          }
        }}
      >
        <img
          src={
            location.pathname.split("/")[1] === item.path.split("/")[1]
              ? item.iconActive
              : item.icon
          }
          className="layout__nav-bar__menu-icon"
          alt="nav icon"
        />
        <p className="layout__nav-bar__menu-text">{item.menu}</p>
      </NavLink>
    </li>
  );
}
