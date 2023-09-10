import { atom } from "jotai";

// Search
export const searchKeywordAtom = atom<string | any>("");
export const searchTypeAtom = atom<string | string[]>("");
export const searchFilterMenuAtom = atom<SearchFilterItem[]>([
  {
    id: 0,
    label: "모두",
    type: "track,playlist,artist,album",
  },
  {
    id: 1,
    label: "곡",
    type: "track",
  },
  {
    id: 2,
    label: "플레이리스트",
    type: "playlist",
  },
  {
    id: 3,
    label: "아티스트",
    type: "artist",
  },
  {
    id: 4,
    label: "앨범",
    type: "album",
  },
]);
