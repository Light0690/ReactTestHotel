import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@redux/hooks";

import { addMonthToDate } from "@helpers/date/date";

import { changeFavorites } from "@redux/slices/Hotels/hotelsSlice";

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
  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(changeFavorites({ _id, checkInDate, days, hotelName, priceAvg, stars, isFavorite }));
  };

  const daysTSX = (): string => {
    if (days === 1) return `${days} день`;
    else if (days > 1 && days < 5) return `${days} дня`;
    else return `${days} дней`;
  };

  const goToHotelById = () => {
    navigation(`/${_id}`);
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
        <div className={styles.wrapper__price}>от {priceAvg} P</div>
      </div>
      <div className={styles.flex}>
        <div className={styles.icons}>{<UiStars stars={stars} />}</div>
        <div>
          <UiButton title={"забронировать"} onClick={goToHotelById} />
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default HotelItem;
