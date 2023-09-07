import { MouseEventHandler } from "react";
import cn from "classnames";

import styles from "./UiButton.module.scss";

interface props {
  title: string;
  size?: "small" | "large";
  color?: "normal" | "primary";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const UiButton = ({ title, size = "small", color = "normal", onClick }: props) => {
  return (
    <button className={cn(styles.button, styles[size],styles[color])} onClick={onClick}>
      {title}
    </button>
  );
};

export default UiButton;
