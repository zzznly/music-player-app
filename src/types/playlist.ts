import { TrackItem } from "./tracks";

export interface PlaylistDetailRes {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
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
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    items: {
      added_at: string;
      added_by: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      is_local: boolean;
      primary_color: null | string;
      track: TrackItem;
      video_thumbnail: {
        url: null | string;
      };
    }[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  type: string;
  uri: string;
}
