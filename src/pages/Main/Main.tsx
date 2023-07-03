import { FC, useEffect } from "react";
import cn from "classnames";
import axios from "axios";

import Header from "../../components/Main/Header/Header";
import FormSearch from "../../components/Main/FormSearch/FormSearch";
import Favorites from "../../components/Main/Favorites/Favorites";
import Carousel from "../../components/Main/Carousel/Carousel";
import HotelGroup from "../../components/Main/HotelGroup/HotelGroup";

import styles from "./Main.module.scss";

const Main: FC = () => {
  let hotels = {};
  const url =
    "http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2020-12-10&checkOut=2023-12-12&limit=10";

  useEffect(() => {
    axios
      .get(
        "http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-12-10&checkOut=2023-12-12&limit=20"
      )
      .then((res) => (hotels = res))
      .then(() => console.log(hotels));
  }, []);

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
              <div>Москва</div>
            </div>
            <div className={styles.hotel__date}>07 июля 2020</div>
          </div>
          <div className={styles.hotel__carousel}>
            <Carousel />
          </div>
          <HotelGroup />
        </div>
      </div>
    </div>
  );
};

export default Main;
