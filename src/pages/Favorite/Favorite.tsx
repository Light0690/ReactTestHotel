import cn from "classnames";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
  favoritesSelector,
  sortFavorites,
  sortTypeSelector,
} from "@redux/slices/Hotels/hotelsSlice";

import { ISort } from "@Interfaces/ISort";

import UiSortButton from "@ui/UiSortButton";

import styles from "./Favorite.module.scss";
import HotelGroup from "@components/Hotels/HotelContainer/HotelGroup";

const Favorite = () => {
  const favorites = useAppSelector(favoritesSelector);
  const sortType = useAppSelector(sortTypeSelector);

  const dispatch = useAppDispatch();

  const handleSort = (type: ISort) => {
    dispatch(sortFavorites(type));
  };

  return (
    <div className={styles.wrapper}>
      <div className={cn("block", styles.wrapper__items)}>
        <div className={styles.wrapper__sort}>
          {sortType.map((type, id) => {
            return (
              <UiSortButton
                onClick={() => handleSort(type)}
                {...type}
                key={id}
              />
            );
          })}
        </div>
        <div className={styles.wrapper__group}>
          <HotelGroup hotels={favorites} empty="Не одного отеля не добавлено" />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
