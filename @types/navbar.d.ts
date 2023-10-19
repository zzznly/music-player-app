interface NavSubMenu {
  menu: string;
  path: string;
  icon?: {
    name: string;
    category: string;
  };
  iconActive?: {
    name: string;
    category?: string;
  };
}

interface NavMenu {
  [key: string]: NavSubMenu[];
}
