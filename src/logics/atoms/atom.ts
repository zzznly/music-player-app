import { atom } from "jotai";

// Search
export const searchKeywordAtom = atom<string | any>("");
export const searchTypeAtom = atom<string | string[]>("");
export const searchFilterMenuAtom = atom<SearchFilterItem[]>([
  {
    label: "모두",
    type: "track,playlist,artist,album",
  },
  {
    label: "곡",
    type: "track",
  },
  {
    label: "플레이리스트",
    type: "playlist",
  },
  {
    label: "아티스트",
    type: "artist",
  },
  {
    label: "앨범",
    type: "album",
  },
]);
