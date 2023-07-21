import { FC } from "react";

import cn from "classnames";

import styles from "./UiFormButton.module.scss";

interface ButtonProps {
  disabled: boolean;
  title: string;
}

const UiFormButton: FC<ButtonProps> = ({ disabled, title }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(styles.button, disabled && styles.button__disabled)}
    >
      {title}
    </button>
  );
};

export default UiFormButton;
