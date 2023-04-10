import { useQuery } from "@tanstack/react-query";
import { getPlaylistTracks } from "../../api/api";
import { PlaylistReq } from "../../types/request";

// GET - Playlist Detail
// export const usePlaylistDetail = (
//   params: PlaylistReq,
//   { onSuccess, enabled }: UseQueryProps
// ) => {
//   return useQuery({
//     queryKey: ["playlist.detail"],
//     queryFn: () => getPlaylistDetail(params),
//     onSuccess,
//     enabled,
//   });
// };
// GET - Playlist Tracks
export const usePlaylistTracks = (
  params: PlaylistReq,
  { onSuccess, enabled }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["playlist.tracks"],
    queryFn: () => getPlaylistTracks(params),
    onSuccess,
    enabled,
  });
};
