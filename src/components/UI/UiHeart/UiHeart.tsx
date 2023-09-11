import cn from "classnames";

import { BsFillSuitHeartFill } from "react-icons/bs";

import styles from "./UiHeart.module.scss";

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const UiHeart = ({ onClick, isActive }: Props) => {
  return (
    <button className={styles.wrapper}>
      <BsFillSuitHeartFill
        onClick={onClick}
        className={cn(
          styles.wrapper__heart,
          isActive ? styles.wrapper__heart_active : isActive,
        )}
      />
    </button>
  );
};

export default UiHeart;
