import { atom } from "jotai";

import DiscoverIcon from "@assets/images/icon/ico-discover.svg";
import DiscoverIconActive from "@assets/images/icon/ico-discover-active.svg";
import SearchIcon from "@assets/images/icon/ico-search.svg";
import SearchIconActive from "@assets/images/icon/ico-search-active.svg";

interface navMenu {
  menu: string;
  link: string;
  icon: string;
  iconActive: string;
}

export const navMenu = atom<navMenu[]>([
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
]);

export const activeMenu = atom<string>("Discover");
