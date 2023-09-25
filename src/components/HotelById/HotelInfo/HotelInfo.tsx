import cn from "classnames";

import hotelById from "@assets/img/hotelById.jpg";

import styles from "./HotelInfo.module.scss";

interface Props {
  name: string;
  city: string;
  days: string | number;
}

const HotelInfo = ({ name, city, days }: Props) => {
  return (
    <div className={cn("block", styles.wrapper)}>
      <img
        className={styles.wrapper__img}
        src={hotelById}
        alt="отель"
        width={200}
        height={150}
      />
      <div className={styles.wrapper__info}>
        <h2>{name}</h2>
        <h4>Город: {city}</h4>
        <h4>Кол-во дней: {days}</h4>
        <div>
          Стандартный двухместный номер с 1 кроватью или двумя отдельными
          кроватями и видом во двор
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
