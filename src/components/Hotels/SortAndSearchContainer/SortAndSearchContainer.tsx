import FormSearch from "./FormSearch";
import SortHotelsStars from "./SortHotelsStars";
import SortHotelsPrice from "./SortHotelsPrice";

import styles from "./SortAndSearchContainer.module.scss";

interface Props {
  location: string;
  checkInDate: string;
  countDays: number;
}

const SortAndSearchContainer = ({ location, checkInDate, countDays }: Props) => {
  return (
    <div className={styles.wrapper}>
      <FormSearch location={location} checkInDate={checkInDate} countDays={countDays} />
      <SortHotelsStars />
      <SortHotelsPrice />
    </div>
  );
};

export default SortAndSearchContainer;
