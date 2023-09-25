import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { hotelByIdSelector } from "@redux/slices/Hotels/hotelsSlice";
import { fetchHotelById } from "@redux/async/Hotels/fetchHotels";

import HotelInfo from "@components/HotelById/HotelInfo";
import Payment from "@components/HotelById/Payment";

import styles from "./HotelById.module.scss";

const HotelById = () => {
  const hotel = useAppSelector(hotelByIdSelector);

  const { id, checkInDate, countDays } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && checkInDate && countDays)
      dispatch(fetchHotelById({ id, checkInDate, countDays: +countDays }));
  }, [id, checkInDate, countDays, dispatch]);

  console.log(hotel);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__flex}>
        <HotelInfo
          name={hotel?.hotelName || ""}
          city={hotel?.city || ""}
          days={hotel?.days || ""}
        />
        <Payment price={hotel?.priceAvg || 0} />
      </div>
    </div>
  );
};

export default HotelById;
