import cn from "classnames";

import { BsFillStarFill } from "react-icons/bs";

import styles from "./UiStars.module.scss";

interface Props {
  stars: number;
}

const UiStars = ({ stars }: Props) => {
  return (
    <div>
      {[...new Array(5)].map((_, id) => {
        return (
          <BsFillStarFill
            key={id}
            className={cn(
              styles.wrapper,
              id + 1 <= stars ? styles.wrapper_active : "",
            )}
          />
        );
      })}
    </div>
  );
};

export default UiStars;
