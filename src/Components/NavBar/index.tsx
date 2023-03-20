// styles
import "./style.scss";

// images
import logo from "../../../src/images/img-logo-spotify.png";

// router
import { NavLink } from "react-router-dom";

interface navMenu {
  menu: string;
  link: string;
  icon: any;
}
export default function NavBar() {
  const navMenu: navMenu[] = [
    {
      menu: "홈",
      link: "/",
      icon: (
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          fill="#fff"
        >
          <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
        </svg>
      ),
    },
    {
      menu: "검색하기",
      link: "/search",
      icon: (
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          fill="#fff"
        >
          <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
        </svg>
      ),
    },
    {
      menu: "내 라이브러리",
      link: "/",
      icon: (
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          fill="#fff"
        >
          <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className={"nav"}>
      <a href="/" className={"nav__logo"}>
        <img className={"image"} src={logo} alt="logo" />
      </a>
      <div className={"nav__menu"}>
        {navMenu.map(item => (
          <div className={"nav__item is-active"} key={navMenu.indexOf(item)}>
            <NavLink className={"nav__link"} to={item.link}>
              {item.icon}
              <p>{item.menu}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
