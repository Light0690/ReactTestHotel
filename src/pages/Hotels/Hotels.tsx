import { Navigate } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "@redux/hooks";
import {
  checkInDateSelector,
  errorSelector,
  hotelsSelector,
  locationSelector,
} from "@redux/slices/hotelsSlice";

import { addMonthToDate } from "@helpers/date";

import { authSelector } from "@redux/slices/authSlice";

import Header from "@components/Hotels/Header";
import FormSearch from "@components/Hotels/FormSearch";
import Favorites from "@components/Hotels/Favorites";
import Carousel from "@components/Hotels/Carousel";
import HotelGroup from "@components/Hotels/HotelGroup";

import FetchWithError from "@ux/FetchWithError";

import styles from "./Hotels.module.scss";

const Hotels = () => {
  const isAuth = useAppSelector(authSelector);
  const location = useAppSelector(locationSelector);
  const checkInDate = useAppSelector(checkInDateSelector);
  const hotels = useAppSelector(hotelsSelector);
  const error = useAppSelector(errorSelector);

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
              {addMonthToDate(checkInDate)}
            </div>
          </div>
          <div className={styles.hotel__carousel}>
            <Carousel />
          </div>
          <HotelGroup hotels={hotels} />
        </div>
      </div>
      <FetchWithError error={error} />
    </div>
  );
};

export default Hotels;
