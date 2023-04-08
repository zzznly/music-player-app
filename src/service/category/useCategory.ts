// react-query
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

// service
import CategoryService from "./CategoryService";

interface Props {
  onSuccess?: ({ data }: any) => void;
  enabled?: boolean;
  queryKey?: string[];
}

// GET - Categories
export const useCategories = ({ onSuccess }: Props = {}) => {
  return useQuery({
    queryKey: ["category.categories"],
    queryFn: () => CategoryService.getCategories(),
    onSuccess,
  });
};

export const useCategoryPlaylists = (
  params: CategoryPlaylistReq,
  { onSuccess }: UseQueryProps = {}
) => {
  return useQuery({
    queryKey: ["category.playlists"],
    queryFn: () => CategoryService.getCategoryPlaylist(params),
    onSuccess,
  });
};
