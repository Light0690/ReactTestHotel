import { FC } from "react";
import cn from "classnames";

import styles from "./UiInput.module.scss";

type Field = {
  name: string;
};

type Form = {
  touched: any;
  errors: any;
};

interface InputProps {
  field: Field;
  form: Form;
  title: string;
}

const UiInput: FC<InputProps> = ({
  field,
  form: { touched, errors },
  title,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label
        className={cn(
          styles.container__label,
          touched[field.name] && errors[field.name] && styles.container__errors
        )}
        htmlFor="email"
      >
        {title}
      </label>
      <input
        type="text"
        className={styles.container__input}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <div className={styles.container__error}>{errors[field.name]}</div>
      )}
    </div>
  );
};

export default UiInput;
