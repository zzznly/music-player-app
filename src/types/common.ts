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
