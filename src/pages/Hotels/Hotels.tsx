import { Navigate } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "@redux/hooks";

import { addMonthToDate } from "@helpers/date";

import Header from "@components/Hotels/Header";
import FormSearch from "@components/Hotels/FormSearch";
import Favorites from "@components/Hotels/Favorites";
import Carousel from "@components/Hotels/Carousel";
import HotelGroup from "@components/Hotels/HotelGroup";
import UiAlert from "@components/UI/UiAlert/UiAlert";

import styles from "./Hotels.module.scss";

const Hotels = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useAppSelector((state) => state.hotels.location);
  const checkInDate = useAppSelector((state) => state.hotels.checkInDate);
  const hotels = useAppSelector((state) => state.hotels.hotels);
  const error = useAppSelector((state) => state.hotels.error);
console.log(error)
  // console.log(hotels);
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
      {error && <UiAlert message={error}/>}
    </div>
  );
};

export default Hotels;
