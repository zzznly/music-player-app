import { useQuery } from "@tanstack/react-query";
import CategoryPlaylistService from "./CategoryPlaylistService";

// GET - Category's Playlists
export const useCategoryPlaylists = (
  params: CategoryPlaylistReq,
  { onSuccess }: UseQueryProps = {}
) => {
  return useQuery({
    queryKey: ["playlist.categoryPlaylists"],
    queryFn: () => CategoryPlaylistService.getCategoryPlaylist(params),
    onSuccess,
  });
};
