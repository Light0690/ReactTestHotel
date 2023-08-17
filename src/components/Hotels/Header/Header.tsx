import { useAppDispatch } from "@redux/hooks";

import { setAuth } from "@redux/slices/authSlice";
import { useTheme } from "@context/ThemeProvider";

import { RxExit } from "react-icons/rx";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

import styles from "./Header.module.scss";

const Header = () => {
  const isTheme = useTheme();
  const dispath = useAppDispatch();

  const onClick = () => {
    dispath(setAuth(false));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>Simple Hotel Check</div>
      <div className={styles.header__buttons}>
        <button className={styles.header__icon} onClick={isTheme.changeIsDark}>
          {isTheme.isDark ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
        <button className={styles.header__exit} onClick={onClick}>
          <span>Выйти</span>
          <RxExit style={{ color: "#41522E" }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
