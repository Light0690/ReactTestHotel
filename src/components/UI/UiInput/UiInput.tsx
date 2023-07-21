import { FC, ChangeEventHandler, FocusEventHandler } from "react";
import cn from "classnames";

import styles from "./UiInput.module.scss";

interface InputProps {
  name: string;
  type: string;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  value: string | number;
  errors: string | undefined;
  touched: boolean | undefined;
}

const UiInput: FC<InputProps> = ({
  name,
  type,
  title,
  onChange,
  onBlur,
  value,
  errors,
  touched,
}) => {
  return (
    <div className={styles.container}>
      <label
        className={cn(
          styles.container__label,
          touched && errors && styles.container__errors
        )}
        htmlFor={name}
      >
        {title}
      </label>
      <input
        name={name}
        type={type}
        className={styles.container__input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && errors && (
        <div className={styles.container__error}>{errors}</div>
      )}
    </div>
  );
};

export default UiInput;
