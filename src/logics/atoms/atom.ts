import { atom } from "jotai";

export const searchKeywordAtom = atom<string | any>("");
export const searchTypeAtom = atom<string | string[]>("");
export const searchFilterMenu = atom<SearchFilterItem[]>([
  {
    id: 0,
    label: "곡",
    type: "track",
  },
  {
    id: 1,
    label: "플레이리스트",
    type: "playlist",
  },
  {
    id: 2,
    label: "아티스트",
    type: "artist",
  },
  {
    id: 3,
    label: "앨범",
    type: "album",
  },
]);
