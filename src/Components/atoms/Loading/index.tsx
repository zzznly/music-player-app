// styles
import "./style.scss";

import { useLoading } from "@store/common/useLoading";
import { BeatLoader } from "react-spinners";
import { useQueryClient } from "@tanstack/react-query";

export default function LoadingSpinner() {
  const queryClient = useQueryClient();
  const { isLoading } = useLoading();

  if (!isLoading && !queryClient.isFetching() && !queryClient.isMutating())
    return null;

  return (
    <div className={`loading loading--active`}>
      <div className="loading__spinner">
        <BeatLoader color="#4343EF" size={20} loading={true} />
      </div>
    </div>
  );
}
