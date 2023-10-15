import { useEffect } from "react";
import { useAtom } from "jotai";
import { playingURLAtom, playingCategoryAtom } from "@store/playing/atom";

const usePlaying = () => {
  const [playingURL, setPlayingURL] = useAtom(playingURLAtom);
  const [playingCategory, setPlayingCategory] = useAtom(playingCategoryAtom);
  const urlCategory: string = playingURL.split(":")[1]; // todo: typing

  if (urlCategory !== "track") setPlayingCategory(urlCategory);

  return {
    urlCategory,
    playingURL,
    setPlayingURL,
    playingCategory,
  };
};

export default usePlaying;
