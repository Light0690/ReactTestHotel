import { useState } from "react";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";

import { LuSettings2 } from "react-icons/lu";

import styles from "./PopupMenu.module.scss";

interface Props {
  component: React.ReactNode;
}

const PopupMenu = ({ component }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <button className={cn("block", styles.wrapper__button)} onClick={onClick}>
        <LuSettings2 className={styles.wrapper__settingIcon} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <div className={styles.wrapper__container} onClick={onClick}>
            <motion.div
              key="PopupMenu"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn("block", styles.wrapper__block)}
              onClick={(e) => e.stopPropagation()}>
              {component}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopupMenu;
