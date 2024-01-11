// styles
import { BeatLoader } from "react-spinners";
import "./style.scss";
import { isSpinnerLoading } from "@service/Common/CommonAtom";
import { useAtomValue } from "jotai";

export default function LoadingSpinner(): JSX.Element {
  const isLoading = useAtomValue(isSpinnerLoading);

  return (
    <div className={`loading ${isLoading ? "loading--active" : ""}`}>
      <div className="loading__spinner">
        <BeatLoader color="#4343EF" size={20} loading={isLoading} />
      </div>
    </div>
  );
}
