import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./UiInput.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  sizeInput?: "small" | "large";
}

const UiFormInput = ({ type, onChange, value, sizeInput = "large" }: Props) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        className={cn(styles.container__input,styles[sizeInput])}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UiFormInput;
