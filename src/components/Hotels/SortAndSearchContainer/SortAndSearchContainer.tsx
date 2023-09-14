import FormSearch from "./FormSearch";
import SortHotelsStars from "./SortHotelsStars";
import SortHotelsPrice from "./SortHotelsPrice";

import styles from "./SortAndSearchContainer.module.scss";


const SortAndSearchContainer = () => {
  return (
    <div className={styles.wrapper}>
      <FormSearch  />
      <SortHotelsStars />
      <SortHotelsPrice />
    </div>
  );
};

export default SortAndSearchContainer;
