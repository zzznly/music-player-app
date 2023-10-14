import { useState } from "react";

import { isLoadingAtom, navMenuAtom } from "./atom";

export const useCommon = () => {
  const [navMenu, setNavMenu] = useState<any>(navMenuAtom);
  const [isLoading, setIsLoading] = useState<any>(isLoadingAtom);

  return {
    navMenu,
    setNavMenu,
    isLoading,
    setIsLoading,
  };
};
