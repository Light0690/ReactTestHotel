import { useEffect, useState } from "react";
import cn from "classnames";

import loaderBlack from "./img/loader-black.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";

import styles from "./UILoading.module.css";

interface props {
  theme: string;
  isShadow: boolean;
  classes?: string;
}

const UILoading = ({ theme = "white", isShadow = true, classes }: props) => {
  const [loaderIcon, setLoaderIcon] = useState<string>("");

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderWhite);
        break;
    }
  }, [theme]);

  return (
    <img
      src={loaderIcon}
      alt="loader"
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
    />
  );
};

export default UILoading;
