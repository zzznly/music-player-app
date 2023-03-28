import { useState } from "react";

// styles
import "./style.scss";

// react-query
import { useCategories } from "../../../../../logics/queries/useQueries";

// types
import { CategoriesItem } from "../../../../../types/categories";

// router
import { Link } from "react-router-dom";

interface CategoriesItemColored extends CategoriesItem {
  bgColor: string;
}

export default function SearchMain(): JSX.Element {
  const [categoriesList, setCategoriesList] = useState<CategoriesItemColored[]>(
    []
  );
  const bgColors: string[] = [
    "rgb(225, 51, 0)",
    "rgb(115, 88, 255)",
    "rgb(30, 50, 100)",
    "rgb(232, 17, 91)",
    "rgb(45, 70, 185)",
    "rgb(20, 138, 8)",
    "rgb(188, 89, 0)",
    "rgb(220, 20, 140)",
    "rgb(141, 103, 171)",
    "rgb(119, 119, 119)",
    "rgb(255, 0, 144)",
    "rgb(5, 105, 82)",
    "rgb(225, 51, 0)",
    "rgb(115, 88, 255)",
    "rgb(30, 50, 100)",
    "rgb(232, 17, 91)",
    "rgb(45, 70, 185)",
    "rgb(20, 138, 8)",
    "rgb(188, 89, 0)",
    "rgb(220, 20, 140)",
  ];

  useCategories({
    onSuccess: ({
      data: {
        categories: { items },
      },
    }) => {
      let arr: any[] = [];
      items.forEach((item: CategoriesItemColored, idx: number) => {
        item = {
          ...item,
          bgColor: bgColors[idx],
        };
        arr.push(item);
      });

      setCategoriesList(arr);
    },
  });

  return (
    <div className={"main"}>
      <h2 className={"main-title"}>모두 둘러보기</h2>
      <div className={"main-content"}>
        {categoriesList?.map(item => (
          <Link
            className={"main-content__item"}
            key={item.id}
            to={`/playlist/detail?id=${item.id}`}
            style={{ background: `${item.bgColor}` }}
          >
            <div className={"main-content__item-wrap"}>
              <p className={"main-content__label"}>{item.name}</p>
              <img
                className={"main-content__image"}
                src={item.icons[0].url}
                alt={item.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
