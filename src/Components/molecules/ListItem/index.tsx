import { Link } from "react-router-dom";
import "./style.scss";

export interface ListItemProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}
export default function ListItem({
  id,
  imageUrl,
  title,
  description,
}: ListItemProps) {
  return (
    <li className={"list-item"}>
      <Link className={"list-item__link"} to={`/detail/playlist?id=${id}`}>
        <div className={"list-item__album"}>
          <img src={imageUrl} className={"list-item__image"} alt="album" />
          <button className="list-item__button--play" aria-hidden="true">
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
        </div>
        <p className={"list-item__title"}>{title}</p>
        <p className={"list-item__artists"}>{description}</p>
      </Link>
    </li>
  );
}
