import { useState, useMemo } from "react";
import cn from "classnames";

import { useAppSelector } from "@redux/hooks";

import { bankCardSelector, userSelector } from "@redux/slices/Auth/authSlice";

import UiButton from "@ui/UiButton";
import UiInput from "@ui/UiInput";
import UiCheckBox from "@ui/UiCheckBox";

import styles from "./Payment.module.scss";

interface Props {
  price: number;
}

const Payment = ({ price }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const bankCard = useAppSelector(bankCardSelector);
  const { email } = useAppSelector(userSelector);

  const priceWithPromo = useMemo(() => {
    const codes = ["test1", "test2", "test3"];

    return codes.includes(promoCode) ? (price * 0.5).toFixed(0) : price;
  }, [promoCode, price]);

  const alertText = `Будь это настоящий сайт, то мы сделали бы запрос на оплату\n на сумму - ${priceWithPromo},\n по карте - ${bankCard}\n и подтверждение на почту - ${email}`;

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
        <>
          <span className={styles.wrapper__price}>
            промо коды - test1, test2, test3
          </span>
          <UiInput
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            sizeInput="small"
          />
        </>
      )}
      <hr className={styles.wrapper__hr} />
      <h4>Итого: {priceWithPromo} ₽</h4>
      <div>
        <UiButton
          title="оплатить"
          size="large"
          onClick={() => alert(alertText)}
        />
      </div>
    </div>
  );
};

export default Payment;
