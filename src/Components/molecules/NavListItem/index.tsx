// styles
import "./style.scss";

// router
import { NavLink, useLocation } from "react-router-dom";

export default function NavListItem({ item }: { item: NavSubMenu }) {
  const location = useLocation();
  console.log("location", location);

  return (
    <li
      className={`layout__nav-bar__item ${
        location.pathname.split("/")[1] === item.path.split("/")[1]
          ? "active"
          : ""
      }`}
    >
      <NavLink
        className="layout__nav-bar__link"
        to={item.path}
        onClick={e => {
          if (item.path.includes("my")) {
            e.preventDefault();
            alert("Comming Soon"); // MY 메뉴 추후 개발
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
