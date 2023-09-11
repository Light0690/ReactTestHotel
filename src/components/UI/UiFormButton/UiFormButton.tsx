import cn from "classnames";

import styles from "./UiFormButton.module.scss";
import { motion } from "framer-motion";

interface Props {
  disabled: boolean;
  title: string;
}

const UiFormButton = ({ disabled, title }: Props) => {
  const animate = disabled ? "" : { scale: 1.05 };

  return (
    <motion.div className={styles.wrapper} whileHover={animate}>
      <button
        type="submit"
        disabled={disabled}
        className={cn(
          styles.wrapper__button,
          disabled && styles.wrapper__button_disabled,
        )}
      >
        {title}
      </button>
    </motion.div>
  );
};

export default UiFormButton;
