import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { addMonthToDate } from "@helpers/date/date";

import {
  changeFavorites,
  favoritesSelector,
} from "@redux/slices/Hotels/hotelsSlice";

import { IHotelItem } from "@Interfaces/IHotelItem";

import UiHeart from "@ui/UiHeart";
import UiButton from "@ui/UiButton";
import UiStars from "@ui/UiStars";

import styles from "./HotelItem.module.scss";

const HotelItem = ({
  _id,
  hotelName,
  checkInDate,
  days,
  priceAvg,
  stars,
  isFavorite,
}: IHotelItem) => {
  const favorites = useAppSelector(favoritesSelector);

  const dispatch = useAppDispatch();

  const addToFavorite = () => {
    dispatch(
      changeFavorites({
        _id,
        hotelName,
        checkInDate,
        days,
        priceAvg,
        stars,
        isFavorite,
      }),
    );
  };

  const isFavoriteItem = favorites.some((elem) => elem._id === _id);

  const daysTSX = (): string => {
    if (days === 1) return `${days} день`;
    else if (days > 1 && days < 5) return `${days} дня`;
    else return `${days} дней`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <h2 className={styles.wrapper__title}>{hotelName}</h2>
        <UiHeart onClick={addToFavorite} isActive={isFavoriteItem} />
      </div>
      <div className={styles.flex}>
        <div className={styles.wrapper__date}>
          {addMonthToDate(checkInDate)} - {daysTSX()}
        </div>
        <div className={styles.wrapper__price}>от {priceAvg} P</div>
      </div>
      <div className={styles.flex}>
        <div className={styles.icons}>{<UiStars stars={stars} />}</div>
        <Link to={`/${_id}`}>
          <UiButton title={"забронировать"} onClick={console.log} />
        </Link>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default HotelItem;
