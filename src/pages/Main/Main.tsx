import { FC, useEffect } from "react";
import { useAppSelector,useAppDispatch } from "../../redux/hooks";
import cn from "classnames";

import { getHotelsAsync } from "../../redux/sagas/mainSaga";
import { formatDateByMain } from "../../helpers";

import Header from "../../components/Main/Header/Header";
import FormSearch from "../../components/Main/FormSearch/FormSearch";
import Favorites from "../../components/Main/Favorites/Favorites";
import Carousel from "../../components/Main/Carousel/Carousel";
import HotelGroup from "../../components/Main/HotelGroup/HotelGroup";

import styles from "./Main.module.scss";



type hotelType = {
  hotelId: number;
  hotelName: string;
  location: any;
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: any;
  stars: number;
};

const Main: FC = () => {
  const location = useAppSelector(state => state.main.location);
  const checkInDate = useAppSelector(state => state.main.checkInDate);
  const hotels = useAppSelector(state => state.main.hotels)
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    dispatch(getHotelsAsync())
  },[])

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.container__left}>
          <FormSearch />
          <Favorites />
        </div>
        <div className={cn(styles.container__right, styles.hotel)}>
          <div className={styles.hotel__title}>
            <div className={styles.hotel__name}>
              <div>Отели</div>
              <div className={styles.symbol}>{">"}</div>
              <div>{location}</div>
            </div>
            <div className={styles.hotel__date}>{formatDateByMain(checkInDate)}</div>
          </div>
          <div className={styles.hotel__carousel}>
            <Carousel />
          </div>
          <HotelGroup hotels={hotels} />
        </div>
      </div>
    </div>
  );
};

export default Main;
