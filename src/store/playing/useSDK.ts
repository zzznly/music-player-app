import { useAtom } from "jotai";
import { deviceIDAtom } from "@store/playing/atom";

const useSDK = () => {
  const [deviceID, setDeviceID] = useAtom(deviceIDAtom);

  return {
    deviceID,
    setDeviceID,
  };
};

export default useSDK;
