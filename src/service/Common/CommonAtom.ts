import { atom } from "jotai";

import ExploreIcon from "@assets/images/icon/ico-menu-explore.svg";
import ExploreIconActive from "@assets/images/icon/ico-menu-explore-active.svg";
import SearchIcon from "@assets/images/icon/ico-search.svg";
import SearchIconActive from "@assets/images/icon/ico-search-active.svg";
import MyFavoriteIcon from "@assets/images/icon/ico-menu-my-favorites.svg";
import MyFavoriteIconActive from "@assets/images/icon/ico-menu-my-favorites-active.svg";
import MyPlaylistIcon from "@assets/images/icon/ico-menu-my-playlist.svg";
import MyPlaylistIconActive from "@assets/images/icon/ico-menu-my-playlist-active.svg";
import MyArtistIcon from "@assets/images/icon/ico-menu-my-artists.svg";
import MyArtistIconActive from "@assets/images/icon/ico-menu-my-artists-active.svg";

interface Menu {
  menu: string;
  link: string;
  icon: string;
  iconActive: string;
}

interface NavMenu {
  MENU: Menu[];
  MY: Menu[];
}

export const navMenu = atom<any>({
  MENU: [
    {
      menu: "Explore",
      link: "/",
      icon: ExploreIcon,
      iconActive: ExploreIconActive,
    },
    {
      menu: "Search",
      link: "/search",
      icon: SearchIcon,
      iconActive: SearchIconActive,
    },
  ],
  MY: [
    {
      menu: "Playlists",
      link: "/",
      icon: MyPlaylistIcon,
      iconActive: MyPlaylistIconActive,
    },
    {
      menu: "Favorites",
      link: "/",
      icon: MyFavoriteIcon,
      iconActive: MyFavoriteIconActive,
    },
    {
      menu: "Artists",
      link: "/",
      icon: MyArtistIcon,
      iconActive: MyArtistIconActive,
    },
  ],
});

export const activeMenu = atom<string>("Explore");
