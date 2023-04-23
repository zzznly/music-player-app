import { useQuery } from "@tanstack/react-query";
import PlaylistService from "./PlaylistService";

export const usePlaylistDetail = (
  params: PlaylistReq,
  { onSuccess, enabled }: UseQueryProps = {}
) => {
  return useQuery({
    queryKey: ["playlist.detail"],
    queryFn: () => PlaylistService.getPlaylistDetail(params),
    onSuccess,
    enabled,
  });
};

// GET - Playlist Tracks
export const usePlaylistTracks = (
  params: PlaylistReq,
  { onSuccess, enabled }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["playlist.tracks"],
    // queryFn: () => getPlaylistTracks(params),
    onSuccess,
    enabled,
  });
};
