import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { addMonthToDate } from "@helpers/date/date";
import {
  checkInDateSelector,
  countDaysSelector,
  changeFavorites,
} from "@redux/slices/Hotels/hotelsSlice";

import { IHotelItem } from "@Interfaces/IHotelItem";

import { BsFillStarFill } from "react-icons/bs";

import UiHeart from "@ui/UiHeart";
import UiButton from "@ui/UiButton";

import styles from "./HotelItem.module.scss";

const HotelItem = ({ _id, hotelName, priceAvg, stars, isFavorite }: IHotelItem) => {
  const checkInDate = useAppSelector(checkInDateSelector);
  const countDays = useAppSelector(countDaysSelector);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(changeFavorites({ _id, hotelName, priceAvg, stars, isFavorite }));
  };

  const daysTSX = (): string => {
    if (countDays === 1) return `${countDays} день`;
    else if (countDays > 1 && countDays < 5) return `${countDays} дня`;
    else return `${countDays} дней`;
  };

  const iconsTSX = [...new Array(5)].map((_, id) => {
    return (
      <BsFillStarFill
        key={id}
        className={cn(styles.icons__item, id + 1 <= stars ? styles.icons__item_active : "")}
      />
    );
  });

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
        <div className={styles.wrapper__price}>от {priceAvg} P</div>
      </div>
      <div className={styles.flex}>
        <div className={styles.icons}>{iconsTSX}</div>
        <div>
          <UiButton title={"забронировать"} onClick={() => console.log(1)} />
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default HotelItem;
