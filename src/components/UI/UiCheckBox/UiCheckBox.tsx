import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./UiCheckBox.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: JSX.Element | string;
  className?: string;
}

const UiCheckBox = ({ id, onChange, checked, label, className }: Props) => {
  return (
    // <input
    //   onChange={onChange}
    //   id={id}
    //   type="checkbox"
    //   checked={checked}
    //   className={cn(styles.customСheckbox,className)}
    // />
    <div className={styles.wrapper}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={cn(styles.wrapper__customСheckbox, className)}
      />
      <label htmlFor={id} className={styles.wrapper__label}>
        {label}
      </label>
    </div>
  );
};

export default UiCheckBox;
