import { Album, Artist, Image } from "./common";

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
    spotify: string;
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
