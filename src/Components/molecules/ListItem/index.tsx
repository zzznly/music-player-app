import PlayButton from "@components/atoms/PlayButton";
import { Link } from "react-router-dom";
import "./style.scss";

export interface ListItemProps {
  id?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
}
export default function ListItem({
  id,
  imageUrl,
  title,
  description,
}: ListItemProps): JSX.Element {
  return (
    <li className={"list-item"}>
      <Link className={"list-item__link"} to={`/detail/playlist?id=${id}`}>
        <div className={"list-item__album"}>
          <div className={"list-item__image-wrap"}>
            <img src={imageUrl} className={"list-item__image"} alt="album" />
          </div>
          <PlayButton />
        </div>
        <p className={"list-item__title"}>{title}</p>
        <p className={"list-item__description"}>{description}</p>
      </Link>
    </li>
  );
}
