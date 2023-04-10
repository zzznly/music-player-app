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
