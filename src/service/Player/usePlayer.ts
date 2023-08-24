import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PlayerService from "./PlayerService";

export const usePlaybackState = ({ onSuccess, enabled }: UseQueryProps) => {
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

export const useCurrentPlaylist = ({ onSuccess }: UseQueryProps) => {
  return useQuery({
    queryKey: ["player.currentPlaylist"],
    queryFn: () => PlayerService.getPlaybackList(),
    onSuccess,
    retry: 3,
  });
};

export const useMutationPlayerStart = (
  device_id: string,
  uri: string | undefined
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return PlayerService.startPlayback(device_id, uri);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["player.currentPlaylist"] });
      console.log("play success");
    },
    onError: err => {
      console.log("play error", err);
    },
  });
};

export const useMutationPlayerPause = (device_id: string) => {
  return useMutation({
    mutationFn: () => {
      return PlayerService.pausePlayback(device_id);
    },
    onSuccess: () => {
      console.log("pause success");
    },
    onError: err => {
      console.log("pause error", err);
    },
  });
};

export const useMutationSkipNext = (device_id: string) => {
  return useMutation({
    mutationFn: () => {
      return PlayerService.skipNextTrack(device_id);
    },
    onSuccess: () => {
      console.log("skip next");
    },
    onError: err => {
      console.log("skip next error", err);
    },
  });
};

export const useMutationSkipPrev = (device_id: string) => {
  return useMutation({
    mutationFn: () => {
      return PlayerService.skipPreviousTrack(device_id);
    },
    onSuccess: () => {
      console.log("skip previous");
    },
    onError: err => {
      console.log("skip prev error", err);
    },
  });
};
