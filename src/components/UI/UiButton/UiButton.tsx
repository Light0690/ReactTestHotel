import { FC } from "react";

import styles from "./UiButton.module.scss";
import cn from "classnames";

interface Props {
  disabled: boolean;
  title: string;
}

const UiButton: FC<Props> = ({ disabled, title }) => {
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

export default UiButton;
