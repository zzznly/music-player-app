// styles
import "./style.scss";

import { useLoading } from "@store/common/useLoading";
import { BeatLoader } from "react-spinners";
import { useQueryClient } from "@tanstack/react-query";

export default function Loading() {
  const queryClient = useQueryClient();
  const { isLoading } = useLoading();

  if (!isLoading && !queryClient.isFetching() && !queryClient.isMutating())
    return null;

  return (
    <div className="loading">
      <div className="loading__loader">
        <BeatLoader color="#4343EF" size={20} />
      </div>
    </div>
  );
}
