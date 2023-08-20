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

export const useMutationPlayerStart = (device_id: string, uris: string[]) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return PlayerService.startPlayback(device_id, uris);
    },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["player.currentPlayingTrack"],
    //   });
    //   console.log("success");
    // },
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
  });
};
