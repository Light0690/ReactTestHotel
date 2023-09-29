import { ChangeEvent } from "react";
import { maskJs } from "mask-js";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  bankCardSelector,
  setBankCard,
  setEmail,
  userSelector,
} from "@redux/slices/Auth/authSlice";

import UiInput from "@ui/UiInput";

import styles from "./FormPay.module.scss";

interface Props {}

export const FormPay = ({}: Props) => {
  const { email } = useAppSelector(userSelector);
  const bankCard = useAppSelector(bankCardSelector);

  const dispatch = useAppDispatch();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const onChangeBankCard = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const unMaskText = text.length >= 20 ? text.slice(0, 19) : text;

    dispatch(setBankCard(unMaskText));
  };

  return (
    <div className={cn("block", styles.form)}>
      <UiInput
        text="почта"
        sizeInput="small"
        type="email"
        name="email"
        value={email || ""}
        onChange={(e) => onChangeEmail(e)}
        placeholder="test@mail.ru"
      />
      <UiInput
        text="карта"
        sizeInput="small"
        value={maskJs("9999 9999 9999 9999", bankCard)}
        onChange={(e) => onChangeBankCard(e)}
        placeholder="0000 0000 0000 0000"
      />
    </div>
  );
};

export default FormPay;
