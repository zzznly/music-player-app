import { useEffect } from "react";
import useSDK from "@store/sdk/useSDK";

export default function usePlayerController(
  dependencies: any[],
  callback: () => any
) {
  const { deviceId } = useSDK();

  useEffect(() => {
    if (!deviceId) return;
    callback();
  }, dependencies);
}
