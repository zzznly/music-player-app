interface CategoryPlaylistReq {
  category_id: string;
}
interface CategoryPlaylistRes {
  playlists: {
    href: string;
    items: any[];
  };
}

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
interface CategoriesItem {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}
