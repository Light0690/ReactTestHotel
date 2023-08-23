import { MouseEventHandler } from "react";

import styles from "./UiButton.module.scss";

interface props {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const UiButton = ({ title, onClick }: props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default UiButton;
