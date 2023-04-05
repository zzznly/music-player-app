import { useQuery } from "@tanstack/react-query";
import RefreshTokenService from "./RefreshTokenService";

interface Props {
  onSuccess?: ({ data }: any) => void;
  enabled?: boolean;
  queryKey?: string[];
}
export const useRefreshToken = ({ onSuccess, enabled }: Props) => {
  return useQuery({
    queryKey: ["token.refresh"],
    queryFn: () => RefreshTokenService.getRefreshToken(),
    onSuccess,
    enabled,
  });
};
