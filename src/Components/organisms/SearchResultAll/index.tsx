// styles
import "./style.scss";

// components
import ListSection from "../ListSection";

export default function SearchResultAll(): JSX.Element {
  return (
    <div className={"search-result__content--all"}>
      <div className={""}>
        <ListSection title={"상위 결과"} data={[]} hasShowMore={false} />
        <ListSection title={"곡"} data={[]} hasShowMore={false} />
        <ListSection title={"플레이리스트"} data={[]} hasShowMore={false} />
        <ListSection title={"아티스트"} data={[]} hasShowMore={false} />
        <ListSection title={"앨범"} data={[]} hasShowMore={false} />
      </div>
    </div>
  );
}
