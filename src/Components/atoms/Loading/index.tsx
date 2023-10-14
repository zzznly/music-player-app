// styles
import "./style.scss";

import { useCommon } from "@store/common/useCommon";
import { BeatLoader } from "react-spinners";

export default function LoadingSpinner(): JSX.Element {
  const { isLoading } = useCommon();

  return (
    <div className={`loading ${isLoading ? "loading--active" : ""}`}>
      <div className="loading__spinner">
        {/* Q: loading 타입 에러 */}
        {/* <BeatLoader color="#4343EF" size={20} loading={isLoading} /> */}
      </div>
    </div>
  );
}
