import "./style.scss";

import { NAVIGATION } from "@constants/navigation";

export default function NavList({ data, children }: any) {
  return <ul className="layout__nav-bar__list">{children}</ul>;
}
