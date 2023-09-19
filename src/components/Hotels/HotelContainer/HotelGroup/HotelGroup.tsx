import { useAppSelector } from "@redux/hooks";

import {
  favoritesSelector,
  isLoadingSelector,
} from "@redux/slices/Hotels/hotelsSlice";

import { IHotelItem } from "@Interfaces/IHotelItem";

import HotelItem from "../HotelItem";
import HotelSkeleton from "../HotelSkeleton";

import { FaHouse } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";

import styles from "./HotelGroup.module.scss";
import { useResize } from "@hooks/useResize";

interface Props {
  hotels: IHotelItem[];
}

const HotelGroup = ({ hotels }: Props) => {
  const { width } = useResize();
  const isLoading = useAppSelector(isLoadingSelector);
  const favorites = useAppSelector(favoritesSelector);

  const hotelsTSX = hotels.length ? (
    hotels.map(
      ({ _id, hotelName, checkInDate, days, priceAvg, stars, isFavorite }) => (
        <div className={styles.wrapper__item} key={_id}>
          {width > 425 && (
            <div className={styles.wrapper__icon}>
              <BsCircleFill className={styles.wrapper__circle} />
              <FaHouse className={styles.wrapper__house} />
            </div>
          )}
          <HotelItem
            _id={_id}
            hotelName={hotelName}
            checkInDate={checkInDate}
            days={days}
            priceAvg={priceAvg}
            stars={stars}
            isFavorite={isFavorite}
          />
        </div>
      )
    )
  ) : (
    <h2 className={styles.empty}>Нет подходящих отелей</h2>
  );
  const skeletonsTSX = [...new Array(4)].map((_, id) => (
    <div key={id}>
      <HotelSkeleton />
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__title}>
        Добавлено в избранное : <b>{favorites.length}</b> отеля
      </div>
      <div className={styles.wrapper__group}>
        {isLoading ? skeletonsTSX : hotelsTSX}
      </div>
    </div>
  );
};

export default HotelGroup;
