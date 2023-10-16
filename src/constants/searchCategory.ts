type Category = "ALL" | "TRACK" | "PLAYLIST" | "ARTIST" | "ALBUM";
type CategoryInfo = {
  label: string;
  params: string;
  path: string;
};

export const CATEGORY: Record<Category, CategoryInfo> = {
  ALL: {
    label: "모두",
    params: "track,playlist,artist,album",
    path: "",
  },
  TRACK: {
    label: "곡",
    params: "track",
    path: "tracks",
  },
  PLAYLIST: {
    label: "플레이리스트",
    params: "playlist",
    path: "playlists",
  },
  ARTIST: {
    label: "아티스트",
    params: "artist",
    path: "artists",
  },
  ALBUM: {
    label: "앨범",
    params: "album",
    path: "albums",
  },
} as const;
