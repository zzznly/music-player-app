import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getCategoryPlaylist,
  getFeaturedPlaylists,
  getSearchResult,
} from "../../api/api";
import { CategoryPlaylistReq, SearchReq } from "../../types/request";

interface UseQueryProps {
  onSuccess: ({ data }: any) => void;
  enabled?: boolean;
  queryKey?: string[];
}

// GET - Categories Playlist
export const useCategories = ({ onSuccess }: UseQueryProps) => {
  return useQuery({
    queryKey: ["playlist.categories"],
    queryFn: () => getCategories(),
    onSuccess,
  });
};

// GET - Search Result
export const useSearchResult = (
  params: SearchReq,
  { onSuccess, enabled }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["search.searchResult", params],
    queryFn: () => getSearchResult(params),
    onSuccess,
    enabled,
  });
};

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
