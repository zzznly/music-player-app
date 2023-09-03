import "./style.scss";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { spotifyUri } from "@service/Player/PlayerAtom";
import { searchKeywordAtom } from "@service/Search/SearchAtom";

export interface ListItemProps {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  uri?: string;
  imageUrl: string;
}
export default function ListItem({
  id,
  imageUrl,
  name,
  title,
  description,
  uri,
}: ListItemProps): JSX.Element {
  const [, setUri] = useAtom(spotifyUri);
  const [, setKeyword] = useAtom(searchKeywordAtom);

  const location = useLocation();

  const clickUriItem = (uri: string | undefined) => {
    if (location.pathname === "/search") {
      setKeyword(name || title);
      return;
    }
    setUri(uri);
  };

  return (
    <li className={"list-item"} onClick={() => clickUriItem(uri)}>
      {/* <Link className={"list-item__link"} to={`/detail/playlist?id=${id}`}> */}
      <div className={"list-item__album"}>
        <img src={imageUrl} className={"list-item__album-image"} alt="album" />
      </div>
      {(name || title) && <p className={"list-item__title"}>{name || title}</p>}
      {description && <p className={"list-item__description"}>{description}</p>}
      {/* </Link> */}
    </li>
  );
}
