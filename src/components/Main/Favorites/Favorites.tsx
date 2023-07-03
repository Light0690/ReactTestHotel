import { FC } from "react";

import HotelItem from "../HotelItem/HotelItem";
import UiSortButton from "../../UI/UiSortButton/UiSortButton";

import styles from "./Favorites.module.scss";


const Favorites: FC = () => {
  return (
    <div className={styles.favorites}>
      <h2 className={styles.favorites__title}>Избранное</h2>
      <div className={styles.favorites__buttons}>
        <UiSortButton />
        <UiSortButton />
      </div>
      <div className={styles.favorites__group}>
        {[...new Array(3)].map((elem) => (
          <HotelItem key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
