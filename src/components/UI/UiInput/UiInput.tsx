import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./UiInput.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  sizeInput?: "small" | "large";
}

const UiInput = ({
  name,
  type,
  onChange,
  value,
  placeholder,
  text,
  sizeInput = "large",
}: Props) => {
  return (
    <div className={styles.container}>
      {text && (
        <label htmlFor={name} className={styles.container__label}>
          {text}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(styles.container__input, styles[sizeInput])}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UiInput;
