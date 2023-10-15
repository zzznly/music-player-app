import { useAtom } from "jotai";

import { isLoadingAtom } from "./atom";

export const useCommon = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  return {
    isLoading,
    setIsLoading,
  };
};
