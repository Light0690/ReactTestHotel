import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import cn from "classnames";

import { Navigate } from "react-router-dom";

import { formatDateByMain } from "../../helpers/date";

import Header from "../../components/Main/Header/Header";
import FormSearch from "../../components/Main/FormSearch/FormSearch";
import Favorites from "../../components/Main/Favorites/Favorites";
import Carousel from "../../components/Main/Carousel/Carousel";
import HotelGroup from "../../components/Main/HotelGroup/HotelGroup";

import styles from "./Main.module.scss";

const Main: FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useAppSelector((state) => state.main.location);
  const checkInDate = useAppSelector((state) => state.main.checkInDate);
  const hotels = useAppSelector((state) => state.main.hotels);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

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
            <div className={styles.hotel__date}>
              {formatDateByMain(checkInDate)}
            </div>
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
