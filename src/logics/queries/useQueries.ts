import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/api";

interface Props {
  onSuccess: ({ data }: any) => void;
}
export const useCategories = ({ onSuccess }: Props) => {
  return useQuery({
    queryKey: ["playlist.categories"],
    queryFn: () => getCategories(),
    onSuccess,
  });
};
