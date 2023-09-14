import cn from "classnames";

import { addMonthToDate } from "@helpers/date/date";

import { IHotelItem } from "@Interfaces/IHotelItem";

import Carousel from "./Carousel";
import HotelGroup from "./HotelGroup";

import styles from "./HotelContainer.module.scss";

interface Props {
  location: string;
  checkInDate: string;
  hotels: IHotelItem[];
}

const HotelContainer = ({ location, checkInDate, hotels }: Props) => {
  return (
    <div className={cn("block", styles.wrapper)}>
      <div className={styles.wrapper__title}>
        <div className={styles.wrapper__name}>
          <div>Отели</div>
          <div className={styles.wrapper__symbol}>{">"}</div>
          <div>{location}</div>
        </div>
        <div className={styles.wrapper__date}>
          {addMonthToDate(checkInDate)}
        </div>
      </div>
      <div className={styles.wrapper__carousel}>
        <Carousel />
      </div>
      <HotelGroup hotels={hotels} />
    </div>
  );
};

export default HotelContainer;
