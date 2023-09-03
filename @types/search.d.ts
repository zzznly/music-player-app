interface SearchReq {
  q: string;
  type: string | string[] | undefined;
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
