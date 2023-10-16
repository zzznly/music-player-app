// styles
import "./style.scss";

// images
import NavLogo from "@assets/images/icon/ico-logo-mytones.svg";

// router
import { NavLink, useLocation } from "react-router-dom";

// constants
import { NAVIGATION } from "@constants/navigation";

// components
import NavListItem from "@components/molecules/NavListItem";

type T = keyof typeof NAVIGATION;

export default function NavBar() {
  return (
    <div className="layout__nav-bar">
      <div className="layout__nav-bar__logo">
        <img src={NavLogo} alt="" />
      </div>
      <div className="layout__nav-bar__menu">
        {Object.keys(NAVIGATION).map(menu => (
          <div className="layout__nav-bar__wrap">
            <p className="layout__nav-bar__title">{menu}</p>
            <ul className="layout__nav-bar__list">
              {NAVIGATION[menu as keyof typeof NAVIGATION].map(
                (item: NavSubMenu, idx: number) => {
                  const props = { item, idx };
                  return <NavListItem {...props} />;
                }
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
