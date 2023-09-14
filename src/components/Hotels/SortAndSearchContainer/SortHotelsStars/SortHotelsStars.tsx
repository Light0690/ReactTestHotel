import { useAppDispatch } from "@redux/hooks";

import { setSortByStars } from "@redux/slices/Hotels/hotelsSlice";

import UiStars from "@components/UI/UiStars";

import styles from "./SortHotelsStars.module.scss";

const SortHotelsStars = () => {
  const dispatch = useAppDispatch();

  const handleClick = (num: number) => {
    dispatch(setSortByStars(5 - num));
  };

  const starsTSX = [...new Array(5)].map((_, id) => {
    return (
      <div className={styles.wrapper__flex} key={id}>
        <input
          onClick={() => handleClick(id)}
          id={`div${id}`}
          type="checkbox"
          className={styles.wrapper__customСheckbox}
        />
        <label htmlFor={`div${id}`} className={styles.wrapper__label}>
          <UiStars stars={5 - id} />
        </label>
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
