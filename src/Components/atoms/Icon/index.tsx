// styles
import "./style.scss";

interface IconProps {
  name: string;
  isActive?: boolean;
}

export default function Icon({ name, isActive }: IconProps) {
  // name, active
  const icon = require(`./src/assets/images/icon/player/ico-${name}${
    isActive ? "active" : ""
  }`);

  return (
    <div className="icon">
      <img src={icon} alt={`Icon`} />
    </div>
  );
}
