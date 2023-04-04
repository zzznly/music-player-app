// react-query
import { useQuery } from "@tanstack/react-query";

// service
import CategoryService from "./CategoryService";

interface Props {
  onSuccess?: ({ data }: any) => void;
  enabled?: boolean;
  queryKey?: string[];
}

// GET - Categories
export const useCategories = ({ enabled }: Props) => {
  return useQuery({
    queryKey: ["playlist.categories"],
    queryFn: () => CategoryService.getCategories(),
    enabled,
  });
};
