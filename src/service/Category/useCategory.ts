// react-query
import { useQuery } from "@tanstack/react-query";

// service
import CategoryService from "@service/Category/CategoryService";

// GET - Categories
export const useCategories = ({ onSuccess }: UseQueryProps = {}) => {
  return useQuery({
    queryKey: ["category.categories"],
    queryFn: () => CategoryService.getCategories(),
    onSuccess,
  });
};

// GET - Category Playlists
export const useCategoryPlaylists = (
  params: CategoryPlaylistReq,
  { onSuccess, enabled }: UseQueryProps = {}
) => {
  return useQuery({
    queryKey: ["category.playlists"],
    queryFn: () => CategoryService.getCategoryPlaylist(params),
    onSuccess,
    enabled,
  });
};

// GET - Available Genre Seeds
export const useGenreSeeds = ({ onSuccess }: UseQueryProps = {}) => {
  return useQuery({
    queryKey: ["category.genreSeeds"],
    queryFn: () => CategoryService.getGenreSeeds(),
    onSuccess,
  });
};
