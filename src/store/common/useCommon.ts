import { useAtom } from "jotai";

import { isLoadingAtom, navMenuAtom } from "./atom";

export const useCommon = () => {
  const [navMenu, setNavMenu] = useAtom(navMenuAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  return {
    navMenu,
    setNavMenu,
    isLoading,
    setIsLoading,
  };
};
