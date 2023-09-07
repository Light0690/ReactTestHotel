import { useAppSelector } from "@redux/hooks";
import {
  checkInDateSelector,
  errorSelector,
  hotelsSelector,
  locationSelector,
} from "@redux/slices/Hotels/hotelsSlice";

import Header from "@components/Hotels/Header";
import FormSearch from "@components/Hotels/FormSearch";
import SortHotels from "@components/Hotels/SortHotels";
import Container from "@components/Hotels/Container";

import FetchWithError from "@ux/FetchWithError";

import styles from "./Hotels.module.scss";

const Hotels = () => {
  const location = useAppSelector(locationSelector);
  const checkInDate = useAppSelector(checkInDateSelector);
  const hotels = useAppSelector(hotelsSelector);
  const error = useAppSelector(errorSelector);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__search}>
          <FormSearch />
          <SortHotels />
        </div>
        <Container location={location} checkInDate={checkInDate} hotels={hotels} />
      </div>
      <FetchWithError error={error} />
    </div>
  );
};

export default Hotels;
