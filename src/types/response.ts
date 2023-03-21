// common
export interface Image {
  width: number;
  href: string;
  url: string;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Icon {
  width: number;
  height: number;
  url: string;
}

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

export interface SearchTracksItem {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  type: string;
  uri: string;
}

export interface SearchArtistsItem extends Artist {
  followers: {
    href: null;
    total: number;
  };
  genres: string[];
  images: Image[];
  popularity: number;
}

export interface SearchAlbumsItem extends Album {
  external_urls: {
    spotify: "https://open.spotify.com/album/2wwGHSWLwrlXDmi3DEaZ4A";
  };
}

export interface SearchTracksRes {
  tracks: SearchTracksItem[];
}

export interface SearchArtistsRes {
  artists: SearchArtistsItem[];
}

export interface SearchAlbumsRes {
  albums: SearchAlbumsItem[];
}
