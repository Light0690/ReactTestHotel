import { MouseEventHandler } from "react";
import cn from "classnames";

import styles from "./UiButton.module.scss";
import { motion } from "framer-motion";

interface props {
  title: string;
  size?: "small" | "large";
  color?: "normal" | "primary";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const UiButton = ({
  title,
  size = "small",
  color = "normal",
  onClick,
}: props) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.wrapper}>
      <button
        className={cn(styles.wrapper__button, styles[size], styles[color])}
        onClick={onClick}
      >
        {title}
      </button>
    </motion.div>
  );
};

export default UiButton;
