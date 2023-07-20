import { FC } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { sortFavorites } from "@redux/slices/hotelsSlice";

import HotelItem from "../HotelItem";
import UiSortButton from "@ui/UiSortButton";

import styles from "./Favorites.module.scss";

const Favorites: FC = () => {
  const favorites = useAppSelector((state) => state.hotels.favorites);
  const sortType = useAppSelector((state) => state.hotels.sortType);

  const dispatch = useAppDispatch();

  const onClick = (type: "stars" | "priceAvg", desc: boolean) => {
    dispatch(sortFavorites({ type, desc }));
  };

  const sortTypeTSX = sortType.map((elem) => {
    return (
      <UiSortButton
        key={elem.type}
        onClick={onClick}
        title={elem.title}
        type={elem.type}
        desc={elem.desc}
      />
    );
  });
  const favoritesTSX = favorites.length ? (
    favorites.map((props) => <HotelItem key={props.hotelId} {...props} />)
  ) : (
    <h2 className={styles.empty}>В избранном пока нет элементов</h2>
  );

  return (
    <div className={styles.favorites}>
      <h2 className={styles.favorites__title}>Избранное</h2>
      <div className={styles.favorites__buttons}>{sortTypeTSX}</div>
      <div className={styles.favorites__group}>{favoritesTSX}</div>
    </div>
  );
};

export default Favorites;
