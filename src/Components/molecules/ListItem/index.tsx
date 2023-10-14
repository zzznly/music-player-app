import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import usePlaying from "@store/playing/usePlaying";

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
  const { setPlayingURL } = usePlaying();
  const location = useLocation();
  const navigate = useNavigate();

  const clickUriItem = (uri: string = "") => {
    if (location.pathname === "/search") {
      navigate(`/search/${name || title}`, {
        replace: true,
      });
      return;
    }
    setPlayingURL(uri);
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
