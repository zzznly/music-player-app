// useSDK.js
import { useAtom } from "jotai";
import { deviceIDAtom } from "@store/playing/atom";

const useSDK = () => {
  const [deviceId, setDeviceID] = useAtom<string>(deviceIDAtom);

  return {
    deviceId,
    setDeviceID,
  };
};

export default useSDK;
