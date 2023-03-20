export interface CategoriesItemIcon {
  height: number;
  url: string;
  width: number;
}

export interface CategoriesItem {
  href: string;
  icons: CategoriesItemIcon[];
  id: string;
  name: string;
}

export interface CategoriesRes {
  categories: {
    href: string;
    items: CategoriesItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
  };
}
