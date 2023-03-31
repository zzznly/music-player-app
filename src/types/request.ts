export interface SearchReq {
  q: string;
  type: string | string[];
}

export interface CategoryPlaylistReq {
  category_id: string;
}

export interface PlaylistReq {
  playlist_id: string;
}
