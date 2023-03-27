import { Link } from "react-router-dom";
import "./style.scss";

interface ItemProps {
  item: any;
}
export default function ListItem({ item }: ItemProps) {
  return (
    <li className={"list-item"}>
      <Link className={"list-item__link"} to={`/playlist/detail?id=${item.id}`}>
        <div className={"list-item__album"}>
          <img
            src={item.images[0].url}
            className={"list-item__image"}
            alt="album"
          />
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
        <p className={"list-item__title"}>{item.name}</p>
        <p className={"list-item__artists"}>{item.description}</p>
      </Link>
    </li>
  );
}
