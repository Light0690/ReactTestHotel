import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { addMonthToDate } from "@helpers/date";

import { IHotelItem } from "@Interfaces/IHotelItem";

import { BsFillStarFill } from "react-icons/bs";

import UiHeart from "@ui/UiHeart";

import styles from "./HotelItem.module.scss";
import { changeFavorites } from "@redux/slices/hotelsSlice";

const HotelItem = ({
  _id,
  hotelName,
  priceAvg,
  stars,
  isFavorite,
}: IHotelItem) => {
  const checkInDate = useAppSelector((state) => state.hotels.checkInDate);
  const countDays = useAppSelector((state) => state.hotels.countDays);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(changeFavorites({ _id, hotelName, priceAvg, stars, isFavorite }));
  };

  const daysTSX = (): string => {
    if (countDays === 1) return `${countDays} день`;
    else if (countDays > 1 && countDays < 5) return `${countDays} дня`;
    else return `${countDays} дней`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <h2 className={styles.wrapper__title}>{hotelName}</h2>
        <UiHeart onClick={onClick} isActive={isFavorite} />
      </div>
      <div className={styles.flex}>
        <div className={styles.wrapper__date}>
          {addMonthToDate(checkInDate)} - {daysTSX()}
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.icons}>
          {[...new Array(5)].map((elem, id) => {
            return (
              <BsFillStarFill
                key={id}
                className={cn(
                  styles.icons__item,
                  id + 1 <= stars ? styles.icons__item_active : ""
                )}
              />
            );
          })}
        </div>
        <div className={cn(styles.flex__price, styles.price)}>
          <div className={styles.price__title}>Стоимость:</div>
          <div className={styles.price__cash}>{priceAvg} P</div>
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default HotelItem;
