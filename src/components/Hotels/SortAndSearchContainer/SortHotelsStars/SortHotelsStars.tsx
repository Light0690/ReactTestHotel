import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
  setSortByStars,
  sortByStarsSelector,
} from "@redux/slices/Hotels/hotelsSlice";

import UiStars from "@ui/UiStars";
import UiCheckBox from "@ui/UiCheckBox";

import styles from "./SortHotelsStars.module.scss";


const SortHotelsStars = () => {
  const sortByStars = useAppSelector(sortByStarsSelector);
  const dispatch = useAppDispatch();

  const handleClick = (num: number) => {
    dispatch(setSortByStars(num));
  };

  const starsTSX = [...new Array(5)].map((_, id) => {
    return (
      <div className={styles.wrapper__flex} key={id}>
        <UiCheckBox
          id={`div${id}`}
          checked={sortByStars.includes(5 - id)}
          onChange={() => handleClick(5 - id)}
          className={styles.wrapper__customСheckbox}
          label={<UiStars stars={5 - id} />}
        />
      </div>
    );
  });

  return (
    <div className="block">
      <h3>Количество звезд</h3>
      {starsTSX}
    </div>
  );
};

export default SortHotelsStars;
