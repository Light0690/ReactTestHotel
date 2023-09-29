import { useMemo } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { favoritesSelector } from "@redux/slices/Hotels/hotelsSlice";

import { setAuth } from "@redux/slices/Auth/authSlice";
import { useTheme } from "@context/useTheme";
import { FAVORITESROUTE, HOTELSROUTE } from "@constans/routesConst";

import UiHeart from "@ui/UiHeart";

import { RxExit } from "react-icons/rx";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

import styles from "./Header.module.scss";

const Header = () => {
  const favorites = useAppSelector(favoritesSelector);
  const isTheme = useTheme();

  const dispath = useAppDispatch();

  const exit = () => {
    dispath(setAuth(false));
  };

  const MAINROUTE = useMemo(() => {
    return HOTELSROUTE.substring(0, 7);
  }, [HOTELSROUTE]);

  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.header__title} to={MAINROUTE}>
          Simple Hotel Check
        </Link>
      </div>
      <div className={styles.header__buttons}>
        <Link to={FAVORITESROUTE} className={styles.header__link}>
          <UiHeart isActive={true} onClick={() => console.log()} />
          <div className={styles.header__count}>{favorites.length}</div>
        </Link>
        <button className={styles.header__icon} onClick={isTheme.changeIsDark}>
          {isTheme.isDark ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
        <button className={styles.header__exit} onClick={exit}>
          <span>Выйти</span>
          <RxExit style={{ color: "#41522E" }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
