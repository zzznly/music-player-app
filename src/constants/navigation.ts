export const NAVIGATION = {
  MENU: [
    {
      menu: "Home",
      path: "/",
      icon: { name: "menu-explore", category: "navbar" },
      iconActive: { name: "menu-explore-active", category: "navbar" },
    },
    {
      menu: "Search",
      path: "/search",
      icon: { name: "search" },
      iconActive: { name: "search-active" },
    },
  ],
  // MY: [
  //   // comming soon
  //   {
  //     menu: "Playlists",
  //     path: "/my/playlists",
  //     icon: { name: "menu-my-playlist", category: "navbar" },
  //     iconActive: { name: "menu-my-playlist-active", category: "navbar" },
  //   },
  //   {
  //     menu: "Favorites",
  //     path: "/my/favorites",
  //     icon: { name: "menu-my-favorites", category: "navbar" },
  //     iconActive: { name: "menu-my-favorites-active", category: "navbar" },
  //   },
  //   {
  //     menu: "Artists",
  //     path: "/my/artists",
  //     icon: { name: "menu-my-artists", category: "navbar" },
  //     iconActive: { name: "menu-my-artists-active", category: "navbar" },
  //   },
  // ],
  OTHERS: [
    {
      menu: "Logout",
      path: "/logout",
      icon: { name: "menu-logout", category: "navbar" },
    },
  ],
} as const;
