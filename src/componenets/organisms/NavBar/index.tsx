// styles
import "./style.scss";

// images
import NavLogo from "@assets/images/icon/ico-logo-mytones.svg";

// constants
import { NAVIGATION } from "@constants/navigation";

// components
import NavListItem from "componenets/molecules/NavListItem";
import NavList from "componenets/molecules/NavList";

type T = keyof typeof NAVIGATION;

export default function NavBar() {
  return (
    <div className="layout__nav-bar">
      <div className="layout__nav-bar__logo">
        <img src={NavLogo} alt="" />
      </div>
      <div className="layout__nav-bar__menu">
        {Object.keys(NAVIGATION).map(menu => {
          return (
            <div className="layout__nav-bar__wrap">
              <p className="layout__nav-bar__title">{menu}</p>
              <NavList>
                {NAVIGATION[menu as keyof typeof NAVIGATION].map(
                  (item: any, idx: number) => {
                    return <NavListItem {...{ item }} key={idx} />;
                  }
                )}
              </NavList>
            </div>
          );
        })}
      </div>
    </div>
  );
}
