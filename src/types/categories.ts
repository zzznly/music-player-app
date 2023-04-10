export interface CategoriesItem {
  href: string;
  icons: Icon[];
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
