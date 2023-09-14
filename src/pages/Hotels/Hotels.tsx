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

import SortAndSearchContainer from "@components/Hotels/SortAndSearchContainer";
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
          <SortAndSearchContainer
            location={location}
            checkInDate={checkInDate}
            countDays={countDays}
          />
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
