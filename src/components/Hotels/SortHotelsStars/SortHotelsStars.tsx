import UiStars from "@components/UI/UiStars";

import styles from "./SortHotelsStars.module.scss";

const SortHotelsStars = () => {
  const starsTSX = [...new Array(5)].map((_, id) => {
    return (
      <div className={styles.wrapper__flex} key={id}>
        <input
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
    <div className="wrapper">
      <h3>Количество звезд</h3>
      {starsTSX}
    </div>
  );
};

export default SortHotelsStars;
