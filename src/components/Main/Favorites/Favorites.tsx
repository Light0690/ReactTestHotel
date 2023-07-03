import { FC } from "react";

import { useAppSelector } from "../../../redux/hooks";

import HotelItem from "../HotelItem/HotelItem";
import UiSortButton from "../../UI/UiSortButton/UiSortButton";

import styles from "./Favorites.module.scss";


const Favorites: FC = () => {
  const favorites = useAppSelector(state => state.main.favorites)

  return (
    <div className={styles.favorites}>
      <h2 className={styles.favorites__title}>Избранное</h2>
      <div className={styles.favorites__buttons}>
        <UiSortButton />
        <UiSortButton />
      </div>
      <div className={styles.favorites__group}>
        {favorites.map((props) => (
          <HotelItem key={props.hotelId} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
