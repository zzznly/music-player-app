import { useState } from "react";

// react-query
import { useCategories } from "../../logics/queries/useQueries";

// components
import HomeSection from "../../_Components/Player/PlayerBody/Home/HomeSection";

// styles
import "./style.scss";

export default function Home(): JSX.Element {
  const [categories, setCategories] = useState<any[]>([]);

  useCategories({
    onSuccess: ({ data }) => {
      setCategories(data?.categories.items);
    },
  });

  return (
    <div className={"wrap"}>
      {categories.map(item => (
        <HomeSection title={item.name} id={item.id} key={item.id} />
      ))}
    </div>
  );
}
