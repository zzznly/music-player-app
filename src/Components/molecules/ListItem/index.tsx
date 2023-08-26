import { Link } from "react-router-dom";
import "./style.scss";
import { useAtom } from "jotai";
import { spotifyUri } from "@service/Player/PlayerAtom";

export interface ListItemProps {
  id?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  uri?: string;
}
export default function ListItem({
  id,
  imageUrl,
  title,
  description,
  uri,
}: ListItemProps): JSX.Element {
  const [item_uri, setUri] = useAtom(spotifyUri);

  return (
    <li className={"list-item"} onClick={() => setUri(uri)}>
      {/* <Link className={"list-item__link"} to={`/detail/playlist?id=${id}`}> */}
      <div className={"list-item__album"}>
        <img src={imageUrl} className={"list-item__album-image"} alt="album" />
      </div>
      <p className={"list-item__title"}>{title}</p>
      <p className={"list-item__description"}>{description}</p>
      {/* </Link> */}
    </li>
  );
}
