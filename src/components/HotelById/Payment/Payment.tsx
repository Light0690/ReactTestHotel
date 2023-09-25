import { useState } from "react";
import cn from "classnames";

import UiButton from "@ui/UiButton";
import UiInput from "@ui/UiInput";

import styles from "./Payment.module.scss";
import UiCheckBox from "@components/UI/UiCheckBox";

interface Props {
  price: number;
}

const Payment = ({ price }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className={cn("block", styles.wrapper)}>
      <div className={styles.wrapper__flex}>
        <h4>Стоимость номера</h4>
        <span className={styles.wrapper__price}>{price} ₽</span>
      </div>
      <div className={cn(styles.wrapper__flex, styles.wrapper__promo)}>
        <UiCheckBox
          id="promo"
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
          label={"У меня есть промокод"}
        />
      </div>
      {isChecked && (
        <UiInput
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          sizeInput="small"
        />
      )}
      <hr className={styles.wrapper__hr} />
      <h4>Итого: {price} ₽</h4>
      <div>
        <UiButton title="оплатить" size="large" onClick={() => console.log()} />
      </div>
    </div>
  );
};

export default Payment;
