interface CategoryPlaylistReq {
  category_id: string;
}
interface CategoryPlaylistRes {
  playlists: {
    href: string;
    items: any[];
  };
}
interface CategoryPlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null | string;
  public: null | boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

interface CategoriesRes {
  categories: CommonRes<CategoriesItem>;
}
interface CategoriesItem {
  href?: string;
  icons?: Icon[];
  id: string;
  name?: string;
}
