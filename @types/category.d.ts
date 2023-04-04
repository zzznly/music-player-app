interface CategoriesRes {
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
