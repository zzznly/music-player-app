import { useAtom } from "jotai";
import { authUrlAtom } from "./atom";

export const useAuthStore = () => {
  const [authUrl] = useAtom<string>(authUrlAtom);
  //   const [scope, setScope] = useAtom<string[]>(scopeAtom);

  const requestLoginCode = () => {
    window.location.replace(authUrl);
  };

  return {
    authUrl,
    requestLoginCode,
    // scope,
    // setScope,
  };
};
