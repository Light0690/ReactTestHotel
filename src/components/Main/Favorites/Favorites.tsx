import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { sortFavorites } from "../../../redux/slices/mainSlice";

import HotelItem from "../HotelItem/HotelItem";
import UiSortButton from "../../UI/UiSortButton/UiSortButton";

import styles from "./Favorites.module.scss";

const Favorites: FC = () => {
  const favorites = useAppSelector((state) => state.main.favorites);
  const sortType = useAppSelector((state) => state.main.sortType);

  const dispatch = useAppDispatch();

  const onClick = (type: "stars" | "priceAvg", desc: boolean) => {
    dispatch(sortFavorites({ type, desc }));
  };

  return (
    <div className={styles.favorites}>
      <h2 className={styles.favorites__title}>Избранное</h2>
      <div className={styles.favorites__buttons}>
        {sortType.map((elem) => {
          return (
            <UiSortButton
              key={elem.type}
              onClick={onClick}
              title={elem.title}
              type={elem.type}
              desc={elem.desc}
            />
          );
        })}
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
