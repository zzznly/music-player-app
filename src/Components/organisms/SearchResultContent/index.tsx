// styles
import "./style.scss";

// components
import ListItem from "@components/molecules/ListItem";

// router
import { useOutletContext } from "react-router-dom";

export default function SearchResultContent(): JSX.Element {
  const data: any = useOutletContext();
  console.log("outlet", data, Object.keys(data));
  return (
    <div className={"search-result__content"}>
      {data[Object.keys(data)[0]] && (
        <>
          <div className="search-result__section">
            <h2 className="search-result__title">모두</h2>
            <div className="search-result__list"></div>
          </div>
        </>
      )}
    </div>
  );
}
