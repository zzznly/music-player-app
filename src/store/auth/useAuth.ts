// useSDK.js
import { useAtom } from "jotai";
import { tokenAtom } from "./atom";

const useAuth = () => {
  const [token, setToken] = useAtom(tokenAtom);

  return {
    token,
    setToken,
  };
};

export default useAuth;
