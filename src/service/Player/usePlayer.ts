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

export const useCurrentPlaylist = ({ onSuccess, onError }: UseQueryProps) => {
  return useQuery({
    queryKey: ["player.currentPlaylist"],
    queryFn: () => PlayerService.getPlaybackList(),
    onSuccess,
    onError,
  });
};

export const useMutationAddCurrentPlaylist = (
  device_id: string,
  uri: string | undefined
) => {
  return useMutation({
    mutationFn: () => {
      return PlayerService.addToPlaybackList(device_id, uri);
    },
    onSuccess: () => {
      console.log("added to current playlist");
    },
    onError: () => {},
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
    },
    onError: () => {},
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

export const useMutationSetRepeat = (state: string, device_id: string) => {
  return useMutation({
    mutationFn: () => PlayerService.setRepeat(state, device_id),
    onSuccess: data => {
      console.log("set repeat success", data);
    },
    onError: err => {
      console.log("set repeat error", err);
    },
  });
};

export const useMutationToggleShuffle = (state: boolean, device_id: string) => {
  return useMutation({
    mutationFn: () => PlayerService.toggleShuffle(state, device_id),
    onSuccess: data => {
      console.log("toggle shuffle success", data);
    },
    onError: err => {
      console.log("toggle shuffle error", err);
    },
  });
};
