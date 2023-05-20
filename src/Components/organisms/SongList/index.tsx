import SongListItem from "@components/molecules/SongListItem";
import "./style.scss";

export default function SongList({ items }: any): JSX.Element {
  return (
    <div className="songlist">
      {items?.map((item: any, idx: number) => (
        <SongListItem
          id={item.id}
          idx={idx}
          imgUrl={item.album.images[0].url}
          name={item.name}
          artist={item.artist[0].name}
          album={item.album[0].name}
          durationTime={item.duration_ms}
        />
      ))}
    </div>
  );
}
