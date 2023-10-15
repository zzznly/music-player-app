// useSDK.js
import { useAtom } from "jotai";
import {
  deviceIDAtom,
  currentTrackAtom,
  currentPositionAtom,
  isPausedAtom,
  durationMsAtom,
} from "./atom";

const useSDK = () => {
  const [deviceId, setDeviceId] = useAtom<string>(deviceIDAtom);
  const [currentTrack, setTrack] = useAtom(currentTrackAtom);
  const [currentPosition, setPosition] = useAtom(currentPositionAtom);
  const [isPaused, setPaused] = useAtom(isPausedAtom);
  const [durationMs, setDurationMs] = useAtom(durationMsAtom);

  return {
    deviceId,
    setDeviceId,
    currentTrack,
    setTrack,
    currentPosition,
    setPosition,
    isPaused,
    setPaused,
    durationMs,
    setDurationMs,
  };
};

export default useSDK;
