import { useAppSelector } from "@redux/hooks";

import { IHotelFetch } from "@Interfaces/IHotelFetch";

import HotelItem from "../HotelItem";
import HotelSkeleton from "../HotelSkeleton";

import { FaHouse } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";

import styles from "./HotelGroup.module.scss";

interface Props {
  hotels: IHotelFetch[];
}

const HotelGroup = ({ hotels }: Props) => {
  const isLoading = useAppSelector((state) => state.hotels.isLoading);
  const favorites = useAppSelector((state) => state.hotels.favorites);

  const hotelsTSX = hotels.length ? (
    hotels.map(({ hotelId, hotelName, priceAvg, stars }) => (
      <div className={styles.wrapper__item} key={hotelId}>
        <div className={styles.wrapper__icon}>
          <BsCircleFill className={styles.wrapper__circle} />
          <FaHouse className={styles.wrapper__house} />
        </div>
        <HotelItem
          hotelId={hotelId}
          hotelName={hotelName}
          priceAvg={priceAvg}
          stars={stars}
        />
      </div>
    ))
  ) : (
    <h2 className={styles.empty}>Нет подходящих отелей</h2>
  );
  const skeletonsTSX = [...new Array(5)].map((_, id) => (
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
