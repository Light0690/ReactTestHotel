import { FC } from "react";

import styles from './UiButton.module.scss';

interface Props {
  props : any;
}

const UiButton: FC<Props> = (props) => {
  return (
    <button className={styles.button}>
      Войти
    </button>
  );
};

export default UiButton;
