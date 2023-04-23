interface SearchReq {
  q: string;
  type: string | string[];
}
interface SearchFilterItem {
  id: number;
  label: string;
  type: string;
}

interface SearchRes {
  albums?: CommonRes<any>;
  artists?: CommonRes<any>;
  tracks?: CommonRes<TrackRes>;
  playlists?: CommonRes<any>;
}

interface CommonRes<T> {
  href: string;
  limit: number;
  next: string;
  items: T[];
  offset: number;
  previous: null;
  total: number;
}
