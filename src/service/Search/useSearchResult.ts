import { useQuery } from "@tanstack/react-query";
import SearchService from "./SearchService";

// GET - Search Result
export const useSearchResult = (
  params: SearchReq,
  { enabled }: UseQueryProps
) => {
  return useQuery({
    queryKey: ["search.searchResult", params],
    queryFn: () => SearchService.getSearchResult(params),
    enabled,
  });
};
