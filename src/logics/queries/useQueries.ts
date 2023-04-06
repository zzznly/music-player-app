import { useQuery } from "@tanstack/react-query";
import {
  getCategoryPlaylist,
  getFeaturedPlaylists,
  getPlaylistDetail,
  getPlaylistTracks,
} from "../../api/api";
import {
  CategoryPlaylistReq,
  PlaylistReq,
  SearchReq,
} from "../../types/request";

// GET - Featured Playlists
export const useFeaturedPlaylists = ({ onSuccess }: UseQueryProps) => {
  return useQuery({
    queryKey: ["playlist.featuredPlaylists"],
    queryFn: () => getFeaturedPlaylists(),
    onSuccess,
  });
};

// GET - Category's Playlists
export const useCategoryPlaylists = (
  params: CategoryPlaylistReq,
  { onSuccess }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["playlist.categoryPlaylists"],
    queryFn: () => getCategoryPlaylist(params),
    onSuccess,
  });
};

// GET - Playlist Detail
export const usePlaylistDetail = (
  params: PlaylistReq,
  { onSuccess, enabled }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["playlist.detail"],
    queryFn: () => getPlaylistDetail(params),
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
    queryFn: () => getPlaylistTracks(params),
    onSuccess,
    enabled,
  });
};
