interface NavSubMenu {
  menu: string;
  path: string;
  icon: string;
  iconActive?: string;
}

interface NavMenu {
  [key: string]: NavSubMenu[];
}
