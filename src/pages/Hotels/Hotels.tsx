import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import qs from "qs";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useResize } from "@hooks/useResize";

import {
  checkInDateSelector,
  countDaysSelector,
  hotelsSelector,
  locationSelector,
  setSearchParams,
  sortByPriceSelector,
  sortByStarsSelector,
} from "@redux/slices/Hotels/hotelsSlice";
import { fetchAllHotels } from "@redux/async/Hotels/fetchHotels";

import { HOTELSROUTE } from "@constans/routesConst";

import SortAndSearchContainer from "@components/Hotels/SortAndSearchContainer";
import HotelContainer from "@components/Hotels/HotelContainer";
import HotelGroup from "@components/Hotels/HotelContainer/HotelGroup";

import PopupMenu from "@ux/PopupMenu";

import styles from "./Hotels.module.scss";

const Hotels = () => {
  const location = useAppSelector(locationSelector);
  const checkInDate = useAppSelector(checkInDateSelector);
  const countDays = useAppSelector(countDaysSelector);
  const sortByStars = useAppSelector(sortByStarsSelector);
  const sortByPrice = useAppSelector(sortByPriceSelector);
  const hotels = useAppSelector(hotelsSelector);

  const [isSearch, setIsSearch] = useState(false);
  const { searchParams } = useParams();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isScreenMd, isScreenXl } = useResize();

  useEffect(() => {
    if (searchParams) {
      const params = qs.parse(searchParams);
      dispatch(setSearchParams(params));
      setIsSearch(true);
    }
  }, []);

  useEffect(() => {
    const queryString = qs.stringify({
      location,
      checkInDate,
      countDays,
      sortByStars,
      sortByPrice,
    });

    const ROUTE = HOTELSROUTE.replace(":searchParams?", queryString);

    navigate(ROUTE);

    if (isSearch) {
      dispatch(
        fetchAllHotels({
          location,
          checkInDate,
          countDays,
          sortByStars,
          sortByPrice,
        })
      );
    }
  }, [
    location,
    checkInDate,
    countDays,
    sortByStars,
    sortByPrice,
    isSearch,
    dispatch,
  ]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        {isScreenXl ? (
          <SortAndSearchContainer />
        ) : (
          <PopupMenu component={<SortAndSearchContainer />} />
        )}
        {isScreenMd ? (
          <HotelContainer
            location={location}
            checkInDate={checkInDate}
            hotels={hotels}
          />
        ) : (
          <div className={cn("block", styles.wrapper__group)}>
            <HotelGroup hotels={hotels} empty="Нет подходящих отелей" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
