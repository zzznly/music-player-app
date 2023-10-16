import { useAtom } from "jotai";

import { isLoadingAtom } from "./atom";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  return {
    isLoading,
    setIsLoading,
  };
};
