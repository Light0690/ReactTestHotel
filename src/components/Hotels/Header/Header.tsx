import { useAppDispatch } from "@redux/hooks";
import { setAuth } from "@redux/slices/authSlice";

import { RxExit } from "react-icons/rx";

import styles from "./Header.module.scss";

const Header = () => {
  const dispath = useAppDispatch();

  const onClick = () => {
    dispath(setAuth(false));
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>Simple Hotel Check</div>
      <div className={styles.header__icon} onClick={onClick}>
        <span>Выйти</span>
        <RxExit style={{ color: "#41522E" }} />
      </div>
    </div>
  );
};

export default Header;
