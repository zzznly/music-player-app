import ExploreIcon from "@assets/images/icon/navbar/ico-menu-explore.svg";
import ExploreIconActive from "@assets/images/icon/navbar/ico-menu-explore-active.svg";
import SearchIcon from "@assets/images/icon/ico-search.svg";
import SearchIconActive from "@assets/images/icon/ico-search-active.svg";
import MyFavoriteIcon from "@assets/images/icon/navbar/ico-menu-my-favorites.svg";
import MyFavoriteIconActive from "@assets/images/icon/navbar/ico-menu-my-favorites-active.svg";
import MyPlaylistIcon from "@assets/images/icon/navbar/ico-menu-my-playlist.svg";
import MyPlaylistIconActive from "@assets/images/icon/navbar/ico-menu-my-playlist-active.svg";
import MyArtistIcon from "@assets/images/icon/navbar/ico-menu-my-artists.svg";
import MyArtistIconActive from "@assets/images/icon/navbar/ico-menu-my-artists-active.svg";
import LogoutIcon from "@assets/images/icon/navbar/ico-menu-logout.svg";

export const NAVIGATION = {
  MENU: [
    {
      menu: "Home",
      path: "/",
      icon: ExploreIcon,
      iconActive: ExploreIconActive,
    },
    {
      menu: "Search",
      path: "/search",
      icon: SearchIcon,
      iconActive: SearchIconActive,
    },
  ],
  MY: [
    // comming soon
    {
      menu: "Playlists",
      path: "/my/playlists",
      icon: MyPlaylistIcon,
      iconActive: MyPlaylistIconActive,
    },
    {
      menu: "Favorites",
      path: "/my/favorites",
      icon: MyFavoriteIcon,
      iconActive: MyFavoriteIconActive,
    },
    {
      menu: "Artists",
      path: "/my/artists",
      icon: MyArtistIcon,
      iconActive: MyArtistIconActive,
    },
  ],
  OTHERS: [
    {
      menu: "Logout",
      path: "/logout",
      icon: LogoutIcon,
    },
  ],
} as const;
