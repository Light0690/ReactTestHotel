import { FC } from "react";

import styles from "./UiButton.module.scss";

interface Props {
  type: 'button' | 'submit' | undefined;
  disabled: boolean;
}

const UiButton: FC<Props> = ({ type,disabled }) => {
  return (
    <button type={type} disabled={disabled} className={styles.button}>
      Войти
    </button>
  );
};

export default UiButton;
