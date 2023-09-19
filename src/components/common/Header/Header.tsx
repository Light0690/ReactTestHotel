import { Link } from "react-router-dom";

import { useAppDispatch } from "@redux/hooks";

import { setAuth } from "@redux/slices/Auth/authSlice";
import { useTheme } from "@context/useTheme";
import { FAVORITEROUTE, HOTELSROUTE } from "@constans/routesConst";

import UiHeart from "@ui/UiHeart";

import { RxExit } from "react-icons/rx";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

import styles from "./Header.module.scss";

const Header = () => {
  const isTheme = useTheme();
  const dispath = useAppDispatch();

  const exit = () => {
    dispath(setAuth(false));
  };

  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.header__title} to={HOTELSROUTE}>
          Simple Hotel Check
        </Link>
      </div>
      <div className={styles.header__buttons}>
        <Link to={FAVORITEROUTE} className={styles.header__link}>
          <UiHeart isActive={true} onClick={() => console.log()} />
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
