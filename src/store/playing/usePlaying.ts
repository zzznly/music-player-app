import { useEffect } from "react";
import { useAtom } from "jotai";
import { playingURLAtom, playingCategoryAtom } from "@store/playing/atom";

const usePlaying = () => {
  const [playingURL, setPlayingURL] = useAtom(playingURLAtom);
  const [playingCategory, setPlayingCategory] = useAtom(playingCategoryAtom);
  const category: string = playingURL.split(":")[1]; // todo: typing

  if (category !== "track") setPlayingCategory(category);

  return {
    category,
    playingURL,
    setPlayingURL,
    playingCategory,
  };
};

export default usePlaying;
