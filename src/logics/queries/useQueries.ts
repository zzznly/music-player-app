import { useQuery } from "@tanstack/react-query";
import { getCategories, getSearchResult } from "../../api/api";
import { SearchReq } from "../../types/request";

interface Props {
  onSuccess: ({ data }: any) => void;
  enabled?: boolean;
}

// GET - Categories Playlist
export const useCategories = ({ onSuccess }: Props) => {
  return useQuery({
    queryKey: ["playlist.categories"],
    queryFn: () => getCategories(),
    onSuccess,
  });
};

// GET - Search Result
export const useSearchResult = (
  params: SearchReq,
  { onSuccess, enabled }: Props
) => {
  return useQuery({
    queryKey: ["playlist.searchResult", params],
    queryFn: () => getSearchResult(params),
    onSuccess,
    enabled,
  });
};
