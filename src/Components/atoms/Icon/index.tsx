// styles
import "./style.scss";

interface IconProps {
  name: string | undefined;
  category?: string;
  width?: number;
  height?: number;
}

export default function Icon({ name, category }: IconProps) {
  return (
    <div className="icon">
      <img
        src={require(`../../../assets/images/icon${
          category ? `/${category}` : ""
        }/ico-${name}.svg`)}
        alt={`icon-${name}`}
      />
    </div>
  );
}
