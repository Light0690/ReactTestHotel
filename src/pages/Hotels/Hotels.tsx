import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { useResize } from "@hooks/useResize";

import {
  checkInDateSelector,
  countDaysSelector,
  errorSelector,
  hotelsSelector,
  locationSelector,
} from "@redux/slices/Hotels/hotelsSlice";
import { fetchHotels } from "@redux/async/Hotels/fetchHotels";

import FormSearch from "@components/Hotels/FormSearch";
import SortHotelsStars from "@components/Hotels/SortHotelsStars";
import SortHotelsPrice from "@components/Hotels/SortHotelsPrice";
import HotelContainer from "@components/Hotels/HotelContainer";

import FetchWithError from "@ux/FetchWithError";

import styles from "./Hotels.module.scss";

const Hotels = () => {
  const location = useAppSelector(locationSelector);
  const checkInDate = useAppSelector(checkInDateSelector);
  const countDays = useAppSelector(countDaysSelector);
  const hotels = useAppSelector(hotelsSelector);
  const error = useAppSelector(errorSelector);

  const dispatch = useAppDispatch();

  const { isScreenXl } = useResize();

  useEffect(() => {
    dispatch(fetchHotels({ location, countDays }));
  }, [location, countDays, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        {isScreenXl ? (
          <div className={styles.wrapper__search}>
            <FormSearch />
            <SortHotelsStars />
            <SortHotelsPrice />
          </div>
        ) : (
          ""
        )}
        <HotelContainer location={location} checkInDate={checkInDate} hotels={hotels} />
      </div>
      <FetchWithError error={error} />
    </div>
  );
};

export default Hotels;
