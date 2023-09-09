import { useQuery } from "@tanstack/react-query";
import UserService from "./UserService";

export const useUserTopItems = (
  params: UserTopItemsReq,
  { onSuccess }: UseQueryProps = {}
) => {
  return useQuery({
    queryFn: () => UserService.getUsersTopItems(params),
    queryKey: ["user.topItems", params.type],
    onSuccess,
  });
};

export const useUserInfo = ({ onSuccess, onError }: UseQueryProps = {}) => {
  return useQuery({
    queryFn: () => UserService.getUserInfo(),
    queryKey: ["user.userInfo"],
    onSuccess,
    onError,
  });
};
