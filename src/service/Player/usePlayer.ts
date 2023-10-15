import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PlayerService from "./PlayerService";
import usePlaying from "@store/playing/usePlaying";
import useSDK from "@store/sdk/useSDK";
// import useSDK from "@store/playing/useSDK";

export const usePlaybackState = ({
  onSuccess,
  enabled,
}: UseQueryProps = {}) => {
  return useQuery({
    queryKey: ["player.playbackState"],
    queryFn: () => PlayerService.getPlaybackState(),
    onSuccess,
    enabled,
  });
};

export const useCurrentPlayingTrack = ({
  onSuccess,
  enabled,
}: UseQueryProps) => {
  return useQuery({
    queryKey: ["player.currentPlayingTrack"],
    queryFn: () => PlayerService.getCurrentPlayingTrack(),
    onSuccess,
    enabled,
  });
};

// get user's queue
export const useCurrentPlaylist = ({
  onSuccess,
  onError,
}: UseQueryProps = {}) => {
  // const { deviceID } = useSDK();
  const { playingURL } = usePlaying();

  return useQuery({
    queryKey: ["player.currentPlaylist", playingURL],
    queryFn: () => PlayerService.getPlaybackList(),
    onSuccess,
    onError,
  });
};

// add to users queue
export const useMutationAddCurrentPlaylist = () => {
  const { deviceId } = useSDK();
  const { playingURL } = usePlaying();

  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["player.currentPlaylist"] });

  return useMutation({
    mutationFn: () => {
      return PlayerService.addToPlaybackList(deviceId, playingURL);
    },
    onSuccess: () => {
      console.log("added to current playlist");
    },
    onError: () => {},
  });
};

export const useMutationPlayerStart = ({
  onSuccess,
  onError,
}: UseMutationProps = {}) => {
  const { deviceId } = useSDK();
  const { playingURL } = usePlaying();

  return useMutation({
    mutationFn: (position: number) => {
      return PlayerService.startPlayback(deviceId, playingURL, position);
    },
    onSuccess,
    onError,
  });
};

export const useMutationPlayerPause = ({ onSuccess, onError }: any = {}) => {
  const { deviceId } = useSDK();

  return useMutation({
    mutationFn: () => {
      return PlayerService.pausePlayback(deviceId);
    },
    onSuccess,
    onError,
  });
};

export const useMutationSkipNext = () => {
  const { deviceId } = useSDK();

  return useMutation({
    mutationFn: () => {
      return PlayerService.skipNextTrack(deviceId);
    },
    onSuccess: () => {
      console.log("skip next");
    },
    onError: err => {
      console.log("skip next error", err);
    },
  });
};

export const useMutationSkipPrev = () => {
  const { deviceId } = useSDK();

  return useMutation({
    mutationFn: () => {
      return PlayerService.skipPreviousTrack(deviceId);
    },
    onSuccess: () => {
      console.log("skip previous");
    },
    onError: err => {
      console.log("skip prev error", err);
    },
  });
};

export const useMutationSetRepeat = (state: string) => {
  const { deviceId } = useSDK();

  return useMutation({
    mutationFn: () => PlayerService.setRepeat(state, deviceId),
    onSuccess: data => {
      console.log("set repeat success", data);
    },
    onError: err => {
      console.log("set repeat error", err);
    },
  });
};

export const useMutationToggleShuffle = (state: boolean) => {
  const { deviceId } = useSDK();

  return useMutation({
    mutationFn: () => PlayerService.toggleShuffle(state, deviceId),
    onSuccess: data => {
      console.log("toggle shuffle success", data);
    },
    onError: err => {
      console.log("toggle shuffle error", err);
    },
  });
};

export const useMutationSeekPosition = (
  position_ms: number,
  { onSuccess, onError, enabled }: UseMutationProps = {}
) => {
  const { deviceId } = useSDK();

  return useMutation({
    // @ts-ignore // Q: 이거 왜 타입에러?
    mutationFn: () => PlayerService.seekPosition(position_ms, deviceId),
    onSuccess,
    onError,
    enabled,
  });
};
